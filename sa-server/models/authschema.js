import mongoose from "mongoose";


const user  = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  const userModel=new mongoose.model("user",user);

  export default userModel;