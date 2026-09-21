import {useState} from 'react'

const App = () => 
  {

const [first, setfirst] = useState({user:"Isha",age:21})

  return (
    <div>
    <h1>{first.user},{first.age}</h1>
    <button onClick={
      ()=>
      {
        //on one click all will do their work 
        //this cannot be done directly with only increasing it  
        setfirst(prev=>(
          {
            ...prev,
            age:prev.age+1
          }
        ))
        setfirst(prev=>(
          {
            ...prev,
            age:prev.age+1
          }
        ))
        setfirst(prev=>(
          {
            ...prev,
            age:prev.age+1
          }
        ))
        setfirst(prev=>(
          {
            ...prev,
            age:prev.age+1
          }
        ))
      }
    }>click here!!</button>
    </div>
  )
}

export default App