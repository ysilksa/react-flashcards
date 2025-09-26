import React from 'react';
import './Flashcard.css';

const Flashcard = (props) => {
    return (
        <div className="flashcard">
            <p>{props.text}</p>
        </div>
    )
}

export default Flashcard;