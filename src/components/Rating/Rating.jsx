import React from 'react'

const Rating = () => {
  return (
    <div className='bg-[#000002] h-50 w-full  text-white flex justify-center gap-25 items-center flex-wrap'>

        <div className='flex flex-col items-center text-center'>
         <h1 className='text-3xl font-extrabold font-sans'>45K+</h1>
         <p className='mt-1 text-sm text-gray-400 font-semibold'>Enrolled Students</p>
        </div>
        
         <div className='flex flex-col items-center text-center'>
         <h1 className='text-3xl font-extrabold font-sans'>200+</h1>
         <p className='mt-1 text-sm text-gray-400 font-semibold'>Expert Courses</p>
        </div>

         <div className='flex flex-col items-center text-center'>
         <h1 className='text-3xl font-extrabold font-sans'>98%</h1>
         <p className='mt-1 text-sm text-gray-400 font-semibold'>Completion Rate</p>
        </div>

         <div className='flex flex-col items-center text-center'>
         <h1 className='text-3xl font-extrabold font-sans'>4.9/5</h1>
         <p className='mt-1 text-sm text-gray-400 font-semibold'>Student Satisfaction</p>
        </div>

    </div>
  )
}

export default Rating
