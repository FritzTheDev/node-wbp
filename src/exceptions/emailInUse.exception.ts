import { HttpException } from "./http.exception";

export class EmailInUseException extends HttpException {
  constructor(email: string) {
    super(400, `The provided email, ${email} is in use`);
  }
}
