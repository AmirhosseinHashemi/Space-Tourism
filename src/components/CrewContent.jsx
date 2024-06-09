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

  @media only screen and (min-width: 1024px) {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0;

    margin-top: 15.4rem;
  }

  @media only screen and (min-width: 1440px) {
    padding: 0 11.4rem;
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

  @media only screen and (min-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: -9.4rem;
  }
`;

const Img = styled.img`
  width: 17.712rem;
  height: 22.2rem;
  z-index: -1;

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

  @media only screen and (min-width: 1440px) {
    ${(props) =>
      props.id === 0 &&
      css`
        width: 56.807rem;
        height: 71.2rem;
      `}

    ${(props) =>
      props.id === 1 &&
      css`
        width: 45.344rem;
        height: 65.4rem;
      `}

      ${(props) =>
      props.id === 2 &&
      css`
        width: 55.439rem;
        height: 68.1rem;
      `}

      ${(props) =>
      props.id === 3 &&
      css`
        width: 61.557rem;
        height: 60.7rem;
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

  @media only screen and (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    max-width: none;

    & div:first-of-type {
      ${(props) =>
        props["data-article-num"] === 2
          ? css`
              margin-top: 8.8rem;
            `
          : css`
              margin-top: 12rem;
            `}
    }
  }

  /* @media only screen and (min-width: 1200px) {
    max-width: none;
  } */
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

  @media only screen and (min-width: 1024px) {
    font-size: var(--fs-lg);
    margin-bottom: 1.5rem;
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

  @media only screen and (min-width: 1024px) {
    font-size: var(--fs-xl);
    margin-bottom: 2.7rem;
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

  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
    line-height: 3.2rem;
    max-width: 44.4rem;
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
