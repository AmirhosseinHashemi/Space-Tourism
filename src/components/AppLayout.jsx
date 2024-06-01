import styled from "styled-components";

import Main from "./Main";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Container from "./Container";

const StyledAppLayout = styled.div`
  min-height: 100dvh;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(images/home/background-home-mobile.jpg);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function AppLayout({children}) {
  return (
    <StyledAppLayout>
      <Header>
        <Container>
          <Div>
            <Logo />
            <HamburgerMenu />
          </Div>
        </Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
