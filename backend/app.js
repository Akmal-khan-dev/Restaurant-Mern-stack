import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { errorMiddleware } from './utilis/error.js';
import dbConnection from './db.js';
import BookingRoute from './routes/bookingRoute.js'

const app = express();
dotenv.config()

app.use(cors({
    origin:[process.env.Frontend_URL],
    methods:["post"],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/booking', BookingRoute)

dbConnection()

app.use(errorMiddleware)




export default app