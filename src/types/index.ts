import { Response } from "express";

declare module "express-serve-static-core" {
  interface Response {
    sendSuccess(data: any, message?: string): void;
    sendError(message?: string, data?: any, statusCode?: number): void;
  }
}
