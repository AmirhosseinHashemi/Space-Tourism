import {useContext} from "react";
import {CrewContext} from "../contexts/CrewContext";

function useCrew() {
  const context = useContext(CrewContext);
  return context;
}

export default useCrew;
