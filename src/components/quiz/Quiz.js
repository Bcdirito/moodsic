import React, { useState, useEffect } from 'react';
import questions from '../../db/questions.js';
import { QuestionStyle, ImageStyle, ImagePairStyle } from './QuizStyle';
import inkblot from '../../global/images/inkblot.jpg';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    id: 0,
    title: null,
    images: [],
    choices: {}
  });
  const [choices, setChoices] = useState({
    girlPower: 0,
    sunshineAndLollipops: 0,
    sadGirlHour: 0,
    what: 0,
    apocalypseMeow: 0,
    boogieShoes: 0
  });

  useEffect(() => {
    // Runs once on mount
    const questionData = getAQuestion(currentQuestion.id);

    setCurrentQuestion(questionData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAQuestion = id => {
    return questions.find(question => question.id === id);
  };

  const updateQuizView = e => {
    const finalQuestion = questions.length - 1;
    let nextQuestionID = currentQuestion.id;
    let nextQuestion;
    let choice;

    if (
      currentQuestion.id !== finalQuestion &&
      e.target.classList.contains('choice') &&
      e.target.dataset.choice
    ) {
      choice = e.target.dataset.choice;
      nextQuestionID += 1;
      nextQuestion = getAQuestion(nextQuestionID);
      updateScore(choice);
      setCurrentQuestion(nextQuestion);
    }
  };

  const updateScore = choice => {
    if (choices[choice] !== undefined) {
      const currentScore = choices[choice] + 1;
      setChoices({ ...choices, [choice]: currentScore });
    }
  };

  const renderImage = () => {
    const images = currentQuestion.images;

    if (images.length === 1) {
      return (
        <ImageStyle>
          <img src={inkblot} alt={images[0]} />
        </ImageStyle>
      );
    }
  };

  const renderPairImage = id => {
    const images = currentQuestion.images;

    if (images.length > 1) {
      const pairImage = require(`../../global/images/${currentQuestion.images[id]}`);

      return <ImagePairStyle src={pairImage.default} alt={images[id]} />;
    }
  };

  return (
    <QuestionStyle>
      <h3>{currentQuestion.title}</h3>
      {renderImage()}
      <ul id={`question-${currentQuestion.id}`} onClick={updateQuizView}>
        {Object.keys(currentQuestion.choices).map((choice, idx) => (
          <li key={`choice-${idx}`}>
            <button
              type='button'
              className='choice'
              data-choice={
                Object.keys(currentQuestion.choices).length > 0
                  ? currentQuestion.choices[choice]
                  : null
              }
            >
              {renderPairImage(idx)}
              <span>{choice}</span>
            </button>
          </li>
        ))}
      </ul>
    </QuestionStyle>
  );
};

export default Quiz;
