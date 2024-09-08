import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionInterface from "./components/questionInterface";
import { useGlobalContext } from "../context/globalProvider";
import { storeTestResult } from "../lib/appwrite";

const Test = () => {
  const navigate = useNavigate();
  const { physics, isLoading, user } = useGlobalContext();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const date = new Date();
  const currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const questionSetting = async () => {
    if (physics && physics.length > 0) {
      setQuestions(physics);
    } else {
      console.error("Physics data is empty or not loaded correctly.");
    }
  };

  useEffect(() => {
    questionSetting();
  }, [physics]);

  // Additional debugging for when questions state updates
  useEffect(() => {
    console.log("Questions state updated:", questions);
  }, [questions]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = async (props) => {
    try {
      console.log(score);
      if (props == "submit") {
        const testReport = {
          users: user.$id,
          date: currentTime,
          correct: score,
          incorrect: questions.length - score,
          total: questions.length,
        };
        console.log(testReport);
        await storeTestResult(testReport);
        navigate("/home");
      }
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message while fetching questions
  }

  return (
    <QuestionInterface
      question={questions[currentQuestion]}
      currentQuestionIndex={currentQuestion}
      totalQuestions={questions.length}
      onPrevious={handlePrevious}
      onNext={handleNext}
      handleAnswer={handleAnswerOptionClick}
    />
  );
};

export default Test;
