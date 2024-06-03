import {useState} from "react";
import styled from "styled-components";

import Container from "./Container";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const StyledHeader = styled.header`
  position: relative;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
