import { HttpException } from "./http.exception";

export class EmailInUseException extends HttpException {
  constructor() {
    super(400, "The provided email is in use");
  }
}
