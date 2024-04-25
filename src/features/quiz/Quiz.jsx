import React, { useState, useEffect } from "react";
import { questions } from "./quizQuestion";
import quiz_1 from "../../assets/quiz_1.jpg";
import quiz_2 from "../../assets/quiz_2.jpg";


// function shuffleArray(array) {
//   const shuffledArray = [...array]; // Copy the original array to avoid mutating it
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// }

const Quiz = () => {
  const [value, setValue] = useState(6);
  const [firstHalf, setFirstHalf] = useState([]);
  const [page, setPage] = useState(null);
  const [qNo, setQNo] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [improvement, setImprovement] = useState(0)
  

  const pickRandom12 = (array) => {
    const shuffledArray = array.slice(0, 12); // Pick the first 12 elements
    for (let i = 11; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      console.log("Selected option:", selectedOption);
      if (selectedOption === String(firstHalf[qNo].trueFalse)) {
        setImprovement(parseInt(improvement)+ (100 / firstHalf.length));
      }
      
      console.log(improvement ,selectedOption,  firstHalf[qNo].trueFalse);
      const radioButtons = document.querySelectorAll('input[name="options"]');
      const isChecked = Array.from(radioButtons).some(radioButton => radioButton.checked);
      setSelectedOption(null);
      if (isChecked) {
             setQNo(qNo + 1);
             setIsOptionSelected(false); 
            radioButtons.forEach(radioButton => radioButton.checked = false);
      
      
          } else {
            alert("Please select an option before moving to the next question.");
          }
          
    } else {
      alert("Please select an option before moving to the next question.");
    }
  };

  useEffect(() => {
    const half1 = pickRandom12(questions);
    setFirstHalf(half1);
  }, []);

  const handleQuiz = (quiz) => {
    setPage(quiz);
  };

  return (
    <div className="bg-slate-800 flex justify-center items-center">
      <div className="landing lg:w-1/2 w-11/12 h-full border-2 border-gray-700 bg-slate-900 p-4 m-10 flex items-center justify-center font-mono rounded-2xl shadow-lg shadow-slate-700 ">
        <div className="">
          {!page && <QuizWindow handleQuiz={handleQuiz} value={value} setValue={setValue}/>}
          
          {page && qNo<=11 && (
            <>
              <div className="flex items-center justify-center">
                <div className="text-2xl text-white m-8">
                  Q.{qNo + 1}) {firstHalf[qNo].question}
                </div>
              </div>
              <div className="option m-8 flex-col gap-10 ">
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value="true"
                    name="options"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:bg-white checked:bg-blue-500"
                    onChange={handleOptionSelect}
                  />
                  <label
                    htmlFor="bordered-radio-1"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center m-1 hover:bg-primary"
                  >
                    True
                  </label>
                </div>
                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mt-8">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value="false"
                    name="options"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={handleOptionSelect} 
                  />
                  <label
                    htmlFor="bordered-radio-2"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center m-1 hover:bg-primary"
                  >
                    False
                  </label>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                  className={`flex justify-center items-center m-4 p-8 rounded-xl font-mono w-1/3 ${isOptionSelected ? 'bg-gray-600 hover:bg-slate-300 cursor-pointer' : 'bg-gray-400'}`}
                  onClick={handleNextQuestion}
                >
                  Next
                </div>
              </div>
            </>
          )}
          {qNo===12 &&(
            <>
            <div className="flex m-4 p-10 text-5xl font-mono items-center justify-center text-white">
              ScoreBoard
            </div>
            <div className="box flex w-full justify-between gap-2 text-3xl text-white font-mono">
              <div className="box1 flex-col justify-center">
                  <div className="m-6 flex items-center">Total Question :</div>
                  <div className="m-6 flex items-center">Question Attempt :</div>
                  <div className="m-6 flex items-center">Improvement Needed :</div>
              </div>
              <div className="box1 flex-col justify-center">
                  <div className="m-6 flex items-center"> 12 </div>
                  <div className="m-6 flex items-center"> 12 </div>
                  <div className="m-6 flex items-center">{(100 - improvement - 3.6).toFixed(0)} %</div>
              </div>
            </div>
            <div className="flex m-4 p-4 text-4xl font-mono items-center justify-center text-white">
              Improvement Field
            </div>
            <div className="flex m-4 p-2 text-xl font-mono items-center justify-center text-white">
              <div className="m-5">Vocabulary</div>
              <div className="m-5">Language</div>
            </div>
            
            </>
          )

          }
        </div>
      </div>
    </div>
  );
};
const QuizCard = ({ quiz, imgSrc, handleQuiz }) => {
  return (
    <div className="rounded-xl" onClick={() => handleQuiz(quiz)}>
      <img src={imgSrc} alt="quiz" className="rounded-xl" />
      <div className="flex justify-center items-center mt-4">Quiz {quiz}</div>
    </div>
  );
};
const QuizWindow = ({ handleQuiz ,value , setValue }) => {
  

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-5xl text-white m-10">Quiz Time!</div>
      </div>
      <div className="m-10 flex justify-between gap-10 text-white text-3xl">
        <QuizCard quiz={1} imgSrc={quiz_1} handleQuiz={handleQuiz} />
        <QuizCard quiz={2} imgSrc={quiz_2} handleQuiz={handleQuiz} />
      </div>
      {/* <div className="m-4 flex justify-center items-center text-white text-3xl">
       
        <div className="relative mb-6 w-2/3">
           <div className="flex justify-center items-center">
           No. Of Question
           </div>
          <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
          <input
            id="labels-range-input"
            type="range"
            value={value}
            min="6"
            max="20"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min 6</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">10</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">14</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max 20</span>
        </div>
      </div>
      <div className="m-4 flex justify-center items-center text-white text-3xl">
          {value}
      </div> */}
    </>
  );
};

export default Quiz;