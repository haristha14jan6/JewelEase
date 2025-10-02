
import imagekit from "../configs/imageKit.js";
import User from "../models/User.js";
import fs from "fs";
import Jewel from "../models/Jewel.js";
import Booking from "../models/Booking.js";


//aPI to change role of user
export const changeRoleToOwner=async (req,res)=>{
    try{
        const{_id}=req.user;
        await User.findByIdAndUpdate(_id, {role:"owner"})
        res.json({success:true,message:"Now you can list jewels"})
    } catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

//API to list Jewel

export const addJewel=async(req,res)=>{
    try{
    const {_id}=req.user;
    let jewel=JSON.parse(req.body.jewelData);
    const imageFile=req.file;
    //upload image to imagekit
    const fileBuffer=fs.readFileSync(imageFile.path)
  const response=  await imagekit.upload({
        file:fileBuffer,
        fileName:imageFile.originalname,
        folder:'/jewels'
    })
    // optimization through imagekit URL transformation
 var optimizedImageUrl = imagekit.url({
    path : response.filePath,
    
    transformation : [
      
        {width :' 1280'},
        {quality:'auto'},//auto compression
        {format:'webp'}//convert to modern format
    ]
});

const image=optimizedImageUrl;
await Jewel.create({...jewel,owner:_id,image})

res.json({success:true,message:"Jewel Added"})

    }
    catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
    }


//API to list Owner jewels
export  const getOwnerJewels=async(req,res)=>{
    try{
      const{_id}=req.user;
      const jewels=await Jewel.find({owner:_id})
       res.json({success:true,jewels})
    }
    catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    
    }
}
//API to toggle jewel Availability

export const toggleJewelAvailability=async(req,res)=>{
    try{
         const{_id}=req.user;
      const {jewelId}=req.body
      const jewel=await Jewel.findById(jewelId)

      //checking is jewel belongs to the user
    if(jewel.owner.toString()!==_id.toString()){
        return res.json({success:false,message:"Unauthorized"});
    }
    jewel.isAvailable=!jewel.isAvailable;
    await jewel.save()
       res.json({success:true,message:"Availability Toggled"})
    
    }
    catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

// API to delete a jewel


export const deleteJewel=async(req,res)=>{
    try{
         const{_id}=req.user;
      const {jewelId}=req.body
      const jewel=await Jewel.findById(jewelId)

      //checking is jewel belongs to the user
    if(jewel.owner.toString()!==_id.toString()){
        return res.json({success:false,message:"Unauthorized"});
    }
    jewel.owner=null;
    jewel.isAvailable=false;
    await jewel.save()
       res.json({success:true,message:"Jewel Removed"})
    
    }
    catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

//API to get Dashboard data

export const getDashboardData=async(req,res)=>{
    try{
        const{_id,role}=req.user;
        if(role!=='owner'){
            return res.json({success:false,message:"Unauthorized"});
        }
        const jewels=await Jewel.find({owner:_id})
        const bookings=await Booking.find({owner:_id}).populate('jewel').sort({createdAt:-1});
        const pendingBookings=await Booking.find({owner:_id,status:"pending"})
        const completedBookings=await Booking.find({owner:_id,status:"confirmed"})
        
        //Calculate monthlyrevenue from bookings where status is confirmed
        const monthlyRevenue=bookings.slice().filter(booking=>booking.status==='confirmed').reduce((acc,booking)=>acc+booking.price,0)

        const dashboardData={
            totalJewels:jewels.length,
            totalBookings:bookings.length,
            pendingBookings:pendingBookings.length,
            completedBookings:completedBookings.length,
            recentBookings:bookings.slice(0,3),
            monthlyRevenue
        }
        res.json({success:true,dashboardData});

    }
    catch(error){
         console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

//API to update user image

export const updateUserImage=async(req,res)=>{
    try{
        const {_id}=req.user;
        const imageFile=req.file;

         //upload image to imagekit
    const fileBuffer=fs.readFileSync(imageFile.path)
    const response=  await imagekit.upload({
        file:fileBuffer,
        fileName:imageFile.originalname,
        folder:'/users'
    })
    // optimization through imagekit URL transformation
 var optimizedImageUrl = imagekit.url({
    path : response.filePath,
    
    transformation : [
      
        {width :' 400'},
        {quality:'auto'},//auto compression
        {format:'webp'}//convert to modern format
    ]
});

const image=optimizedImageUrl;
await User.findByIdAndUpdate(_id,{image});

res.json({success:true,message:"Image Updated"})

    }
    catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
    }


   
