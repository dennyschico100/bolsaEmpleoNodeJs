import {Router} from "express";
import * as applicationCOntroller from "../controllers/applications.controller";
const route = new Router();

route.get("/",applicationCOntroller.getApplications);
route.get("/:id",applicationCOntroller.getApplicationById);
route.post("/",applicationCOntroller.saveApplication);
route.put("/:id",applicationCOntroller.updateApplication);
export default route;