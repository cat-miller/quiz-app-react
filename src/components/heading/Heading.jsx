import { categoryOptions } from '../../enumerations/Categories';
import './heading.css';

export function Heading({ category, setCategory, children }) {
  function handleChange(event) {
    const value = event.target.value;
    setCategory(value);
  }

  return (
    <div className="heading">
      <h1>{children}</h1>
      <label>
        Choose a category:
        <select value={category} onChange={handleChange}>
          {categoryOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
