import styled from "styled-components";
import useTerm from "../hooks/useTerm";
import {TERMINOLOGIES} from "../utils/config";

import TravelStep from "../components/TravelStep";

const StyledTechnology = styled.section`
  padding-bottom: 5.4rem;
`;

const TechnologyContent = styled.article`
  display: flex;
  flex-direction: column;
`;

const TechStep = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  font-size: 1.6rem;

  & button {
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid rgba(255, 255, 255, 25%);
    border-radius: 50%;

    font-family: var(--ff-bellefair);
    color: var(--clr-white);
  }

  & button.active {
    border-color: var(--clr-white);
    background-color: var(--clr-white);
    color: var(--clr-primary-1);
  }
`;

const TechImage = styled.div`
  min-width: 32rem;
  margin-inline: -2.4rem;
  margin-block: 3.2rem 3.4rem;

  & img {
    object-fit: cover;
    object-position: center;
    height: 17rem;
  }
`;

const Div = styled.div`
  text-align: center;
`;

const Terminology = styled.h3`
  font-family: var(--ff-barlow-condensed);
  font-size: 1.4rem;
  letter-spacing: 0.236rem;
  text-transform: uppercase;
  color: var(--clr-primary-2);

  margin-block: 2.6rem 0.9rem;
`;

const Title = styled.h3`
  font-size: 2.4rem;
  color: var(--clr-white);
  text-transform: uppercase;

  margin-bottom: 1.6rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--clr-primary-2);
`;

function Technology() {
  const {
    displayedTerm: {word, description, id, image},
    changeTerm,
  } = useTerm();

  return (
    <StyledTechnology>
      <TravelStep>
        <span>03</span> SPACE LAUNCH 101
      </TravelStep>

      <TechnologyContent>
        <TechImage>
          <img src={image} alt="" />
        </TechImage>
        <TechStep>
          {TERMINOLOGIES.map((term) => (
            <button
              key={term.id}
              onClick={() => changeTerm(term.id)}
              className={`${id === term.id ? "active" : ""}`}
            >
              {term.id + 1}
            </button>
          ))}
        </TechStep>
        <Div>
          <Terminology>THE TERMONOLOGY ...</Terminology>
          <Title>{word}</Title>
          <Description>{description}</Description>
        </Div>
      </TechnologyContent>
    </StyledTechnology>
  );
}

export default Technology;
