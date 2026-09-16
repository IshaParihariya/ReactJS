import "./Card.css";

const Card = (props) => {
    //properties
    console.log(props);
  return (
    <div className="card">
        <img src="https://picsum.photos/400/300" alt="random"/>
        <h1>This is {props.user} and I am {props.age} years old.</h1>
        <p>hi i am a card and im so cute..its really nice to meet uh and im glad we met!!</p>
        <button>HEHE</button>
    </div>
  );
}

export default Card;