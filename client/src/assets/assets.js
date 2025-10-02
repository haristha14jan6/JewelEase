

import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import favicon from "./favicon.png";
import logo1 from "./logo1.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import jewelImg1 from './jewel-img1.jpg';
import jewelImg2 from './jewel-img2.jpg';
import jewelImg3 from './jewel-img3.jpg';
import jewelImg4 from './jewel-img4.jpg';
import diamond from "./diamond.jpg";
import rotation from "./rotation.jpg";
import justice_scale from "./justice_scale.png";
import jewellery_banner from "./jewellery_banner.jpg";
import gemstone from "./gemstone.svg";
import weight from "./weight.jpg";
import gold from "./gold.jpg";
import jlg from "./jlg.svg";
import jlgColor from "./jlgColor.svg";

export const cityList = ['New York', 'Los Angeles', 'Houston', 'Chicago']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    favicon,
    logo1,
    img1,
    img2,
    img3,
  jewelImg1,
  jewelImg2,
  jewelImg3,
  jewelImg4,

    diamond,
    rotation,
    justice_scale,
    jewellery_banner,
    gemstone,
    weight,
    gold,
    jlg,
    jlgColor
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Jewels", path: "/jewels" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add jewel", path: "/owner/add-jewel", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Jewels", path: "/owner/manage-jewels", icon: jlg, coloredIcon:jlgColor},
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "GreatStack",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyJewelData = [
  {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "material": "Gold Platted",
        "model": "Antique",
        "carat_weight":"2.5 carats",
        "image": jewelImg1,
        "year": 2018,
        "category": "Necklace",
        "weight": "22g",
        "rental_type": "3-days",
        "pricePerDay": 25,
        "location": "Tuticorin",
       "description": "This exquisite jewel is a timeless piece crafted with precision and elegance. Designed to captivate, it combines exceptional craftsmanship with premium-quality gemstones, making it perfect for both special occasions and everyday sophistication.",

        "createdAt": "2025-04-16T07:26:56.215Z",

  },

  
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "material": "Copper",
        "model": "Floral stoned",
        "image": jewelImg2,
        "year": 2020,
        "category": "Bangles",
        "weight": "30g",
        "rental_type": "4-day",
        "pricePerDay": 30,
        "location": "Krishnagiri",
        "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvailable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },

  
  {    
     "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "material": "Copper",
        "model": "White stoned",
        "image": jewelImg3,
        "year": 2020,
        "category": "Earring",
        "weight": "15g",
        "rental_type": "4-day",
        "pricePerDay": 200,
        "location": "Chennai",
        "description": "This elegant jewel is a premium creation, blending luxury and artistry. First introduced in 2008, it has remained a symbol of timeless beauty, admired for its exquisite design and exceptional quality.",

        "isAvailable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",


  },
  {
            "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "material": "Rose gold platted",
        "model": "Stoned",
        "image": jewelImg4,
        "year": 2024,
        "category": "Necklace",
        "weight": "10g",
        "rental_type": "8-day",
        "pricePerDay": 12,
        "location": "Vellore",
       "description": "This stunning jewel is a masterpiece of luxury and craftsmanship. First introduced in 2003, it has captivated admirers with its unique design, premium materials, and enduring elegance.",
        "isAvailable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",

  }
]
export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "jewel": dummyJewelData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "jewel": dummyJewelData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "jewel": dummyJewelData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "jewel": dummyJewelData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalJewels": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}