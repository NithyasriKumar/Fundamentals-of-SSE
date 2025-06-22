import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FunCorner.css';

const funFacts = [
  "🐛 The first computer bug was a real moth stuck in a relay!",
  "☕ HTTP 418: I'm a teapot — it’s a real status code!",
  "😂 JavaScript was created in just 10 days. And it's still evolving!",
  "💡 Why do programmers prefer dark mode? Because light attracts bugs.",
  "😴 A developer's favorite key? The `ESC` key — to escape everything!",
  "🤓 There are 10 kinds of people: those who understand binary and those who don’t.",
  "🔥 Stack Overflow is basically a developer’s second brain!",
  "🐍 Python was named after Monty Python — not the snake!",
  "🧙‍♂️ A good developer is like a wizard… except their magic is `debugging`.",
  "🔁 Infinite loops are like bad jokes — they never end.",
  "📚 Stack Overflow: the holy scripture of modern coding.",
  "🥱 Most programmers spend more time googling than coding — and that’s okay!"
];

function FunCorner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    const nextIndex = (currentIndex + 1) % funFacts.length;
    setFlipped(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFlipped(false);
    }, 300);
  };

  return (
    <div className="fun-corner">
      <h2>🎉 Fun Corner Flip 🎉</h2>
      <div className={`fun-flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-inner">
          <div className="flip-front">
            <p>{funFacts[currentIndex]}</p>
          </div>
          <div className="flip-back">
            <p>{funFacts[(currentIndex + 1) % funFacts.length]}</p>
          </div>
        </div>
      </div>
      <p className="flip-note">Click the card to flip for a new fun fact!</p>

      <button className="back-home-btn" onClick={() => navigate('/')}>
        ⬅️ Back to Home
      </button>
    </div>
  );
}

export default FunCorner;
