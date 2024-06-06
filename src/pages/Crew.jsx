import styled from "styled-components";
import TravelStep from "../components/TravelStep";
import CrewContent from "../components/CrewContent";
import PageBackImgContainer from "../components/PageBackImgContainer";

const StyledCrew = styled.section`
  padding-bottom: 5.8rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

function Crew() {
  return (
    <StyledCrew>
      <PageBackImgContainer>
        <picture>
          <source
            media="(max-width: 425px )"
            srcSet="images/crew/background-crew-mobile.jpg"
          />
          <source
            media="(max-width: 768px )"
            srcSet="images/crew/background-crew-tablet.jpg"
          />
          <img src={`images/crew/background-crew-desktop.jpg`} alt="" />
        </picture>
      </PageBackImgContainer>
      <TravelStep>
        <span>02</span> MEET YOUR CREW
      </TravelStep>
      <CrewContent />
    </StyledCrew>
  );
}

export default Crew;
