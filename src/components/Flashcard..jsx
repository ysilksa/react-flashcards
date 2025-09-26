import React from 'react';
import './Flashcard.css';

const Flashcard = (props) => {
    return (
        <div className="flashcard-background">
            <div className="flashcard">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Flashcard;