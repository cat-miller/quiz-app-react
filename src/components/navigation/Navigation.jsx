import { NavigationEnumeration } from '../../enumerations/Navigation';
import './navigation.css';

export function Navigation({ activePage, setActivePage }) {
  return (
    <nav className="navigation">
      <button
        onClick={() => setActivePage(NavigationEnumeration.QUESTIONS)}
        className={
          activePage === NavigationEnumeration.QUESTIONS
            ? 'navigation__button navigation__button--active'
            : 'navigation__button'
        }
      >
        Questions
      </button>
      <button
        onClick={() => setActivePage(NavigationEnumeration.BOOKMARKS)}
        className={
          activePage === NavigationEnumeration.BOOKMARKS
            ? 'navigation__button navigation__button--active'
            : 'navigation__button'
        }
      >
        Bookmarks
      </button>
    </nav>
  );
}
