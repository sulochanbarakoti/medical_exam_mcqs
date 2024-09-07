import { useState } from "react";
import { IoPause, IoArrowBack, IoArrowForward } from "react-icons/io5";

function QuestionInterface({
  question,
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  handleAnswer,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    handleAnswer(selected == question.correctAnswer);
  };
  if (!question) {
    return <div>No question available</div>;
  }
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-lg p-4">
        {/* Timer and Navigation */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 p-2 rounded-md text-sm">00:06</div>
            <button className="text-gray-500 hover:text-gray-800">
              <IoPause size={20} />
            </button>
          </div>
          <h2 className="text-xl font-semibold">
            Practice Test - Question {currentQuestionIndex + 1} of{" "}
            {totalQuestions}
          </h2>
        </div>

        {/* Question Text */}
        <div className="mb-4">
          <button className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-md mb-2">
            Questions Reference
          </button>
          <p className="text-gray-700">{question.question}</p>
        </div>

        {/* Options */}
        <div className="mb-4">
          <form>
            {question.options.map((option, index) => (
              <div key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            disabled={currentQuestionIndex === 0}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              currentQuestionIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            <IoArrowBack size={20} className="inline mr-2" />
            Previous
          </button>
          {currentQuestionIndex + 1 == totalQuestions ? (
            <button
              onClick={onNext("submit")}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Submit
              <IoArrowForward size={20} className="inline ml-2" />
            </button>
          ) : (
            <button
              onClick={onNext("next")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Next
              <IoArrowForward size={20} className="inline ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionInterface;
