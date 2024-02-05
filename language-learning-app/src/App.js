// App.js
import React from 'react';
import FlashcardList from './components/FlashcardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const cards = [
    { "english": "Hello", "russian": "Привет" },
    { "english": "Goodbye", "russian": "До свидания" },
    { "english": "Thank you", "russian": "Спасибо" },
  ];
  const cards2 = [
    { "english": "Hello", "turkish": "merhaba" },
    { "english": "Goodbye", "turkish": "hoşçakal" },
    { "english": "Thank you", "turkish": "teşekkürler" },
  ];
  const cards3 = [
    { "english": "Hello", "spanish": "hola" },
    { "english": "Goodbye", "spanish": "adiós" },
    { "english": "Thank you", "spanish": "gracias" },
  ];

  return (
    <div className="app">
      <h1>Language Learning Flashcards</h1>
      <h2>English - Russian</h2>
      <FlashcardList cards={cards} language="russian" />
      <h2>English - Turkish</h2>
      <FlashcardList cards={cards2} language="turkish" />
      <h2>English - Spanish</h2>
      <FlashcardList cards={cards3} language="spanish" />
    </div>
  );
};

export default App;
