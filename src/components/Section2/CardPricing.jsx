import React from 'react'
import {CircleCheck} from 'lucide-react'

const CardPricing = (props) => {
  return (
    <div>
      <div className='bg-gray-800 w-75 min-h-90 mt-20 rounded-2xl py-8 px-8 shadow-gray-700 '>

        <div>
            <h3 className='text-white text-xl font-bold'>{props.top}</h3>
        </div>

        <div className='mt-3'>
            <p className='text-gray-400 text-sm'>{props.paragraph}</p>
        </div>

        <div className='flex items-baseline mt-6'>
            <h1 className='text-5xl font-extrabold text-white '>${props.pricing}</h1> 
            <h4 className='text-gray-400 text-sm mb-0 px-1'>/month</h4>
        </div>

       <div className='mt-7 space-y-3 text-gray-200 text-sm'>
            {props.description.map((desc, idx) => (
              <div key={idx} className='flex items-center gap-3'>
                <CircleCheck size={20} color="#535de9" strokeWidth={2} className="shrink-0" />
                <span>{desc}</span>
              </div>
            ))}
          </div>

        <div className='flex justify-center items-center mt-8 bg-gray-700 py-4 px-3
         rounded-xl text-white text-sm font-semibold hover:bg-gray-600'>
            
            <button>Get Started Now</button>
        </div>

      </div>
    </div>
  )
}

export default CardPricing
