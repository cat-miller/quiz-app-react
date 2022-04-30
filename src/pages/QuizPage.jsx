import { Card } from '../components/card/Card';
import './quizPage.css';

export function QuizPage({ cards, bookmarks, setBookmarks }) {
  return (
    <div className="quizPage">
      {cards.length > 0 &&
        cards.map(card => (
          <Card
            key={card.question}
            cardValues={card}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
          />
        ))}
    </div>
  );
}
