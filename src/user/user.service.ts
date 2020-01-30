import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { EmailInUseException } from "../exceptions/emailInUse.exception";
import { User } from "./user.entity";

class UserService {
  private userRepository = getRepository(User);

  public async register(userData: CreateUserDto) {}
}
