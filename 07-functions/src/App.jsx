
const App = () => {

  const btnClicked=()=>
  {
    console.log("btn clicked!!");
  }
  
  const mouseEntered=()=>
  {
    console.log("mouse entered!!");
  }

  const function1 =(val)=>
  {
    console.log(val);
  }
  
  return (
    <div className="flex flex-col p-10 gap-1.5">

      <input  className="bg-yellow-400 text-black border-2 border-amber-950 
      rounded-3xl h-10 w-80 p-2" type="text" placeholder="ENTER YOUR NAME SWEETIE!!"
       onChange={(elem)=>
        {
          function1(elem.target.value);
          //console.log(elem.target.value);
        }
      }/>

    <button className="bg-black text-white rounded-2xl h-10 w-80 p-2" 
    onClick={btnClicked} 
    onMouseEnter={mouseEntered}>
    click here
    </button> 

    </div>
  )
}

export default App