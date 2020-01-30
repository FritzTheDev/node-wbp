import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CreateWestlandsAccountDTO } from "../westlandsAccount/createWestlandsAccount.dto";

export class CreateUserDTO {
  @IsString()
  public full_name: string;

  @IsString()
  public email: string;

  @IsString()
  public password_hash: string;

  @IsOptional()
  @ValidateNested()
  public westlandsAccount?: CreateWestlandsAccountDTO;
}
