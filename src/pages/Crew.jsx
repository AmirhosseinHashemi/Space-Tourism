import styled from "styled-components";
import TravelStep from "../components/TravelStep";
import CrewContent from "../components/CrewContent";

const StyledCrew = styled.section`
  padding-bottom: 5.8rem;
`;

function Crew() {
  return (
    <StyledCrew>
      <TravelStep>
        <span>02</span> MEET YOUR CREW
      </TravelStep>
      <CrewContent />
    </StyledCrew>
  );
}

export default Crew;
