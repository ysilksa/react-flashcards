import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';

function App() {
  const [cardNumber, setCardNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(0); // 0 = no answer, 1 = correct, 2 = incorrect

  // handles moving the cards back and forth
  function handleClickNext() {
    if (cardNumber < 10) {
      setCardNumber(cardNumber + 1);
    }
    setAnswer("");
    setIsCorrect(0);
  }

  function handleClickBack() {
    if (cardNumber > 1) {
      setCardNumber(cardNumber - 1);
    }
    setAnswer("");
    setIsCorrect(0);
  }

  function checkAnswer(event) {
    // prevent the default
    event.preventDefault(); 

    // check the answer
    if (answer.toLowerCase() != flashcards[cardNumber - 1].back.toLowerCase()) {
      setIsCorrect(2);
    }
    else {
      setIsCorrect(1);
    }
  }

  const flashcards = [
    {
      front: "What is the difference between skincare and makeup?",
      back: "Skincare maintains and improves the health of your skin. Makeup enhances beauty by altering the appearance of the skin and other features. "
    },
    {
      front: "What is the purpose of a moisturizer?", 
      back: "Moisturizer hydrates the skin and helps maintain its natural barrier to prevent dryness and irritation."
    },
    {
      front: "What does “non-comedogenic” mean?", 
      back: "It means that the formula is made to not clog pores, reducing the chance of acne."
    },
    {
      front: "What is the difference between chemical and physical exfoliants?", 
      back: "Chemical exfoliants use acids to dissolve dead skin cells, while physical exfoliants use scrubbing particles to manually remove them."
    },
    {
      front: "What does hyaluronic acid do for your skin?", 
      back: "Hyaluronic acid attracts and retains moisture, helping the skin stay plump and hydrated."
    },
    {
      front: "What is the function of a primer in makeup?", 
      back: "Primer creates a smooth base for makeup, helps it last longer, and can minimize the appearance of pores."
    },
    {
      front: "What does “cruelty-free” mean in beauty products?", 
      back: "It means the product and its ingredients were not tested on animals at any stage of development."
    },
    {
      front: "What is the difference between BB cream and foundation?", 
      back: "BB cream offers light coverage with skincare benefits, while foundation provides fuller coverage and is more focused on appearance."
    },
    {
      front: "Why is double cleansing recommended in skincare routines?", 
      back: "Double cleansing removes makeup and sunscreen with an oil-based cleanser, followed by a water-based cleanser to clean the skin thoroughly."
    },
    {
      front: "What does “oxidation” mean in relation to foundation?", 
      back: "Oxidation occurs when foundation reacts with air or skin oils, causing it to darken after application."
    }
  ]

  return (
    <div className="app-page">
      {/* Header for the flashcards */}
      <section>
        <h1>Beauty Flashcards</h1>
        <h2>Test your knowledge on common beauty products!</h2>
      </section>
      <Flashcard
        front={flashcards[cardNumber - 1].front}
        back={flashcards[cardNumber - 1].back}
      />

      {/* Input for the flashcard answer */}
      <section>
        <form className="answer-section" onSubmit={checkAnswer}>
          <input 
            type="text" 
            placeholder="Type your answer here"
            value={answer}
            onChange = {(e) => setAnswer(e.target.value)}
            style = {{
              borderColor: isCorrect === 0 ? "transparent" : (isCorrect === 1 ? "green" : "red")
            }}
          />
          <button type="submit">Submit guess</button>
        </form>
      </section>

      {/* Card number and next button  */}
      <section> 
        <p>{cardNumber} / 10</p>
        <div className='nav-buttons'>
          {/* Button to return to the previous card */}
          <button 
            className="next-button" 
            onClick={handleClickBack}
            disabled={cardNumber === 1}
            style = {{
              backgroundColor: cardNumber === 1 ? "#E0E0E0" : "#C1CCB6",
              cursor: cardNumber === 1 ? "not-allowed" : "pointer"
            }}
          >
            Back
          </button>

          {/* Button to go to the next card */}
          <button 
            className="next-button" 
            onClick={handleClickNext}
            disabled={cardNumber === 10}
            style = {{
              backgroundColor: cardNumber === 10 ? "#E0E0E0" : "#C1CCB6",
              cursor: cardNumber === 10 ? "not-allowed" : "pointer"
            }}
          >
            Next
          </button>
        </div>
        
      </section>

    </div>    
  )
}

export default App
