import {  Router } from "express";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { DeriveriesController } from "@/controllers/deriveries-controllers";
import { verifyUserAuthorization } from "@/middlewares/verifyUserauthorization";

const deliveriesRoutes = Router();
const deriveriesController = new DeriveriesController();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deriveriesController.create);

export { deliveriesRoutes };