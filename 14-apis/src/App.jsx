import React from 'react'

const App = () => 
{
   const getData= async ()=>
  {
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);

    //even this is in async so await here as well
    const data=await response.json();
    console.log(data);
  }


  return (
    <div>
     <button onClick={getData}>okokok</button>
    </div>
  )
}

export default App