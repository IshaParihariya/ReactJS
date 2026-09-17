import "./index.css";
import Card from "./components/card/Card";
import Data from "./data/Data";

const App = () => 
  {
  return (
    <div className="parent">
    {
    Data.map((jobDetails,id) => 
    (   
      <div key={id}>   
       <Card {...jobDetails}/>
       </div>
    )
    )
    };
    </div>
  )
}

export default App;
