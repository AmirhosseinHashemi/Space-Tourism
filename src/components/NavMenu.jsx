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
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  color: var(--clr-white);
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
