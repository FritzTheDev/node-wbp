import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/http.exception';

export const errorMiddleware = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message =
    error.message || 'Something Has Gone Wrong. Contact the Admin.';
  response.status(status).json({
    message,
    status
  });
};
