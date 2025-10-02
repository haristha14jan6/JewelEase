import express from "express";
import { changeBookingStatus, checkAvailabilityofJewel, createBooking, getOwnerBookings, getUserBookings } from "../controller/bookingController.js";
const bookingRouter=express.Router();
import { protect } from "../middleware/auth.js"

bookingRouter.post('/check-availability',checkAvailabilityofJewel)
bookingRouter.post('/create',protect,createBooking)
bookingRouter.get('/owner', protect, getOwnerBookings); 
bookingRouter.get('/user',protect,getUserBookings);
bookingRouter.post('/change-status',protect,changeBookingStatus)

export default bookingRouter;