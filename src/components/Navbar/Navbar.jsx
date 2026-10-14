import React from 'react';
import { BookOpenCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      <div className='bg-zinc-950 flex fixed left-0 top-0 w-full z-1000 justify-between px-3 shadow-lg border-b border-zinc-800/80'>
        
        <div className='flex py-4 px-6 group cursor-pointer items-center'>
          <BookOpenCheck 
            size={42} 
            color="white" 
            className='bg-[#8b5cf6] py-2 px-1 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3' 
          />
          <span className='text-white px-4 font-bold text-2xl pt-1 transition-colors duration-200 group-hover:text-purple-200'>
            Course Space
          </span>
        </div>

        <div className='flex justify-center items-center gap-20 text-gray-400 font-semibold text-sm'>
          <a href="#feature" className='transition-colors duration-200 hover:text-gray-200 hover:scale-105'>Features</a>
          <a href="#courses" className='transition-colors duration-200 hover:text-gray-200 hover:scale-105'>Courses</a>
          <a href="#testimonials" className='transition-colors duration-200 hover:text-gray-200 hover:scale-105'>Testimonials</a>
          <a href="#pricing" className='transition-colors duration-200 hover:text-gray-200 hover:scale-105'>Pricing</a>
        </div>

        <div className='flex justify-center items-center gap-5 text-white pr-4'>
          <a href="#signin" className='text-gray-400 font-semibold text-sm px-2 transition-colors duration-200
           hover:text-gray-200 hover:scale-105'>Sign In</a>
          <button className='bg-[#4f46e5] hover:bg-[#4338ca] py-2 px-3 rounded-lg font-sm font-semibold 
          transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25'>
            Get Started Free
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
