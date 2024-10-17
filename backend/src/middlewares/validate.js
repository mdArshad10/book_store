import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

export const validate = (req, res, next) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      return next();
    }
    console.log(error);

    const extractedErrors = [];
    error.array().map((err) => extractedErrors.push(err.msg));
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: null,
      err: extractedErrors,
    });
  } catch (error) {
    console.log("some thing wrong with in validate");
    console.log(error);

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: null,
      err: error,
    });
  }
};
