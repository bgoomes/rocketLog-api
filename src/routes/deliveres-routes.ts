import {  Router } from "express";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { DeriveriesController } from "@/controllers/deriveries-controllers";

const deliveriesRoutes = Router();
const deriveriesController = new DeriveriesController();

deliveriesRoutes.use(ensureAuthenticated);
deliveriesRoutes.post("/", deriveriesController.create);

export { deliveriesRoutes };