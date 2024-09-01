import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Fisher-Yates shuffle algorithm to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Practice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state;

  // Shuffle questions and their options
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  useEffect(() => {
    const shuffled = questions.map((question) => ({
      ...question,
      options: shuffleArray([...question.options]), // Shuffle options
    }));
    setShuffledQuestions(shuffleArray(shuffled)); // Shuffle questions
  }, [questions]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowSolution(true);
  };

  const handleFinish = () => {
    navigate("/home");
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setShowSolution(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>; // In case questions haven't been shuffled yet
  }

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl mx-2 mt-10 p-5 border rounded shadow-lg">
        <h2 className="text-xl font-bold">{currentQuestion.question}</h2>
        <div className="mt-4 space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`block w-full p-2 text-left rounded-lg ${
                option === selectedOption
                  ? option === currentQuestion.correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {showSolution && (
          <div className="mt-4">
            <p className="font-semibold">
              {selectedOption === currentQuestion.correctAnswer
                ? "Correct!"
                : "Incorrect!"}
            </p>
            <p>{currentQuestion.solution}</p>
            <button
              onClick={handleNextQuestion}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Next Question
            </button>
            <button
              onClick={handleFinish}
              className="mt-4 px-4 py-2 mx-2 bg-red-500 text-white rounded-lg"
            >
              Finish Practice
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;
