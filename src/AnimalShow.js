import { useState } from "react";
import "./AnimalShow.css";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";

const imgMap = {bird, cat, cow, dog, gator, horse};

function AnimalShow({type}) {
    const [width, setWidth] = useState(1);
    const handleClick = () => {setWidth(width + 1);}

    return (
        <div className="animal-show" onClick={handleClick}>
            <img src={imgMap[type]} alt="animal" className="animal"/>
            <img src={heart} alt="heart" className="heart" style={{position:"absolute", bottom:"10%", right:"10%", width:`${10 + 10 * width}px`}}/>
        </div>
    )
}

export default AnimalShow;