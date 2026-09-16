import Card from "./components/Card";
import "./App.css";
const App = () => {
  return (
    <div className="cards-container">
      <Card  
      user="Isha Parihariya" 
      age={21}
      />
      <Card  
      user="Mohit Parihariya" 
      age={21}
      />
    </div>
  );
}

export default App;