import { verifySignUp } from "../middlewares/";
import { Router } from "express";
//const controller = require("../controllers/auth.controller");
import * as authController from "../controllers/auth.controller";

const router = new Router();

router.post(
    "/signup",
    [verifySignUp.checkRolesExists, verifySignUp.validateAlreadyUserExists],
    authController.singUp
  );

/*
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.validateUserExists,
      verifySignUp.checkRolesExists
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};
*/
export default router;