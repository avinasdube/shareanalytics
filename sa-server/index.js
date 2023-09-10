const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose=require("mongoose")
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static("public"));
dotenv.config();
const jwt = require("jsonwebtoken");
app.set("view engine", "ejs");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(process.env.api)

const user  = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  const userModel=new mongoose.model("user",user);





const verifyJwtToken = async (req, res) => {
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
app.get("/",verifyJwtToken, function(req, res) {
    
  });

app.get("/login",function(req,res){
        res.render("login")
        });    

app.get("/register",function(req,res){
        res.render("register")
            });




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



app.post("/api/login",async function(req, res) {
  const useremail = req.body.email;
  const password = req.body.password;
  
  const usermod =await userModel.findOne({ email:useremail });

  
  

  if (usermod && usermod.password === password) {
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

 
});

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
app.post("/api/register", async (req, res) => {
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
    const userr =new userModel({
        username,
        email,
        password,
      });
      
const savedUser = await userr.save();

if (savedUser) {
  console.log("User created successfully");
} else {
  console.log("Error saving user");
}
  
    res.redirect("/login");
  });





const PORT = process.env.PORT || 4000;
app.listen(PORT,   () => {
    
    console.log("listening to port", PORT);
  })
