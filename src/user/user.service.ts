import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { EmailInUseException } from "../exceptions/emailInUse.exception";
import { User } from "./user.entity";
import { CreateUserDTO } from "./createUser.dto";

class UserService {
  private userRepository = getRepository(User);

  public async register(userData: CreateUserDTO) {
    if (await this.userRepository.findOne({ email: userData.email })) {
      throw new EmailInUseException(userData.email);
    }
    const password = await bcrypt.hash(userData.password, 10);
    const user = this.userRepository.create({
      ...userData,
      password
    });
    await this.userRepository.save(user);
    user.password = undefined;
    const tokenData = this.createToken(user);
    return {};
  }

  public createToken(user: User): string {
    const expiresIn = 60 * 60 * 24 * 7;
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken = {
      id: user.id
    };
    return `Bearer ${jwt.sign(dataStoredInToken, secret, { expiresIn })}`;
  }
}
