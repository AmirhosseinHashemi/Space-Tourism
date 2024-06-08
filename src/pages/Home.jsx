import styled from "styled-components";

import ExploreButton from "../components/ExploreButton";
import HomeContent from "../components/HomeContent";
import PageBackImgContainer from "../components/PageBackImgContainer";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.1rem;

  padding-block: 2.4rem 4.8rem;

  @media only screen and (min-width: 768px) {
    padding-block: 10.6rem 9rem;
    gap: 15.6rem;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    padding-block: 25.1rem 13.1rem;
  }
`;

function Home() {
  return (
    <StyledHome>
      <PageBackImgContainer>
        <picture>
          <source
            media="(max-width: 425px )"
            srcSet="images/home/background-home-mobile.jpg"
          />
          <source
            media="(max-width: 768px )"
            srcSet="images/home/background-home-tablet.jpg"
          />
          <img src={`images/home/background-home-desktop.jpg`} alt="" />
        </picture>
      </PageBackImgContainer>
      <HomeContent />
      <ExploreButton />
    </StyledHome>
  );
}

export default Home;
