import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ term, definition }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">{term}</div>
      <div className="back">{definition}</div>
    </div>
  );
}

export default Flashcard;
