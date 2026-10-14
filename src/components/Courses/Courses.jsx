import React from 'react'
import {ArrowRight} from 'lucide-react'
import CoursesCard from './CoursesCard'

const Courses = (props) => {
  return (
    <section id='courses' className='min-h-screen bg-[#010215] py-21 px-10'>

        <div className='text-[#aa93de] uppercase tracking-widest text-sm font-semibold mt-29'>
            <h3>Popular Programs</h3>
        </div>
        
        <div className='flex justify-between items-baseline'>
         <h1 className='text-white py-3 text-4xl font-extrabold font-sans'>Explore our top-rated courses</h1>

        <div className='flex gap-2.5'>
         <a href="#" className='text-[#aa93de] font-semibold text-lg'>View All Courses</a>

         <ArrowRight 
           color="#aa93de" 
           size={20} 
           className="mt-1"/>

        </div>

        </div>
          
          <div className='flex gap-11 flex-wrap justify-center items-center'>
           {props.courses && props.courses.map(function(elem,ibex){

           return  <CoursesCard
           key={ibex}
           img={elem.img}
           top={elem.top1}
           top2={elem.top2}
           lesson={elem.lessons}
           heading={elem.heading}
           author={elem.author}
           rating={elem.rating}
           students={elem.students}
           price={elem.price}
           />

          })}
          </div>
        

    </section>
  )
}

export default Courses
