import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { EmailInUseException } from "../exceptions/emailInUse.exception";
import { BadCredentialsException } from "../exceptions/BadCredentials.exception";
import { User } from "./user.entity";
import { CreateUserDTO } from "./createUser.dto";
import { LoginUserDTO } from "./loginUser.dto";
import { HttpException } from "src/exceptions/http.exception";

export class UserService {
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
    const token = this.createToken(user);
    return { user, token };
  }

  public async login(userData: LoginUserDTO) {
    const user = await this.userRepository.findOne({ email: userData.email });
    try {
      const isMatch = await bcrypt.compare(userData.password, user.password);
      if (!isMatch) {
        throw new BadCredentialsException();
      }
    } catch {
      throw new HttpException();
    }
    user.password = undefined;
    const token = this.createToken(user);
    return { user, token };
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
