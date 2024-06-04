import styled from "styled-components";

import TravelStep from "../components/TravelStep";
import PlanetArticle from "../components/PlanetArticle";

const StyledSection = styled.section`
  padding-bottom: 5.8rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  margin-top: 3.2rem;
`;

function Destination() {
  return (
    <StyledSection>
      <TravelStep>
        <span>01</span> PICK YOUR DESTINATION
      </TravelStep>

      <Div>
        <PlanetArticle />
      </Div>
    </StyledSection>
  );
}

export default Destination;
