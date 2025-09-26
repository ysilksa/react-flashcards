import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard.';

function App() {
  const [cardNumber, setCardNumber] = useState(1);

  function handleClick() {
    if (cardNumber < 10) {
      setCardNumber(cardNumber + 1);
    }
  }

  return (
    <>
      {/* Header for the flashcards */}
      <section>
        <h1>Beauty Flashcards</h1>
        <h2>Test your knowledge on common beauty products!</h2>
      </section>
      <Flashcard
        text="What is the difference between skincare and makeup?"
      />

      {/* Card number and next button  */}
      <section> 
        <p>{cardNumber} / 10</p>
        <button className="next-button" onClick={handleClick}>Next →</button>
      </section>

    </>    
  )
}

export default App
