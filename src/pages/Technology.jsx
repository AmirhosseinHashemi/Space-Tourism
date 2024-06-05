import styled from "styled-components";
import TravelStep from "../components/TravelStep";
import TechnologyContent from "../components/TechnologyContent";

const StyledTechnology = styled.section`
  padding-bottom: 5.4rem;
`;

function Technology() {
  return (
    <StyledTechnology>
      <TravelStep>
        <span>03</span> SPACE LAUNCH 101
      </TravelStep>
      <TechnologyContent />
    </StyledTechnology>
  );
}

export default Technology;
