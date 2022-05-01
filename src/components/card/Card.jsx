import { useEffect, useState } from 'react';
import { shuffle } from '../../helper/shuffle';
import { Answer } from '../answer/Answer';
import { Bookmark } from '../bookmark/Bookmark';

import './card.css';

export function Card({ cardValues, bookmarks, setBookmarks }) {
  const {
    difficulty: difficultyB64,
    question: questionB64,
    correct_answer: correctAnswerB64,
    incorrect_answers: incorrectAnswersB64,
  } = cardValues;
  const difficulty = atob(difficultyB64);
  const question = atob(questionB64);
  const correctAnswer = atob(correctAnswerB64);
  const incorrectAnswers = incorrectAnswersB64.map(answer => atob(answer));

  const [resultColor, setResultColor] = useState();
  const [givenAnswer, setGivenAnswer] = useState('');
  const [answers, setAnswers] = useState();
  const [isRevealed, setIsRevealed] = useState(false);

  const isBookmarked = bookmarks.includes(cardValues);

  useEffect(() => {
    setAnswers(shuffle([correctAnswer, ...incorrectAnswers]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBookmark() {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter(bookmark => bookmark !== cardValues));
    } else {
      setBookmarks([...bookmarks, cardValues]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isCorrect = givenAnswer === correctAnswer;
    setResultColor(isCorrect ? '#b9fbc0' : '#e05ce3');
    setIsRevealed(true);
  }

  return (
    <article
      style={{ backgroundColor: resultColor }}
      className={`${difficulty} card`}
    >
      <Bookmark isBookmarked={isBookmarked} handleBookmark={handleBookmark} />
      <p>{question}</p>
      {!isRevealed && (
        <form className="card__form" onSubmit={handleSubmit}>
          {answers &&
            answers.map(answer => (
              <Answer key={answer} onChange={setGivenAnswer} answer={answer} />
            ))}
          <button className="card__form--answer-button">CHECK ANSWER</button>
        </form>
      )}
      {isRevealed && (
        <p>
          {`You chose "${givenAnswer}". The correct answer is "${correctAnswer}"`}
        </p>
      )}
    </article>
  );
}
