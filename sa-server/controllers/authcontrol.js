import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userModel from "../model/authschema.js";
import brcypt from "bcryptjs";


export const verifyJwtToken = async (req, res) => {
    try {
      const token = req.cookies.access_token;
  
      jwt.verify(token, process.env.mysec, (err, decoded) => {
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


export const login=async function(req, res) {
    console.log("i am in");
    const useremail = req.body.email;
    const password = req.body.password;
    
    const usermod =await userModel.findOne({ email:useremail });
  
    
    const hashed  = usermod.password;  
          const result = await brcypt.compare(password, hashed );
  
    if (result) {
      const tempuser = {
        id: usermod._id,
        username: usermod.username,
        email: usermod.useremail,
      };
       
      const token = jwt.sign(tempuser, process.env.mysec, { expiresIn: "1hr" });
  
     
        if (token) {
          const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 900),
          }
  
          res.cookie("access_token", token, cookieOptions);
          res.status(200);
          res.redirect("/");
         
        
        }
     
  
    } else {
      console.log("i am out");
    }
  
   
  };

  export const register= async (req, res) => {
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
    const userr =new userModel({
        username,
        email,
        password:hash,
      });
      
const savedUser = await userr.save();

if (savedUser) {
  console.log("User created successfully");
} else {
  console.log("Error saving user");
}
  
    res.redirect("/login");
  };
  