import { IsString } from "class-validator";

export class CreateWestlandsAccountDTO {
  @IsString()
  public account_name: string;

  @IsString()
  public account_number: string;
}
