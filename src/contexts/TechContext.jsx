import {createContext, useState} from "react";
import {DEFAULT_DISPLAYED_TERMINOLOGY, TERMINOLOGIES} from "../utils/config";

export const TermContext = createContext();

function TermProvider({children}) {
  const [displayedTerm, setDisplayedTerm] = useState(
    DEFAULT_DISPLAYED_TERMINOLOGY
  );

  function changeTerm(termId) {
    const newTerm = TERMINOLOGIES.find((term) => term.id === termId);
    setDisplayedTerm(newTerm);
  }

  return (
    <TermContext.Provider value={{displayedTerm, changeTerm}}>
      {children}
    </TermContext.Provider>
  );
}

export default TermProvider;
