import { TbAtomOff } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { GiSkeleton } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalProvider";
import { useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const Home = () => {
  const navigate = useNavigate();
  const { physics, chemistry, botany, zoology, user } = useGlobalContext();

  useEffect(() => {
    getCurrentUser().then((res) => {
      if (!res) {
        navigate("/");
      }
    });
  });

  const topics = [
    {
      id: 1,
      title: "Physics Practice Test",
      questions: physics,
      icon: <TbAtomOff size={30} />,
    },
    {
      id: 2,
      title: "Chemistry Practice Test",
      questions: chemistry,
      icon: <SlChemistry size={30} />,
    },
    {
      id: 3,
      title: "Zoology Practice Test",
      questions: zoology,
      icon: <GiSkeleton size={30} />,
    },
    {
      id: 4,
      title: "Botany Practice Test",
      questions: botany,
      icon: <GiPlantRoots size={30} />,
    },
  ];

  const handleTopicClick = (topic) => {
    navigate("/starttest", { state: { questions: topic.questions } });
  };

  const handleFullTestClick = () => {
    navigate("/dialog");
  };

  return (
    <div className="h-auto">
      <div className="h-[40vh] bg-background1 bg-cover flex justify-center items-center">
        <div className="bg-white p-5 py-10 w-[90%] md:w-[50%] rounded-md flex flex-col justify-center items-center">
          <div className="text-xl font-bold">MBBS Preparation Exam</div>
          <div className="text-center mt-2">
            Get started on the path to your new medical career.
          </div>
          <div className="p-3">
            <button
              className="px-5 p-3 bg-red-400 hover:bg-red-600 border-2 border-red-600 rounded-md text-xl font-bold text-white"
              onClick={() => handleFullTestClick()}
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="p-5">
          The Medical Education Commission in Nepal regulates MBBS entrance
          exams for medical aspirants in Nepal. MBBS entrance exam is one of the
          very popular and very tough entrance exams in Nepal. This is the most
          competitive and highly respected examination because nearly 30
          thousand to 40 thousand students appear in the MBBS entrance exam, to
          get a seat in the total available seats of 1925 in which only 452 are
          provided full scholarships in Nepal.
        </div>
      </div>
      <div className="flex justify-center items-center bg-secondary py-2">
        <div className="text-3xl font-bold px-5">
          Free MBBS Preparation Questions
        </div>
      </div>
      <div className="h-[50vh] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleTopicClick(topic)}
              className="m-3 p-3 space-x-3 bg-primary rounded-lg text-lg font-bold text-white flex flex-row items-center justify-between"
            >
              <div>{topic.title}</div>
              <div>{topic.icon}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
