import React from 'react'
import {Clock, Star , ChevronRight } from 'lucide-react'
 
const CoursesCard = (props) => {

  return (
    <div>
     
     <div className='bg-gray-800 w-90 mt-10 flex flex-col justify-between rounded-3xl group transition-all duration-300 ease-in-out border-2 border-transparent hover:border-purple-600 overflow-hidden shadow-lg'>

      <div className='h-52 w-full overflow-hidden rounded-t-3xl relative'>
        <img className='w-full h-full object-cover transition-transform duration-400 group-hover:scale-105 ' src={props.img} alt="" />

        
        <div className='absolute left-0.5 top-3 px-3 py-3'>
            <span className='bg-[#0f1119] text-[#a87eec] px-4 py-1 rounded-2xl text-sm font-semibold border border-purple-200/20'>{props.top}</span>
        </div>
        <div className='absolute right-3 top-6 '>
            <span className='bg-[#060606] text-white px-4 py-1 rounded-2xl text-sm font-semibold border border-purple-200/20'>{props.top2}</span>
        </div>
      </div>
      

        <div>
            <div className='flex mt-5 px-6  gap-2'>
            <Clock size={15} color="#aa93de" />
            <p className='text-gray-400 text-xs'>{props.lesson}</p>
           </div>

           <h5 className='text-white text-lg px-6 py-3 font-bold group-hover:text-[#a87eec] transition-colors duration-200'> {props.heading}</h5>
      
           <p className='text-gray-400 text-sm px-6 font-semibold'>{props.author}</p>
        </div>

        <div className='px-6 flex justify-between items-center gap-2 mt-10'>
            
            <div className='flex items-center gap-2'>
            <Star fill={'#f59e0b'} color={'#f59e0b'} size={19}/>
            <p className='text-[#f0bb61] font-bold text-lg'>{props.rating}</p>
            <p className='text-gray-400'>{props.students}</p>
            </div>

            <div className='text-white font-extrabold text-xl'>
                <span>${props.price}</span>
            </div>

        </div>

        <div className='flex mt-8 justify-center items-center mb-9'>
             <button className='bg-gray-700 py-2 px-25 rounded-xl text-white font-semibold text-sm flex 
             cursor-pointer hover:bg-[#1d4ed8] transition-transform duration-400 hover:scale-105 gap-2  shadow-lg'>
                Enroll Now 
                <ChevronRight size={18} color="white" strokeWidth={2} />
             </button>
    
        </div>

      </div>

      </div>

  )
}

export default CoursesCard
