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

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(route)
app.use('/posts', postRoutes)
app.use(cors())

mongoose.connect(process.env.MONGODB_URI!)
  .then(res => {})
  .catch(err => console.error(err))

route.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Home'
  })
})

app.listen(5000, () => {
  console.log('server is Running...')
})