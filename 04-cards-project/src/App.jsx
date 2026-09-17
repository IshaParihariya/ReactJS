import "./index.css";
import Card from "./components/Card";
import Data from "./data/Data";

const App = () => 
  {
  return (
    <div className="parent">
    {
    Data.map((jobDetails) => 
    (      
       <Card {...jobDetails}/>
    )
    )
    };
    </div>
  )
}

export default App;
