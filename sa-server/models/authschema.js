// defining schema for user registration

import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const userModel = new mongoose.model("user", user);

export default userModel;