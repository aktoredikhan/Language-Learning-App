import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Flashcard = ({ card, language }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <Card.Body>
        <Card.Text>{isFlipped ? card[language] : card.english}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Flashcard;
