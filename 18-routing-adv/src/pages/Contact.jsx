import { Outlet,useLocation} from 'react-router-dom'
import React from 'react'

const Contact = () => 
{
    let location=useLocation();

  return (
    <div>
         {/* if path url is contact then print that heading else dont 
        and get that child here..*/}
     {location.pathname==="/contact" && 

     ( 
        <div className='bg-blue-300 h-200 w-full p-10'>
     <h1 className='text-black text-6xl font-bold mx-110 my-50'>It is Contact page</h1>
     </div>
     )
     }


     <Outlet/> 

    </div>

  )
}

export default Contact