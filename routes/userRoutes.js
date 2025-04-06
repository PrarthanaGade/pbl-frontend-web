import express from "express";
import { getUserProfile } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);

export default router;
