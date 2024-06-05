import {Link, useSearchParams} from "react-router-dom";
import styled from "styled-components";
import {DEFAULT_DISPLAYED_PLANET, PLANETS} from "../utils/config";

import Line from "./Line";

const PlanetImage = styled.img`
  width: 17rem;
  height: 17rem;
`;

const StyledPlanetArticle = styled.article`
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

function PlanetArticle() {
  const [searchParams] = useSearchParams();
  const displayedPlanet =
    searchParams.get("planet") || DEFAULT_DISPLAYED_PLANET;

  const {description, distance, duration, image} = PLANETS.find(
    (planet) => planet.name === displayedPlanet
  );

  return (
    <>
      <PlanetImage src={image} />
      <StyledPlanetArticle>
        <nav>
          <Ul>
            {PLANETS.map((planet) => (
              <Item key={planet.id}>
                <StyledLink
                  to={`?planet=${planet.name}`}
                  className={`${
                    displayedPlanet === planet.name ? "active" : ""
                  }`}
                >
                  {planet.name}
                </StyledLink>
              </Item>
            ))}
          </Ul>
        </nav>
        <Title>{displayedPlanet}</Title>
        <Description>{description}</Description>
        <Line />
        <Distance>
          AVG. DISATANCE
          <span>{distance}</span>
        </Distance>

        <Duration>
          EST. TRAVEL TIME
          <span>{duration}</span>
        </Duration>
      </StyledPlanetArticle>
    </>
  );
}

export default PlanetArticle;
