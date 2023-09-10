import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();
import mongoose from "mongoose";
import swaggerUi   from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import cookieParser from'cookie-parser';
app.use(cookieParser());
app.use(express.static("public"));
dotenv.config();
app.set("view engine", "ejs");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(process.env.api)

dotenv.config();

import { login, verifyJwtToken, register } from "./controllers/authcontrol.js";
   
app.get("/",verifyJwtToken, function(req, res) { });
app.get("/login",function(req,res){ res.render("login")});    
app.get("/register",function(req,res){res.render("register") });
app.post("/api/register", register);
app.post("/api/login", login);
 


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authenticate user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       401:
 *         description: Unauthorized
 */




/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User Registration
 *     requestBody:
 *       description: User registration details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: User registration failed due to validation errors
 */


const PORT = process.env.PORT || 4000;
app.listen(PORT,   () => {
    
    console.log("listening to port", PORT);
  })
