import React, { useState, useEffect } from 'react';
import questions from '../../db/questions.js';
import QuestionStyle from './QuizStyle';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    id: 0,
    title: null,
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

  return (
    <QuestionStyle>
      <h3>{currentQuestion.title}</h3>
      <ul onClick={updateQuizView}>
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
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </QuestionStyle>
  );
};

export default Quiz;
