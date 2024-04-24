import React from 'react';
import quizQuestion from './quizQuestion';

function Quiz() {
  const questions = quizQuestion;

  return (
    <div>
      {questions.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <p>{item.trueFalse ? 'True' : 'False'}</p>
        </div>
      ))}
    </div>
  );
}

export default Quiz;
