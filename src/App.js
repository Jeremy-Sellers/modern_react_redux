import ProfileCard from "./components/ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import AnimalShow from "./components/AnimalShow";
import {useState} from "react";
import './App.css';

let App = () => {
    const getRandmonAnimal = () => {
        const animals = ['bird','cat','dog','cow','horse','gator'];
        return animals[Math.floor(Math.random() * animals.length)]
    }
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals,getRandmonAnimal()]);
    }

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    });

    return (
        <div className="app">
            {/*<ProfileCard img={SiriImage} name={'Facebook'} twitterHandle={'TheZuck'} description={facebookMsg}/>*/}
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderAnimals}</div>

        </div>
    )
}

export default App;