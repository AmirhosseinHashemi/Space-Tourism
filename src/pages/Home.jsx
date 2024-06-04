import styled from "styled-components";
import ExploreButton from "../components/ExploreButton";
import HomeContent from "../components/HomeContent";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.1rem;

  padding-block: 2.4rem 4.8rem;
`;

function Home() {
  return (
    <StyledHome>
      <HomeContent />
      <ExploreButton />
    </StyledHome>
  );
}

export default Home;
