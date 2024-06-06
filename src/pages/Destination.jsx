import styled from "styled-components";

import PageBackImgContainer from "../components/PageBackImgContainer";
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

  @media only screen and (min-width: 768px) {
    margin-top: 6rem;
  }
`;

function Destination() {
  return (
    <StyledSection>
      <PageBackImgContainer>
        <picture>
          <source
            media="(max-width: 425px )"
            srcSet="images/destination/background-destination-mobile.jpg"
          />
          <source
            media="(max-width: 768px )"
            srcSet="images/destination/background-destination-tablet.jpg"
          />
          <img
            src={`images/destination/background-destination-desktop.jpg`}
            alt=""
          />
        </picture>
      </PageBackImgContainer>
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
