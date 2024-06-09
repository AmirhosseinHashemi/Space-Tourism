import {useState} from "react";
import styled from "styled-components";

import Container from "./Container";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const StyledHeader = styled.header`
  position: relative;
  padding-block: 2.4rem;

  @media only screen and (min-width: 1024px) {
    padding-block: 4rem;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1440px) {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      left: 11.2rem;

      width: 47.3rem;
      height: 0.1rem;
      background-color: #383b4b;
      z-index: 10;
    }
  }
`;

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((currentState) => !currentState);
  };

  return (
    <StyledHeader>
      <Container>
        <Div>
          <Logo />
          <HamburgerMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />
          <NavMenu isNavOpen={isNavOpen} />
        </Div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
