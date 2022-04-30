export function Answer({ onChange, answer }) {
  return (
    <label>
      <input
        onChange={() => onChange(answer)}
        value={answer}
        type="radio"
        name="answer"
      ></input>
      {answer}
    </label>
  );
}
