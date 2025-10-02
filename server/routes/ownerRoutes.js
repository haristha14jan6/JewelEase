import express from "express";
import { protect } from "../middleware/auth.js";
import { addJewel, changeRoleToOwner, deleteJewel, getDashboardData, getOwnerJewels, toggleJewelAvailability, updateUserImage } from "../controller/ownerController.js";
import upload from "../middleware/multer.js";


const ownerRouter=express.Router();
ownerRouter.post("/change-role",protect,changeRoleToOwner)
ownerRouter.post("/add-jewel",upload.single("image"),protect,addJewel)
ownerRouter.get("/jewels",protect,getOwnerJewels)
ownerRouter.post("/toggle-jewel",protect,toggleJewelAvailability)
ownerRouter.post("/delete-jewel",protect,deleteJewel)
ownerRouter.get('/dashboard',protect,getDashboardData)
ownerRouter.post('/update-image',upload.single("image"),protect,updateUserImage)

export default ownerRouter;