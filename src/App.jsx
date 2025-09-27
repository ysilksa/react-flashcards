import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';

function App() {
  const [cardNumber, setCardNumber] = useState(1);

  function handleClick() {
    if (cardNumber < 10) {
      setCardNumber(cardNumber + 1);
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
    <>
      {/* Header for the flashcards */}
      <section>
        <h1>Beauty Flashcards</h1>
        <h2>Test your knowledge on common beauty products!</h2>
      </section>
      <Flashcard
        front={flashcards[cardNumber - 1].front}
        back={flashcards[cardNumber - 1].back}
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
