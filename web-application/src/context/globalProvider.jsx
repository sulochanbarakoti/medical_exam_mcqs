import { createContext, useContext, useState, useEffect } from "react";
import { config, fetchQuestions, getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [physics, setPhysics] = useState([]);
  const [chemistry, setChemistry] = useState([]);
  const [zoology, setZoology] = useState([]);
  const [botany, setBotany] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.error("Failed to get current user", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        physics,
        chemistry,
        botany,
        zoology,
        isLoading,
        setIsLoading,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
