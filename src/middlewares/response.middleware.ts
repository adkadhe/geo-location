import { Request, Response, NextFunction } from "express";

interface ApiResponse {
  success: boolean;
  message: string;
  data: any;
}

export const sendSuccessResponse = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.sendSuccess = (data: any, message: string = "Success") => {
    const response: ApiResponse = {
      success: true,
      message,
      data,
    };
    res.status(200).json(response);
  };
  next();
};

export const sendErrorResponse = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.sendError = (
    message: string = "An error occurred",
    data: any = null,
    statusCode: number = 500,
  ) => {
    const response: ApiResponse = {
      success: false,
      message,
      data,
    };
    res.status(statusCode).json(response);
  };
  next();
};
