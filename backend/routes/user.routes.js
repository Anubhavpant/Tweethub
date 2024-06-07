import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.middleware.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile ,updateUser} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/profile/:username",getUserProfile);

router.get("/suggested",protectedRoute,getSuggestedUsers);
router.post("/follow/:id",protectedRoute,followUnfollowUser);
router.post("/update",protectedRoute,updateUser);


export default router;