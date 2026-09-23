import { useEffect, useState } from "react";

const App = () => 
{

const [num, setNum] = useState(0)


const [num1, setNum1] = useState(0)

//after rendering this part is getting done...
useEffect(()=>
{
  //what u want to do
  console.log("clicked");
},[num1])//dependency => when u want to do like on some particular changes 

  return (
    <div>
      <h1>{num}</h1>
     <button
     onClick={
      ()=>
      {
        setNum(num+1);
      }
     } 
     >num
     </button>

     <div>
     <h1>{num1}</h1>
     <button
     onClick={
      ()=>
      {
        setNum1(num1+10);
      }
     } 
     >num1
     </button>
    </div>
    </div>
  )
}

export default App