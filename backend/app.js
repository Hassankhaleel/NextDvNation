import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import cookieParser from 'cookie-parser';
dotenv.config(); 

import connectDB from './config/db.js';


connectDB();

const app = express();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
      origin: 'http://localhost:5173', 
     credentials: true, 
}))


app.use('/auth', userRoutes)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

