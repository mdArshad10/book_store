import { StatusCodes } from "http-status-codes";

class ErrorHandler extends Error {
  constructor(
    statusCode = StatusCodes.BAD_REQUEST,
    message = "something wrong"
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { ErrorHandler };
