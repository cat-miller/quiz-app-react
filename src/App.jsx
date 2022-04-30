import { useEffect, useState } from 'react';
import { QuizPage } from './pages/QuizPage';
import './base.css';
import './app.css';
import { Navigation } from './components/navigation/Navigation';

function App() {
  const [cards, setCards] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [activePage, setActivePage] = useState('questions');

  useEffect(() => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=base64';
    fetch(url)
      .then(response => response.json())
      .then(data => setCards(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Movie Quiz</h1>
      {activePage === 'questions' && (
        <QuizPage
          cards={cards}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      )}
      {activePage === 'bookmarks' && (
        <QuizPage
          cards={bookmarks}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      )}
      <Navigation activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
