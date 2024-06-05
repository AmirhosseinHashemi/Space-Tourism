import {useContext} from "react";
import {TermContext} from "../contexts/TechContext";

function useTerm() {
  const context = useContext(TermContext);
  return context;
}

export default useTerm;
