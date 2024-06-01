import styled from "styled-components";

import Container from "./Container";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const StyledHeader = styled.header``;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Div>
          <Logo />
          <HamburgerMenu />
        </Div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
