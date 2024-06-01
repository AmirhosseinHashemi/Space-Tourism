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
`;

function ExploreButton() {
  return <StyledExploreButton>EXPLORE</StyledExploreButton>;
}

export default ExploreButton;
