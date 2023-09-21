// setting up server

import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import schema from './models/authschema.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dbconfig from './config/dbconfig.js'; // necessary to import
import cors from 'cors';

// importing swagger dependencies

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

// importing routes

import authroute from './routes/authroute.js';

// configuring dotenv variables

dotenv.config();

// creating an express app

const app = express();

// allow requests from any link

app.use(cors());

// parsing incoming request data - Middleware Plugin

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // necessary to use as we are passing json data from frontend

// setting up routes

app.use("/sa-server/auth", authroute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
})

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