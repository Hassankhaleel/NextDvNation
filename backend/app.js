import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';

connectDB();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

