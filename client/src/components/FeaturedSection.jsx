import React from 'react';
import { assets} from '../assets/assets';
import JewelCard from './JewelCard';
import { useNavigate } from 'react-router-dom';
import Title from './Title'; // Ensure this import exists
import { useAppContext } from '../context/AppContext';
import {motion} from 'motion/react'

const FeaturedSection = () => {
  const navigate = useNavigate();
  const {jewels}=useAppContext()

  return (
    <motion.div 
         initial={{y:40,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:1,ease:"easeOut"}}
       className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <motion.div
       initial={{y:20,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:1,delay:0.5}}
      >
        <Title 
          title="Featured Jewellery" 
          subTitle="Explore our selection of premium jewelleries available for your next adventure." 
        />
      </motion.div>

      <motion.div 
       initial={{y:100,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:1,delay:0.5}}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {
          jewels.slice(0, 6).map((jewel) => (
            <motion.div key={jewel._id}
             initial={{opacity:0,scale:0.95}}
             whileInView={{opacity:1,scale:1}}
           transition={{duration:0.4,ease:"easeOut"}}>
              <JewelCard jewel={jewel} />
            </motion.div>
          ))
        }
      </motion.div>

      <motion.button
       initial={{y:20,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.4,delay:0.6}}
        onClick={() => {
          navigate('/jewels');
          window.scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border 
        border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
      >
        Explore all jewels <img src={assets.arrow_icon} alt="arrow" />
      </motion.button>
    </motion.div>
  );
};

export default FeaturedSection;

