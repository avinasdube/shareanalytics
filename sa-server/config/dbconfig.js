
// setting up mongodb connection with mongoose

import mongoose from "mongoose";
import dotenv from 'dotenv';

// loading data from .env

dotenv.config();

// MongoDB Atlas Setup

const dbURL = process.env.MONGO_URL; // url processing from .env

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('connected to mongodb');
    })
    .catch(error => {
        console.log('mongodb connection error', error);
    })

export default mongoose;


