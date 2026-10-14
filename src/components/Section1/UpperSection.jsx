import React from 'react'
import CardContent from './CardContent'


const UpperSection = (props) => {
  return (
   <section id="testimonials" className='bg-black h-screen m-0 px-20'>


     <div className='flex justify-center items-center'>
        <h2 className='text-purple-400 text-sm font-semibold tracking-wider mt-30'>SUCCESS STORIES</h2>
     </div>

     <div className='flex justify-center items-center mt-4'>
      <h1 className='text-white text-4xl font-bold'>Trusted by learners worldwide</h1>
     </div>

     {props.users && <CardContent users={props.users}/>}
    </section>   

     
      

  )
}

export default UpperSection
