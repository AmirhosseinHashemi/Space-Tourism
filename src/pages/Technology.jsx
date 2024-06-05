import styled from "styled-components";
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
  return (
    <StyledTechnology>
      <TravelStep>
        <span>03</span> SPACE LAUNCH 101
      </TravelStep>

      <TechnologyContent>
        <TechImage>
          <img
            src="images/technology/image-launch-vehicle-landscape.jpg"
            alt=""
          />
        </TechImage>
        <TechStep>
          <button className="active">1</button>
          <button className="">2</button>
          <button className="">3</button>
        </TechStep>
        <Div>
          <Terminology>THE TERMONOLOGY ...</Terminology>
          <Title>LAUNCH VEHICLE</Title>
          <Description>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </Description>
        </Div>
      </TechnologyContent>
    </StyledTechnology>
  );
}

export default Technology;
