import React, { useState, useEffect } from 'react';
import questions from '../../db/questions.js';
import QuestionStyle from './QuizStyle';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    id: 0,
    title: null,
    choices: []
  });

  useEffect(() => {
    // Runs every time `currentQuestion` updates
    const questionData = questions.find(
      (question) => question.id === currentQuestion.id
    );

    setCurrentQuestion(questionData);
  }, [currentQuestion.id]);

  return (
    <QuestionStyle>
      <h3>{currentQuestion.title}</h3>
      <ul>
        {Object.keys(currentQuestion.choices).map((choice, idx) => (
          <li key={`choice-${idx}`}>
            <button type="button">{choice}</button>
          </li>
        ))}
      </ul>
    </QuestionStyle>
  );
};

export default Quiz;
