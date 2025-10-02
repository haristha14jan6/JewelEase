import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets} from '../assets/assets'
import JewelCard from '../components/JewelCard'
import { useSearchParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import {motion} from 'motion/react'

const Jewels = () => {

  //getting search params from url
  const[searchParams]=useSearchParams()
  const pickupLocation=searchParams.get('pickupLocation')
  const pickupDate=searchParams.get('pickupDate')
  const returnDate=searchParams.get('returnDate')

  const {jewels,axios}=useAppContext()
  const[input,setInput]=useState('')

  const isSearchData=pickupLocation && pickupDate && returnDate
  const[filteredJewels,setFilteredJewels]=useState([])

  const applyFilter=async()=>{
    if(input===''){
      setFilteredJewels(jewels)
      return null;
    }
   const filtered=jewels.slice().filter((jewel)=>{
    return jewel.material?.toLowerCase().includes(input.toLowerCase())
   || jewel.model?.toLowerCase().includes(input.toLowerCase())
   || jewel.category?.toLowerCase().includes(input.toLowerCase())
   || jewel.transmission?.toLowerCase().includes(input.toLowerCase())
   })
  setFilteredJewels(filtered)


  if (filtered.length === 0) {  // use `filtered`, not `data.availableJewels`
    toast.error('No jewels available', { position: 'top-center' })
  }
 
}
  


  const searchJewelAvailability=async()=>{
    const {data}=await axios.post('/api/bookings/check-availability',{location:pickupLocation,pickupDate,returnDate})
    if(data.success){
      setFilteredJewels(data.availableJewels)
      if(data.availableJewels.length===0){
        toast.error('No jewels available',{
          position:'top-center'
        })
      }
      return null
    }
  }

  useEffect(()=>{
    if(isSearchData){
       searchJewelAvailability()
  }
  },[pickupLocation, pickupDate, returnDate])
  
  useEffect(()=>{
    jewels.length>0 && !isSearchData && applyFilter()
  },[input,jewels]);
  return (
    <div>
      <motion.div 
       initial={{opacity:0,y:30}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.6,ease:'easeOut'}}
      className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title title='Available Jewels' subTitle='Browse our selection of premium
        jewels available for your next adventure'/>
        <motion.div
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{delay:0.3,duration:0.5}}
         className='flex items-center bg-white px-4 mt-6 max-w-140
        w-full h-12 rounded-full shadow'>
          <img src={assets.search_icon} alt="" className='w-4.5 h-4.5 mr-2'/>
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Search by make, model, or features'
          className='w-full h-full outline-none text-gray-500'/>
          <img src={assets.filter_icon} alt="" className='w-4.5 h-4.5 ml-2'/>
        </motion.div>
      </motion.div>
      <motion.div
       initial={{opacity:0}}
        animate={{opacity:1}}
         transition={{delay:0.6,duration:0.5}}
       className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>Showing{filteredJewels.length}Jewels</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4
        xl:px-20 max-w-7xl mx-auto'>
          {filteredJewels.map((jewel,index)=>(
            <motion.div key={index}
             initial={{opacity:0,y:20}}
             animate={{opacity:1,y:1}}
         transition={{delay:0.1*index,duration:0.4}}
            >
              <JewelCard jewel={jewel}/>
              </motion.div>
          ))}

        </div>

      </motion.div>
    </div>
  )
}

export default Jewels
