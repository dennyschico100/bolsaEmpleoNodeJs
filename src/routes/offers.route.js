import { Router } from "express";
import * as offerController from "../controllers/offers.controller";
const route = new Router();

route.get("/", offerController.getOffers);
route.get("/:id", offerController.getOffersById);
route.post("/", offerController.saveOffer);
route.put("/:id", offerController.updateOffer);
route.delete("/", offerController.deletOffer);

export default route;
