import React from 'react'
import {BookOpenCheck} from 'lucide-react'

const Footer = () => {
  return (
      <section className='min-h-screen bg-[#010215] py-21 px-0'>
       
     <div className='flex justify-around items-start flex-wrap gap-12 max-7xl mx-auto'>

     {/* Logo & Description */}
     <div>
     <div className='flex py-4 px-2 group cursor-pointer items-center'>
          <BookOpenCheck 
            size={38} 
            color="white" 
            className='bg-[#8b5cf6] py-2 px-1 rounded-lg ' 
          />
          <span className='text-white px-4 font-bold text-xl '>
            Course Space
          </span>
      </div>

        <div className='px-2 py-1.5 '>
        <p className='text-gray-400 w-75 text-sm leading-6 font-semibold'>Empowering learners worldwide with cutting-edge tech skills and expert-guided mastery.</p>
        </div>

      </div>

      

       {/* {Column} */}

       <div className='flex flex-wrap gap-45 items-start m-0'>
        
         <div className='flex flex-col gap-3'>
              <p className='text-white font-bold text-base mb-1'>Platform</p>
              <div className='flex flex-col gap-2.5'>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#courses">Courses</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#feature">Features</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#pricing">Pricing</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#signin">Enterprise</a>
              </div>
          </div>

          <div className='flex flex-col gap-3'>
              <p className='text-white font-bold text-base mb-1'>Resources</p>
              <div className='flex flex-col gap-2.5'>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#courses">Documentation</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#feature">Help Center</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#pricing">Community</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#signin">Guides</a>
              </div>
          </div>

          <div className='flex flex-col gap-3'>
              <p className='text-white font-bold text-base mb-1'>Company</p>
              <div className='flex flex-col gap-2.5'>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#courses">About Us</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#feature">Careers</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#pricing">Privacy Policy</a>
               <a className='text-gray-400 text-sm hover:text-white transition-colors' href="#signin">Terms of Service</a>
              </div>
          </div>

         </div>

        </div>

   </section>
  )
}

export default Footer
