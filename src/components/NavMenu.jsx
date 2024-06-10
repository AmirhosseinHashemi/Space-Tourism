import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledNavMenu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  min-height: 100dvh;

  background-color: rgba(255, 255, 255, 4%);
  backdrop-filter: blur(81.5px);
  padding: 11.8rem 0 0 3.2rem;
  z-index: 10;

  display: none;

  @media only screen and (min-width: 768px) {
    position: absolute;
    display: block;
    min-height: auto;
    width: auto;
    padding-block: 3.9rem;
    padding-inline: 4.8rem 4.6rem;
  }

  @media only screen and (min-width: 1024px) {
    position: relative;
    padding-inline: 12.3rem 16.5rem;
    margin-right: -5.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  color: var(--clr-white);

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 3.7rem;
  }

  @media only screen and (min-width: 1024px) {
    gap: 4.8rem;
  }
`;

const Item = styled.li`
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-md);

  & span {
    font-weight: 700;
  }

  &.active::after {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    content: "";
    width: 0.4rem;
    height: 3.1rem;
    background-color: var(--clr-white);
  }

  @media only screen and (min-width: 768px) {
    font-size: var(--fs-xs);
    letter-spacing: 0.236rem;

    & span {
      display: none;
    }

    &.active::after {
      top: auto;
      bottom: -3.9rem;
      right: 0;
      left: 0;

      width: auto;
      height: 0.3rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    font-size: var(--fs-sm);
    letter-spacing: var(--letter-spacing-md);

    & span {
      display: inline;
    }

    &::after {
      position: absolute;
      content: "";
      bottom: -3.9rem;
      right: 100%;
      left: 0;

      transition: all 0.3s;

      height: 0.3rem;
      background-color: rgba(255, 255, 255, 50.21%);
    }

    &:hover&::after {
      right: 0%;
    }
  }
`;

function NavMenu({isNavOpen}) {
  return (
    <StyledNavMenu className={`${isNavOpen ? "open" : ""}`}>
      <Ul>
        <Item>
          <StyledNavLink to="home">
            <span>00</span> Home
          </StyledNavLink>
        </Item>

        <Item>
          <StyledNavLink to="destination">
            <span>01</span> Destination
          </StyledNavLink>
        </Item>

        <Item>
          <StyledNavLink to="crew">
            <span>02</span> Crew
          </StyledNavLink>
        </Item>

        <Item>
          <StyledNavLink to="technology">
            <span>03</span> Technology
          </StyledNavLink>
        </Item>
      </Ul>
    </StyledNavMenu>
  );
}

export default NavMenu;
