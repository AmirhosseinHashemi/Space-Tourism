import styled from "styled-components";

import TravelStep from "../components/TravelStep";
import TechnologyContent from "../components/TechnologyContent";
import PageBackImgContainer from "../components/PageBackImgContainer";

const StyledTechnology = styled.section`
  padding-bottom: 5.4rem;
`;

function Technology() {
  return (
    <StyledTechnology>
      <PageBackImgContainer>
        <picture>
          <source
            media="(max-width: 425px )"
            srcSet="images/technology/background-technology-mobile.jpg"
          />
          <source
            media="(max-width: 768px )"
            srcSet="images/technology/background-technology-tablet.jpg"
          />
          <img
            src={`images/technology/background-technology-desktop.jpg`}
            alt=""
          />
        </picture>
      </PageBackImgContainer>
      <TravelStep>
        <span>03</span> SPACE LAUNCH 101
      </TravelStep>
      <TechnologyContent />
    </StyledTechnology>
  );
}

export default Technology;
