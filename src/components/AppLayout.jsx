import styled from "styled-components";
import {Outlet} from "react-router-dom";

import Header from "./Header";
import Container from "./Container";
import Main from "./Main";

const StyledAppLayout = styled.div`
  min-height: 100dvh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>{<Outlet />}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
