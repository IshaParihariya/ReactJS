import React from 'react';
import axios from 'axios';

const App = () => 
{
  //axios is a third party api library 
  const getData =  async()  =>
  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    console.log(response.data);

  }

  return (
    <div>
      <button onClick={getData}>okokok</button>
    </div>
  )
}

export default App