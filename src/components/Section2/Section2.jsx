import React from 'react'
import PricingHeading from './PricingHeading'
import CardPricing from './CardPricing'


const Section2 = (props) => {
  return (
    <section className='w-full bg-black '>
      
      <PricingHeading pricing={props.pricing}/>

    </section>
  )
}

export default Section2
