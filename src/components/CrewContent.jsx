import styled from "styled-components";
import useCrew from "../hooks/useCrew";

import {CREW_LENGTH} from "../utils/config";

import CircleDots from "./CircleDots";
import Line from "./Line";

const StyledCrewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const CrewImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.2rem;

  & img {
    width: 17.712rem;
    height: 22.2rem;
  }

  & div {
    margin: 0;
  }
`;

const CrewArticle = styled.article`
  text-align: center;
`;

const JobTitle = styled.h3`
  font-size: var(--fs-sm);
  letter-spacing: 0;
  color: rgba(255, 255, 255, 49.51%);
  text-transform: uppercase;

  margin-block: 3.2rem 0.8rem;
`;

const FullName = styled.h3`
  font-size: 2.4rem;
  letter-spacing: 0;
  color: var(--clr-white);
  text-transform: uppercase;

  margin-bottom: 1.6rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0;
  color: var(--clr-primary-2);
`;

function CrewContent() {
  const {
    displayedCrew: {id, fullName, image, alt, job, description},
    changeCrew,
  } = useCrew();

  return (
    <StyledCrewContent>
      <CrewImage>
        <img src={image} alt={alt} />
        <Line />
      </CrewImage>

      <CrewArticle>
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
