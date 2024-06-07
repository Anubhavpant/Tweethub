import express from "express";
import { signup,login,logout,getUser } from "../controllers/auth.controllers.js";
import {protectedRoute} from "../middleware/protectedRoute.middleware.js"

const router = express.Router();

router.get("/user",protectedRoute,getUser);

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

export default router;