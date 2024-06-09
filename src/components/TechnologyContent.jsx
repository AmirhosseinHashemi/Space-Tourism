import styled from "styled-components";
import useTerm from "../hooks/useTerm";
import {TERMINOLOGIES} from "../utils/config";

const StyledTechnologyContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechStep = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  & button {
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid rgba(255, 255, 255, 25%);
    border-radius: 50%;

    font-family: var(--ff-bellefair);
    font-size: 1.6rem;
    color: var(--clr-white);
  }

  & button.active {
    border-color: var(--clr-white);
    background-color: var(--clr-white);
    color: var(--clr-primary-1);
  }

  @media only screen and (min-width: 768px) {
    & button {
      width: 5.8rem;
      height: 5.8rem;
      font-size: 2.4rem;
    }
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

  @media only screen and (min-width: 768px) {
    align-self: stretch;
    margin-inline: -3.9rem;
    margin-block: 6rem 5.6rem;

    & img {
      height: 31rem;
    }
  }
`;

const Div = styled.div`
  text-align: center;

  @media only screen and (min-width: 768px) {
    max-width: 45.8rem;
  }
`;

const Terminology = styled.h3`
  font-family: var(--ff-barlow-condensed);
  font-size: 1.4rem;
  letter-spacing: 0.236rem;
  text-transform: uppercase;
  color: var(--clr-primary-2);

  margin-block: 2.6rem 0.9rem;

  @media only screen and (min-width: 768px) {
    font-size: var(--fs-sm);
    letter-spacing: var(--letter-spacing-md);
    margin-block: 4.4rem 1.6rem;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  color: var(--clr-white);
  text-transform: uppercase;

  margin-bottom: 1.6rem;

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--clr-primary-2);

  @media only screen and (min-width: 768px) {
    font-size: var(--fs-sm);
    line-height: 2.8rem;
  }
`;

function TechnologyContent() {
  const {
    displayedTerm: {word, description, id, image_land, image_port},
    changeTerm,
  } = useTerm();

  return (
    <StyledTechnologyContent>
      <TechImage>
        <img src={image_land} alt="" />
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
    </StyledTechnologyContent>
  );
}

export default TechnologyContent;
