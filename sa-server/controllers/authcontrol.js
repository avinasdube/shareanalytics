// setting up authentication protocols for register and login

import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import brcypt from "bcryptjs";

// importing mongoose schema

import userModel from '../models/authschema.js';

// loading data from .env

dotenv.config();

// secretKey for json web token from .env

const secretKey = process.env.TOKEN_KEY;
const SESSION_ID = "access_token"; // naming access_token

// use of 'async' before every req and 'await' before every query to database is necessary

// defining authentication protocol for new user registration

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({ username });
  if (user) {
    res.status(400);
    res.json({ message: "Username is already taken" });
    return;
  }

  const emailUser = await userModel.findOne({ email });
  if (emailUser) {
    res.status(400);
    res.json({ message: "Email address is already taken" });
    return;
  }
  const salt = brcypt.genSaltSync(10);
  const hash = brcypt.hashSync(password, salt);
  const userr = new userModel({
    username,
    email,
    password: hash,
  });

  const savedUser = await userr.save();

  if (savedUser) {
    console.log("User created successfully");
  } else {
    console.log("Error saving user");
  }

  res.redirect("/login");
};

// defining authentication protocol for user login

export const login = async function (req, res) {
  console.log("i am in");
  const useremail = req.body.email;
  const password = req.body.password;

  const usermod = await userModel.findOne({ email: useremail });


  const hashed = usermod.password;
  const result = await brcypt.compare(password, hashed);

  if (result) {
    const tempuser = {
      id: usermod._id,
      username: usermod.username,
      email: usermod.useremail,
    };

    const token = jwt.sign(tempuser, secretKey, { expiresIn: "1hr" });


    if (token) {
      const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 900),
      }

      res.cookie(SESSION_ID, token, cookieOptions);
      res.status(200);
      res.redirect("/");

    }


  } else {
    console.log("i am out");
  }

};

// token verification

export const verifyJwtToken = async (req, res) => {
  try {
    const token = req.cookies.access_token;

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(403).json("Token authentication failed");
      } else {
        res.render("home");
        //res.status(200).json(decoded);  
      }
    });
  } catch (error) {
    console.log(error);
  }
};
