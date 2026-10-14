import React from 'react'
import Card from './Card'

const CardContent = (props) => {
  return (
    <div className='flex justify-center items-center gap-6 mt-3 flex-wrap'>
    
          {props.users.map(function(elem,index){
          
                 return <Card
                  key={index}
                  img={elem.img} 
                  para={elem.para} 
                  name={elem.name} 
                 professional={elem.professional}/>
    
          })}
         </div>
  )
}

export default CardContent
