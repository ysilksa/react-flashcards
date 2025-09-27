import { useState } from 'react';
import './Flashcard.css';

const Flashcard = (props) => {
    const [side, setSide] = useState("front");

    function handleClick() { 
        if (side == "front") {
            setSide("back");
        } else {
            setSide("front");
        }
    }

    return (
        <div className="flashcard-background" onClick={handleClick}>
            <div className={`flashcard ${side === "back" ? "flipped" : ""}`}>
                <div className="card-face front">
                    <p>{props.front}</p>
                </div>
                <div className="card-face back">
                    <p>{props.back}</p>
                </div>
            </div>
        </div>

    )
}

export default Flashcard;