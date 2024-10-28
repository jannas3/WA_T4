import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationErrorItem } from "joi";

const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (error) {
      console.error("Validation Error:", error);

      res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: "Validation failed",
        details: error.details.map((err: ValidationErrorItem) => ({
          message: err.message,
          path: err.path,
          type: err.type,
        })),
      });
    } else {
      next();
    }
  };
};

export default validate;
