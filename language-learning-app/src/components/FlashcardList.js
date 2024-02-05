import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ cards, language }) => {
  return (
    <div className="flashcard-list">
      {cards.map((card, index) => (
        <Flashcard key={index} card={card} language={language} />
      ))}
    </div>
  );
};

export default FlashcardList;
