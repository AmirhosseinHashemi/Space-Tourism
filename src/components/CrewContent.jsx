import styled, {css} from "styled-components";
import useCrew from "../hooks/useCrew";

import {CREW_LENGTH} from "../utils/config";

import CircleDots from "./CircleDots";
import Line from "./Line";

const StyledCrewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 3.2rem;

  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: column-reverse;
    gap: 4rem;
    margin-top: 6rem;
  }
`;

const CrewImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    & div {
      display: none;
    }
  }
`;

const Img = styled.img`
  width: 17.712rem;
  height: 22.2rem;

  @media only screen and (min-width: 768px) {
    ${(props) =>
      props.id === 0 &&
      css`
        width: 45.637rem;
        height: 57.2rem;
      `}

    ${(props) =>
      props.id === 1 &&
      css`
        width: 36.885rem;
        height: 53.2rem;
      `}

      ${(props) =>
      props.id === 2 &&
      css`
        width: 43.309rem;
        height: 53.2rem;
      `}

      ${(props) =>
      props.id === 3 &&
      css`
        width: 53.951rem;
        height: 53.2rem;
      `}
  }
`;

const CrewArticle = styled.article`
  text-align: center;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;

    ${(props) =>
      props["data-article-num"] === 0 &&
      css`
        max-width: 45.8rem;
      `}

    ${(props) =>
      props["data-article-num"] === 1 &&
      css`
        max-width: 52rem;
      `}

    ${(props) =>
      props["data-article-num"] === 2 &&
      css`
        max-width: 59.2rem;
      `}

    ${(props) =>
      props["data-article-num"] === 3 &&
      css`
        max-width: 53.6rem;
      `}

    & div:first-of-type {
      order: 1;
      margin-top: 4rem;
    }
  }
`;

const JobTitle = styled.h3`
  font-size: var(--fs-sm);
  letter-spacing: 0;
  color: rgba(255, 255, 255, 49.51%);
  text-transform: uppercase;

  margin-block: 3.2rem 0.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.4rem;
    margin-top: 0;
  }
`;

const FullName = styled.h3`
  font-size: 2.4rem;
  letter-spacing: 0;
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
  letter-spacing: 0;
  color: var(--clr-primary-2);

  @media only screen and (min-width: 768px) {
    font-size: var(--fs-sm);
    line-height: 2.8rem;
  }
`;

function CrewContent() {
  const {
    displayedCrew: {id, fullName, image, alt, job, description},
    changeCrew,
  } = useCrew();

  return (
    <StyledCrewContent>
      <CrewImage>
        <Img src={image} alt={alt} id={id} />
        <Line />
      </CrewImage>

      <CrewArticle data-article-num={id}>
        <CircleDots
          length={CREW_LENGTH}
          render={(_, index) => (
            <button
              key={index}
              onClick={() => changeCrew(index)}
              className={`dot ${id === index && "active"}`}
              aria-label="a clickable, circle dot"
            ></button>
          )}
        />
        <JobTitle>{job}</JobTitle>
        <FullName>{fullName}</FullName>
        <Description>{description}</Description>
      </CrewArticle>
    </StyledCrewContent>
  );
}

export default CrewContent;
