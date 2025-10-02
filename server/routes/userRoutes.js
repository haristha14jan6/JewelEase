import express from "express";
import { getJewels, getUserData, loginUser, registerUser } from "../controller/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter=express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/data',protect,getUserData)
userRouter.get('/jewels',getJewels)

export default userRouter;