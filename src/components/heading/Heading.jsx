import { categoryOptions } from '../../enumerations/Categories';

export function Heading({ category, setCategory, children }) {
  function handleChange(event) {
    const value = event.target.value;
    setCategory(value);
  }

  return (
    <div>
      <h1>{children}</h1>
      <label>
        Choose a category:
        <select onChange={handleChange}>
          {categoryOptions.map(option => {
            if (option.value === category) {
              return (
                <option key={option.value} value={option.value} selected>
                  {option.label}
                </option>
              );
            }
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
