import './navigation.css';

export function Navigation({ activePage, setActivePage }) {
  return (
    <nav className="navigation">
      <button
        onClick={() => setActivePage('questions')}
        className={
          activePage === 'questions'
            ? 'navigation__button navigation__button--active'
            : 'navigation__button'
        }
      >
        Questions
      </button>
      <button
        onClick={() => setActivePage('bookmarks')}
        className={
          activePage === 'bookmarks'
            ? 'navigation__button navigation__button--active'
            : 'navigation__button'
        }
      >
        Bookmarks
      </button>
    </nav>
  );
}
