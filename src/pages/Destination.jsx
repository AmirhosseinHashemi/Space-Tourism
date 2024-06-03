import {Link, useSearchParams} from "react-router-dom";
import styled from "styled-components";

import TravelStep from "../components/TravelStep";

const StyledSection = styled.section`
  margin-top: -2.4rem;
`;

const PlanetImg = styled.img`
  width: 17rem;
  height: 17rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  margin-top: 3.2rem;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: var(--fs-xs);
  font-weight: 400;
  color: var(--clr-primary-2);
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  gap: 2.6rem;
`;

const Item = styled.li`
  position: relative;
`;

const StyledLink = styled(Link)`
  font-size: var(--fs-xs);
  letter-spacing: 0.236rem;
  text-transform: uppercase;

  &.active {
    color: var(--clr-white);
  }

  &.active::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: -0.8rem;

    height: 0.3rem;
    background-color: var(--clr-white);
  }
`;

const Title = styled.h3`
  font-size: var(--fs-xl);
  letter-spacing: 0;
  color: var(--clr-white);
  text-transform: uppercase;

  margin-block: 2rem 0.1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #383b4b;
  margin-block: 3.2rem;
`;

const Distance = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  font-family: var(--ff-barlow-condensed);
  letter-spacing: 0.236rem;
  text-transform: uppercase;

  margin-bottom: 3.2rem;

  & span {
    font-family: var(--ff-bellefair);
    font-size: var(--fs-md);
    letter-spacing: 0;
    color: var(--clr-white);
  }
`;

const Duration = styled(Distance)`
  margin-bottom: 0;
`;

function Destination() {
  const [searchParams] = useSearchParams();
  const planet = searchParams.get("planet") || "moon";

  return (
    <StyledSection>
      <TravelStep>
        <span>01</span> PICK YOUR DESTINATION
      </TravelStep>

      <Div>
        <PlanetImg src={`images/destination/image-${planet}.webp`} />
        <Article>
          <nav>
            <Ul>
              <Item>
                <StyledLink
                  to="?planet=moon"
                  className={`${planet === "moon" ? "active" : ""}`}
                >
                  moon
                </StyledLink>
              </Item>
              <Item>
                <StyledLink
                  to="?planet=mars"
                  className={`${planet === "mars" ? "active" : ""}`}
                >
                  mars
                </StyledLink>
              </Item>
              <Item>
                <StyledLink
                  to="?planet=europa"
                  className={`${planet === "europa" ? "active" : ""}`}
                >
                  europa
                </StyledLink>
              </Item>
              <Item>
                <StyledLink
                  to="?planet=titan"
                  className={`${planet === "titan" ? "active" : ""}`}
                >
                  titan
                </StyledLink>
              </Item>
            </Ul>
          </nav>
          <Title>{planet}</Title>
          <Description>
            {planet === "moon" &&
              `See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.`}

            {planet === "mars" &&
              `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`}

            {planet === "europa" &&
              `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`}

            {planet === "titan" &&
              `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`}
          </Description>
          <Line />

          <Distance>
            AVG. DISATANCE
            <span>
              {planet === "moon" && "384,400 km"}
              {planet === "mars" && "225 mil. km"}
              {planet === "europa" && "625 mil. km"}
              {planet === "titan" && "1.6 bill. km"}
            </span>
          </Distance>

          <Duration>
            EST. TRAVEL TIME
            <span>
              {planet === "moon" && "3 days"}
              {planet === "mars" && "9 months"}
              {planet === "europa" && "3 years"}
              {planet === "titan" && "7 Years"}
            </span>
          </Duration>
        </Article>
      </Div>
    </StyledSection>
  );
}

export default Destination;
