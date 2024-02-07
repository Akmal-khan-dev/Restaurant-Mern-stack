import express from 'express'
import { addBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post("/booking", addBooking)

export default router;