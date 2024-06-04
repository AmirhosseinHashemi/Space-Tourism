import styled from "styled-components";
import {useCrew} from "../contexts/CrewContext";

import {CREW_LENGTH} from "../utils/config";
import TravelStep from "../components/TravelStep";
import Line from "../components/Line";

const StyledCrew = styled.section`
  padding-bottom: 5.8rem;
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

const CrewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const CrewArticle = styled.article`
  text-align: center;
`;

const CircleDot = styled.div`
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

function Crew() {
  const {
    displayedCrew: {id, fullName, image, alt, job, description},
    changeCrew,
  } = useCrew();

  return (
    <StyledCrew>
      <TravelStep>
        <span>02</span> MEET YOUR CREW
      </TravelStep>

      <CrewContent>
        <CrewImage>
          <img src={image} alt={alt} />
          <Line />
        </CrewImage>

        <CrewArticle>
          <CircleDot>
            {Array.from({length: CREW_LENGTH}, (_, index) => index).map(
              (val) => (
                <button
                  key={val}
                  onClick={() => changeCrew(val)}
                  className={`dot ${id === val && "active"}`}
                  aria-label="a clickable, circle dot"
                ></button>
              )
            )}
          </CircleDot>

          <JobTitle>{job}</JobTitle>
          <FullName>{fullName}</FullName>
          <Description>{description}</Description>
        </CrewArticle>
      </CrewContent>
    </StyledCrew>
  );
}

export default Crew;
