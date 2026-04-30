import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItem,setShowIndex,showIndex}) => {
    
    function handleClick(showIndex){ 
      setShowIndex()
    }
  return (
    // header 
    // body 

       <div className=' bg-sky-100 p-3 my-3 w-1/2 m-auto'>
        
     <div className='flex justify-between'>
         <div>
        {data?.title}
      </div>
      <div className='cursor-pointer'  onClick={handleClick}>
        🔽
      </div>
     </div>
     
         {showItem && <ItemList lists={data?.itemCards}/>
      }
    </div>
      

  )
}

export default RestaurantCategory
