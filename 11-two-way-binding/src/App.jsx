import {useState} from 'react';

const App = () => 
{
    const submitHandler = (e) =>
    {
      e.preventDefault();
      console.log( "form submitted by",n);
    }
    
    const [n, setN] = useState("Default Name")

   // let newName=""; react forgets when renders

  return (
    <div>
    <form onSubmit={(e)=>
      {
        submitHandler(e)
      }
    }
    >
    <input  
    onChange={(e)=>
    {
      //newName=e.target.value;
      setN(e.target.value)
    }
    }
    className="border-amber-950 border-2 h-10 w-100 rounded-2xl m-1.5
     bg-pink-300 text-black" type="text" placeholder="Enter ur name pls"/>
    <button 
    className="border-amber-950 border-2 h-10 w-70 rounded-2xl m-2.5
     bg-pink-300 text-black">
      Submit
    </button>
    <h1 className="text-3xl">Name is {n}</h1>
    </form>
    </div>
  )
}

export default App