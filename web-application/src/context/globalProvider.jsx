import { createContext, useContext, useState, useEffect } from "react";
import { config, fetchQuestions } from "../lib/appwrite";

const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [physics, setPhysics] = useState([]);
  const [chemistry, setChemistry] = useState([]);
  const [zoology, setZoology] = useState([]);
  const [botany, setBotany] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        // Fetch all questions in parallel
        const [physicsData, chemistryData, botanyData, zoologyData] =
          await Promise.all([
            fetchQuestions(config.physicsCollectionId),
            fetchQuestions(config.chemistryCollectionId),
            fetchQuestions(config.botanyCollectionId),
            fetchQuestions(config.zoologyCollectionId),
          ]);

        // Update state with the fetched data
        setPhysics(physicsData);
        setChemistry(chemistryData);
        setBotany(botanyData);
        setZoology(zoologyData);
      } catch (error) {
        console.error("Failed to fetch questions", error);
      }
    };

    getQuestions();
  }, []);

  return (
    <GlobalContext.Provider value={{ physics, chemistry, botany, zoology }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
