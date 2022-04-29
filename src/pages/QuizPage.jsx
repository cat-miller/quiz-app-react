import { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export function QuizPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=base64';
    fetch(url)
      .then(response => response.json())
      .then(data => setCards(data.results));
  }, []);
  return (
    <div>
      {cards.length > 0 &&
        cards.map(card => <Card key={card.question} cardValues={card} />)}
    </div>
  );
}
