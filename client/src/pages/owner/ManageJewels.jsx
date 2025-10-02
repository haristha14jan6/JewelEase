import React, { useEffect, useState } from 'react'
import { assets} from '../../assets/assets'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ManageJewels = () => {

  const {isOwner,axios,currency}=useAppContext()
 
  const[jewels,setJewels]=useState([])

  const fetchOwnerJewels=async()=>{
   try{
    const {data} =await axios.get('/api/owner/jewels')
    if(data.success){
      setJewels(data.jewels)
    }
    else{
      toast.error(data.message)
    }
   } catch(error){
    toast.error(error.message)
   }
  }

  const toggleAvailability=async(jewelId)=>{
    try{
      const{data}=await axios.post('/api/owner/toggle-jewel',{jewelId})
      if(data.success){
        toast.success(data.message)
        fetchOwnerJewels()
      }
      else{
        toast.error(data.message)
      }
    } catch(error){
      toast.error(error.message)
    }
  }

   const deleteJewel=async(jewelId)=>{
    try{

      const confirm=window.confirm("Are you sure you want to delete this jewel?")
      if(!confirm) return null;

      const{data}=await axios.post('/api/owner/delete-jewel',{jewelId})
      if(data.success){
        toast.success(data.message)
        fetchOwnerJewels()
      }
      else{
        toast.error(data.message)
      }
    } catch(error){
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    isOwner && fetchOwnerJewels()
  },[isOwner])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title title="Manage Jewels" subTitle="View all listed jewels,update their details,
      or remove them from the booking platform."/>
      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Jewel</th>
              <th className='p-3 font-medium max-md:hidden'>Category</th>
               <th className='p-3 font-medium'>Price</th>
               <th className='p-3 font-medium max-md:hidden'>Status</th>
                <th className='p-3 font-medium'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {jewels.map((jewel,index)=>(
              <tr key={index} className='border-t border-borderColor'>
                <td className='p-3 flex items-center gap-3'>
                  <img src={jewel.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover'/>
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{jewel.material}  {jewel.model}</p>
                    <p className='text-xs text-gray-500'>{jewel.weight} . {jewel.rental_type}</p>

                  </div>

                </td>
                <td className='p-3 max-md:hidden'>{jewel.category}</td>
                <td className='p-3'>{currency}{jewel.pricePerDay}/day</td>

                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${jewel.isAvailable?'bg.reen-100 text-green-500':'bg-red-100 text-red-500'}`}>
                    {jewel.isAvailable ? "Available":"Unavailable"}
                  </span>
                </td>
               
                <td className='flex items-center p-3'>
                  <img onClick={()=>toggleAvailability(jewel._id)} src={jewel.isAvailable? assets.eye_close_icon:assets.eye_icon} alt="" className='cursor-pointer'/> 

                  <img onClick={()=>deleteJewel(jewel._id)} src={assets.delete_icon} alt=""  className='cursor-pointer'/>
                  

                </td>
            
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      
    </div>
  )
}

export default ManageJewels
