import express from "express";
import { register, login, verifyJwtToken } from "../sa-server/controllers/authcontrol.js";
 
const router = express.Router();
 
router.use(express.json());
router.get("/",  function(req, res) {res.render("home") });
router.get("/login",function(req,res){ res.render("login")});    
router.get("/register",function(req,res){res.render("register") });
router.post("/api/register", register );
router.post("/api/login", login);
router.get("/api/verify-token", verifyJwtToken);

export default router;
