import React from 'react'
import {Star} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
        <div className='bg-gray-800 w-75 h-75 min-h-90 mt-10 rounded-2xl py-8 px-8 shadow-gray-700'>
            <div className='flex mb-4'>
               <span className='px-1'><Star fill={'yellow'} color={'yellow'} size={19}/></span> 
               <span className='px-1'><Star  fill={'yellow'} color={'yellow'} size={19}/></span> 
               <span className='px-1'><Star  fill={'yellow'} color={'yellow'} size={19}/></span> 
               <span className='px-1'><Star  fill={'yellow'} color={'yellow'} size={19}/></span> 
               <span className='px-1'><Star  fill={'yellow'} color={'yellow'} size={19}/></span> 
            </div>
            
         <div className='text-gray-200 text-sm leading-6'>
            <i>"{props.para}"</i>
         </div>

         <div className='mt-20 flex justify-items-start'>
           
            <img className='w-14 h-12 rounded-full' src={props.img} alt="" />
             
             <div>
                <h5 className='text-white px-5 font-semibold'>{props.name}</h5>
                <h5 className='text-gray-300 text-xs px-5'>{props.professional}</h5>
                
             </div>
         </div>

        </div>
    </div>
  )
}

export default Card
