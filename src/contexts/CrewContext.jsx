import {createContext, useContext, useState} from "react";
import {CREW, DEFAULT_DISPLAYED_CREW} from "../utils/config";

const CrewContext = createContext();

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

// hook
function useCrew() {
  const context = useContext(CrewContext);
  return context;
}

export {CrewProvider, useCrew};
