import React from 'react'
import {BookOpenCheck} from 'lucide-react'

const FeaturesCard = (props) => {

     const ComponentLogo = props.logo;

  return (

     <div className='bg-gray-900 w-2/7 h-60 mt-6 rounded-2xl group py-8 shadow-gray-700 hover:border border-purple-400'>
      

      <div className='flex flex-col justify-between px-7'>
       <div>
           {ComponentLogo && <ComponentLogo 
            size={57} 
            color="#c084fc" 
            className='bg-[#2c2860] py-2 px-3 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 border border-gray-700' 
          />}
       </div>

       <div className='mt-6'>
        <span className='text-white text-xl font-semibold'>{props.heading}</span>
       </div>

       <div className='mt-4'>
        <p className='text-sm text-gray-400 leading-6'>{props.para}.</p>
       </div>

       </div>


    </div>
  )
}

export default FeaturesCard
