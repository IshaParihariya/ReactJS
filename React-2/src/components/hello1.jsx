//component 1

import "./Hello1.css";

const Hello1 = () => 
    {
  const user ="Isha Parihariya";
  const age =21;
  return(
  <div className="start">
    <div className="start1"> 
    <h1>Welcome to my Coding Shit!!</h1>
    <p>babes im tryna learn React here..LOVE FROM ISHA HEHEHEHEHAHAHHAAHAHAHAHHAHAAHHAHAHA IK U MIGHT BE THINKING WHTAS GOING ON AND ALL HAHAHAHAH WHATEVER!!</p>
    </div>

    <div className="start2">
      <h2>My name is {user} and I am {age} years old from Hello1.</h2>
    </div>
  </div>
  );
}

export default Hello1