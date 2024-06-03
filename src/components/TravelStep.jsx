import styled from "styled-components";

const TravelStep = styled.h2`
  font-family: var(--ff-barlow-condensed);
  font-size: var(--fs-sm);
  font-weight: 400;
  letter-spacing: var(--letter-spacing-md);
  text-transform: uppercase;
  text-align: center;
  color: var(--clr-white);

  & span {
    font-weight: 700;
    color: rgba(255, 255, 255, 25%);
    margin-right: 1.8rem;
  }
`;

export default TravelStep;
