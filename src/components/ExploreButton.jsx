import styled from "styled-components";

const StyledExploreButton = styled.button`
  font-family: var(--ff-bellefair);
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  text-align: center;
  color: var(--clr-primary-1);

  width: 15rem;
  height: 15rem;
  background-color: var(--clr-white);
  border-radius: 50%;

  @media only screen and (min-width: 768px) {
    width: 24.2rem;
    height: 24.2rem;

    font-size: var(--fs-lg);
    letter-spacing: 0.2rem;
  }

  @media only screen and (min-width: 1024px) {
    transition: all 0.3s;
    width: 27.4rem;
    height: 27.4rem;

    &:hover {
      box-shadow: 0 0 0 8.8rem rgba(255, 255, 255, 10.36%);
    }
  }
`;

function ExploreButton() {
  return <StyledExploreButton>EXPLORE</StyledExploreButton>;
}

export default ExploreButton;
