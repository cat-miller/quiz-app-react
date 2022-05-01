import { useEffect, useState } from 'react';
import { QuizPage } from './pages/QuizPage';
import './style.css';
import { Navigation } from './components/navigation/Navigation';
import { CategoriesEnumeration } from './enumerations/Categories';
import { Heading } from './components/heading/Heading';
import { NavigationEnumeration } from './enumerations/Navigation';

function App() {
  const [cards, setCards] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [activePage, setActivePage] = useState(NavigationEnumeration.QUESTIONS);
  const [category, setCategory] = useState(CategoriesEnumeration.FILM);

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple&encode=base64`;
    fetch(url)
      .then(response => response.json())
      .then(data => setCards(data.results));
  }, [category]);

  return (
    <div className="app">
      <Heading category={category} setCategory={setCategory}>
        {activePage === NavigationEnumeration.QUESTIONS
          ? 'Questions'
          : 'Bookmarks'}
      </Heading>
      <div className="app__page">
        {activePage === NavigationEnumeration.QUESTIONS && (
          <QuizPage
            cards={cards}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
          />
        )}
        {activePage === NavigationEnumeration.BOOKMARKS && (
          <QuizPage
            cards={bookmarks}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
          />
        )}
      </div>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
