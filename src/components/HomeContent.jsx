import styled from "styled-components";

const StyledHomeContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  text-align: center;
  color: var(--clr-primary-2);

  h2 {
    font-size: 8rem;
    line-height: 10rem;
    color: var(--clr-white);
  }

  p:first-child {
    font-family: var(--ff-barlow-condensed);
    font-size: var(--fs-sm);
    letter-spacing: var(--letter-spacing-md);
  }

  p:last-child {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

function HomeContent() {
  return (
    <StyledHomeContent>
      <p>SO, YOU WANT TO TRAVEL TO</p>
      <h2>SPACE</h2>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </StyledHomeContent>
  );
}

export default HomeContent;
