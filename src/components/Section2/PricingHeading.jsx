import React from 'react'
import CardPricing from './CardPricing'

const PricingHeading = (props) => {
  return (
    <section id="pricing" className='bg-black px-20 py-10'>
    
         <div className='flex justify-center items-center'>
            <h2 className='text-purple-400 text-sm font-semibold tracking-wider mt-30'>SIMPLE PRICING</h2>
         </div>
    
         <div className='flex justify-center items-center mt-3'>
          <h1 className='text-white text-4xl font-bold'>Invest in your future today</h1>
         </div>
    
    <div className='flex gap-10 justify-center'>
    {props.pricing.map(function(elem,ibex){
 
     return <CardPricing 
     key={ibex}
     top={elem.top}
     paragraph={elem.paragraph}
     pricing={elem.pricing}
     description={elem.description}
     />})}
     </div>
   
    </section>
  )
}

export default PricingHeading

