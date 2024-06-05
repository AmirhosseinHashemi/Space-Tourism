import {createContext, useState} from "react";
import {CREW, DEFAULT_DISPLAYED_CREW} from "../utils/config";

export const CrewContext = createContext();

function CrewProvider({children}) {
  const [displayedCrew, setDisplayedCrew] = useState(DEFAULT_DISPLAYED_CREW);

  function changeCrew(crewId) {
    const newDisplayedCrew = CREW.find((person) => person.id === crewId);
    setDisplayedCrew(newDisplayedCrew);
  }

  return (
    <CrewContext.Provider value={{displayedCrew, changeCrew}}>
      {children}
    </CrewContext.Provider>
  );
}

export default CrewProvider;
