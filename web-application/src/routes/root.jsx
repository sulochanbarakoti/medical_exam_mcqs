import { useEffect } from "react";
import image from "../assets/image";
import { useGlobalContext } from "../context/globalProvider";
import CustomeButton from "./components/customeButtons";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const { user } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  });

  const handleClickButton = () => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline py-3">
        Medical Entrance Exam Preparation
      </h1>
      <img src={image.doctor} alt="doctors" className="rounded-lg" />
      <CustomeButton
        title="Continue practice mcqs with email"
        otherStyle="pt-2"
        handleClick={handleClickButton}
      />
    </div>
  );
};

export default Root;
