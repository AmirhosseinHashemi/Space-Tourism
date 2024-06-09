import styled from "styled-components";

const StyledCircleDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  & .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 17.44%);
  }

  & .dot.active {
    background-color: var(--clr-white);
  }

  @media only screen and (min-width: 1024px) {
    & .dot {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

function CircleDots({length, render}) {
  return <StyledCircleDots>{Array.from({length}, render)}</StyledCircleDots>;
}

export default CircleDots;
