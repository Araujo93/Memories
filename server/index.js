import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()
import postRoutes from './routes/posts.js'

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true}))
// app.use(express.json())
app.use(cors());
app.use('/posts', postRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() =>  app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
.catch((error) =>  console.log('failed to connect', error.message))