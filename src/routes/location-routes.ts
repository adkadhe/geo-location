import { Router } from "express";
import { fetchLocation } from "../controllers/location.controller";
import { validateRequest } from "../middlewares/validation.middleware";

const router: Router = Router();

router.get("/", [validateRequest], fetchLocation);

export default router;
