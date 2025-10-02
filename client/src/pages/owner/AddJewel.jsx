import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import { toast } from 'react-hot-toast';



const AddJewel = () => {

  const {axios ,currency}=useAppContext()
 

    const [image,setImage]=useState(null)
    const[jewel,setJewel]=useState({
      material:'',
      model:'',
      year:0,
      pricePerDay:0,
      category:'',
      transmission:0,
      weight:'',
      rental_type:'',
      location:'',
      description:'',
    })

    const[isLoading,setIsLoading]=useState(null)
    const onSubmitHandler=async(e)=>{
      e.preventDefault()
      if(isLoading) return null

      setIsLoading(true)
      try{
        const formData=new FormData()
        formData.append('image',image)
        formData.append('jewelData',JSON.stringify(jewel))

        const{data} =await axios.post('/api/owner/add-jewel',formData)
        if(data.success){
        toast.success(data.message)
      setImage(null)
      setJewel({
      material:'',
      model:'',
      year:0,
      pricePerDay:0,
      category:'',
      transmission:0,
      weight:'',
      rental_type:'',
      location:'',
      description:'',
          })
        } else {
          toast.error(data.message)
        }
      } catch(error){
         toast.error(error.mesage)
      } finally{
        setIsLoading(false)
      }
    }
      return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add New Jewel" subTitle="Fill in details to list a new jewel for
      booking,including pricing,availability, and jewel specfications."/>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        {/*Jewel Image*/}
        <div className='flex items-center gap-2 w-full' >
          <label htmlFor="jewel-image">
            <img src={image ? URL.createObjectURL(image):assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>

              <input type="file" id="jewel-image" accept="image/*" hidden onChange={e=>
              setImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your jewel</p>
          
        </div>

{/*jewel brand and model*/}

       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='flex flex-col w-full'>
          <label>Material</label>
          <input type="text" placeholder='e.g. Antique , copper ,Stoned...' required
          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={jewel.material} onChange={e=>setJewel({...jewel,material:e.target.value})}/>

        </div>

       <div className='flex flex-col w-full'>
          <label>Model</label>
          <input type="text" placeholder='e.g. Ring , Necklace ,Bracelet...' required
          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={jewel.model} onChange={e=>setJewel({...jewel,model:e.target.value})}/>

        </div>

       </div>

       {/*Car Year,Price,Category */}

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

           <div className='flex flex-col w-full'>
          <label>Year</label>
          <input type="number" placeholder='2025' required
          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={jewel.year} onChange={e=>setJewel({...jewel,year:e.target.value})}/>

        </div>
         <div className='flex flex-col w-full'>
          <label>Daily Price ({currency}) </label>
          <input type="number" placeholder='100' required
          className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={jewel.pricePerDay} onChange={e=>setJewel({...jewel,pricePerDay:e.target.value})}/>

        </div>
         <div className='flex flex-col w-full'>
          <label>Category</label>
          <select onChange={e=>setJewel({...jewel,category:e.target.value})} value={jewel.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
            <option value="">Select a category</option>
            <option value="Ring">Ring</option>
            <option value="Nosepin">Nosepin</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Necklace">Necklace</option>
          </select>
          
        </div>

       </div>

       {/* Jewe transmission ,weight,rental-type*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='flex flex-col w-full'>
          <label>Transmission</label>
          <select onChange={e=>setJewel({...jewel,transmission:e.target.value})} value={jewel.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
            <option value="">Select a transmission</option>
            <option value="Ring">Metal type</option>
            <option value="Nosepin">Gemstone type</option>
            <option value="Bracelet">Purity/Carat</option>
          </select>
       </div>

        <div className='flex flex-col w-full'>
  <label>Weight (in grams)</label>
  <input 
    type="number"
    placeholder="Enter weight"
    onChange={e => setJewel({...jewel, weight: e.target.value})} 
    value={jewel.weight}
    className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
  />
</div>

         
<div className='flex flex-col w-full mt-4'>
  <label>Rental Type</label>
  <select 
    onChange={e => setJewel({...jewel, rental_type: e.target.value})} 
    value={jewel.rental_type} 
    className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
  >
    <option value="">Select Rental Type</option>
    <option value="Daily">Daily</option>
    <option value="Weekly">Weekly</option>
    <option value="Monthly">Monthly</option>
  </select>
</div>
 </div>

        {/*Jewel location*/}
        <div className='flex flex-col w-full'>
         <label>Location</label>
  <select 
    onChange={e => setJewel({...jewel, location: e.target.value})} 
    value={jewel.location} 
    className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
  >
    <option value="">Select a location</option>
    <option value="Kerala">Kerala</option>
    <option value="Chennai">Chennai</option>
    <option value="Pondichery">Pondichery</option>
    <option value="Karnataka">Karnataka</option>
  </select>
        </div>

        {/*jewel description*/}

           <div className='flex flex-col w-full'>
  <label>Description</label>
  <textarea rows={5} placeholder="e.g. A luxurious jewe with affordable price."
    onChange={e => setJewel({...jewel, description: e.target.value})} 
    value={jewel.description}
    className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'/>
</div>

<button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
  <img src={assets.tick_icon} alt=""/>{isLoading?'Listing...':'List your Jewel'}
</button>

      </form>
      
    </div>
  )
}

export default AddJewel
