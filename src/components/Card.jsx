import { useEffect, useState } from 'react';
import { shuffle } from '../helper/shuffle';
import { Answer } from './Answer';

export function Card({ cardValues }) {
  const {
    difficulty,
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = cardValues;
  const [resultColor, setResultColor] = useState('white');
  const [givenAnswer, setGivenAnswer] = useState('');
  const [answers, setAnswers] = useState();

  useEffect(() => {
    setAnswers(shuffle([correctAnswer, ...incorrectAnswers]));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const isCorrect = givenAnswer === atob(correctAnswer);
    setResultColor(isCorrect ? 'green' : 'red');
  }

  return (
    <article
      style={{ backgroundColor: resultColor }}
      className={atob(difficulty)}
    >
      <p>{atob(question)}</p>
      <form onSubmit={handleSubmit}>
        <div>
          {answers &&
            answers.map(answer => (
              <Answer
                key={answer}
                onChange={setGivenAnswer}
                answer={atob(answer)}
              />
            ))}
        </div>
        <button>CHECK ANSWER</button>
      </form>
    </article>
  );
}
