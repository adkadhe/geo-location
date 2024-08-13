import { Request, Response } from "express";
import { getLocation } from "../services/location.service";

export const fetchLocation = async (req: Request, res: Response) => {
  const { latitude, longitude } = req.query as {
    latitude: string;
    longitude: string;
  };

  try {
    const location = await getLocation(latitude, longitude);
    res.sendSuccess(location);
  } catch (error) {
    res.sendError("Failed to fetch location data");
  }
};
