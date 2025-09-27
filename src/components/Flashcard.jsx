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
            <div className="flashcard">
                <p>{side == "front" ? props.front : props.back}</p>
            </div>
        </div>
    )
}

export default Flashcard;