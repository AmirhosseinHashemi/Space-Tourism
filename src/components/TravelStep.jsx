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
    margin-right: 1.6rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
    margin-top: 4rem;
    letter-spacing: 0.338rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: var(--fs-md);
    margin-top: 3.6rem;
    letter-spacing: 0.472rem;
  }

  @media only screen and (min-width: 1440px) {
    margin-left: 11.4rem;
  }
`;

export default TravelStep;
