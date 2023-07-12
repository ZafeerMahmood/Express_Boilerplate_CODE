import express from "express";
import {
  registerController,loginController,getAllOrdersController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object if seperate files obj is used

const router = express.Router();

//routing
//REGISTER Post Method
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

export default router;
