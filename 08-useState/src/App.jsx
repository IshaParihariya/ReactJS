import {useState} from 'react'

const App = () => 
  {

    //snippet
   // const [initialN,setFinalN] = useState("Isha");

   const [val, setVal] = useState(0);

  return (
    <div className='m-2 flex flex-col gap-3 h-full w-full bg-pink-300'>
    <h1 className='text-4xl font-bold'>change the value by clicking on the buttons : {val}</h1>
    <div className='m-2 flex flex-row gap-5'>
    <button className='bg-amber-300 text-black rounded-2xl h-10 w-30 font-bold' onClick={()=>
      {
        
        setVal(val+1);
      }
    }>
      increase
    </button>
    <button className='bg-amber-300 text-black rounded-2xl h-10 w-30 font-bold' onClick={()=>
      {
        setVal(val-1);
      }
    }>
      decrease
    </button>
    </div>
    </div>
  )
}

export default App