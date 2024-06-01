import styled from "styled-components";
import {Outlet} from "react-router-dom";

import Container from "./Container";
import Main from "./Main";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

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

function AppLayout() {
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
        <Container>{<Outlet />}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
