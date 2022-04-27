import express, {Router, Request, Response} from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts';

dotenv.config()

const app = express();
const route = express.Router()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true}))
app.use(route)
app.use('/posts', postRoutes)

connectToMongoDB(process.env.MONGODB_URI!)
  .then((res) => {
    app.listen(PORT, () => {
      console.log('Server is running')
    })
  })
  .catch(error => {
    console.log(error);
  })