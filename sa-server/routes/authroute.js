// route setup for user authentication (signup and login)

import express from "express";
import { login, register, verifyJwtToken } from "../controllers/authcontrol.js";

const router = express.Router();

// directing routes to { login, register, verifyJwtToken } of authControl.js

router.post("/register", register);
router.post("/login", login);
router.get("/verifyToken", verifyJwtToken);

export default router;
