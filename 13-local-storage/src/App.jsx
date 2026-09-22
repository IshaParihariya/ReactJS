//import React from 'react'

import { User } from "lucide-react"

const App = () => 
{
  const user ={
    "username":"Isha Parihariya",
    "age":21,
    "nationality":"Indian"
  };

  //local storage needs string to store so 
  //object to string conversion 
  //JSON.stringify(User)
  //then we needed object to be printed so 
  //again string to object conversion
   localStorage.setItem("user", JSON.stringify(user));

  const usera=JSON.parse(localStorage.getItem("user"));

  console.log(usera);

  return (
    <div>
      App
    </div>
  )
}

export default App