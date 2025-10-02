import express from "express";

import "dotenv/config";
import cors from "cors";

import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";


const app = express();
//connect database
await connectDB()
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/api/user",userRouter)
app.use("/api/owner",ownerRouter)
app.use('/api/bookings',bookingRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
