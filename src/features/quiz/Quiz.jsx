import React from "react";
import { questions } from "./quizQuestion";
import quiz_1 from "../../assets/quiz_1.jpg";
import quiz_2 from "../../assets/quiz_2.jpg";

function Quiz() {
  return (
    <div className="bg-slate-800 flex justify-center items-center">
      <div className="landing w-1/2 h-full border-2 border-gray-700 bg-slate-900 p-4 m-10 flex items-center justify-center font-mono rounded-2xl shadow-lg shadow-slate-700 ">
        <div className="">
          <div className="flex items-center justify-center">
            <div className="text-5xl text-white m-10">Quiz Time!</div>
          </div>
          <div className="m-10 flex justify-between gap-10 text-white text-3xl">
            <QuizCard quiz={1} imgSrc={quiz_1} />
            <QuizCard quiz={2} imgSrc={quiz_2} />
          </div>
        </div>
      </div>
    </div>
  );
}

const QuizCard = ({ quiz, imgSrc }) => {
  return (
    <div className="rounded-xl">
      <img src={imgSrc} alt="quiz" className="rounded-xl" />
      <div className="flex justify-center items-center mt-4">Quiz {quiz}</div>
    </div>
  );
};

export default Quiz;
