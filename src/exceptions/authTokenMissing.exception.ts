import { HttpException } from "./http.exception";

export class AuthTokenMissingException extends HttpException {
  constructor() {
    super(401, "Authentication token is missing");
  }
}
