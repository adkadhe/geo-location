import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const schema = Joi.object({
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
});

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = schema.validate(req.query);
  if (error) {
    return res.status(400).sendError("Invalid parameters", error.details);
  }
  next();
};
