import { Request } from "express";

export interface RequestWithUser extends Request {
  // consider adding better typing to the user property
  user: any;
}
