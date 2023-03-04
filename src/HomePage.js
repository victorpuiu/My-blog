import {useState} from "react"; //useState is a Hook, make a value reactive and use it whenever we want


const Home  = () => {
    // let name = "stef";
    const [name, setName] = useState("stef");
    const [age, setAge] = useState(25);


    const handleClick = () => {
        setName("luigi");
        setAge(35);
    }



    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}

export default Home;