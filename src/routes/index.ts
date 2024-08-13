import { Router } from "express";
import LocationRouter from "./location-routes";
const router: Router = Router();

router.use("/location", LocationRouter);

export default router;
