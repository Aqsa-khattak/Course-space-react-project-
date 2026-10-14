import React from 'react'
import FeaturesCard from './FeaturesCard'

const FeaturesUpper = (props) => {
  return (
    <section id="feature"  className='bg-black min-h-screen m-0 px-5'>
    
    
         <div className='flex justify-center items-center'>
            <h2 className='text-purple-400 text-sm font-semibold tracking-wider mt-38 uppercase'>Platform Advantages</h2>
         </div>
    
         <div className='flex justify-center items-center mt-4'>
          <h1 className='text-white text-4xl font-bold'>Everything you need to succeed</h1>
         </div>
    

     <div className='flex gap-8 justify-center items-center flex-wrap mt-19'>

      {props.feature.map(function(elem,idx){
           return   <FeaturesCard 
           key={idx}
           logo={elem.logo}
           heading={elem.heading}
           para={elem.para}
           />

      })}
     
      </div>
    </section> 
  )
}

export default FeaturesUpper
