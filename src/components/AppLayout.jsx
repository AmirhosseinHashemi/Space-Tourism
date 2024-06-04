import styled, {css} from "styled-components";
import {Outlet, useHref} from "react-router-dom";

import Header from "./Header";
import Container from "./Container";
import Main from "./Main";

const StyledAppLayout = styled.div`
  min-height: 100dvh;
  background-repeat: no-repeat;
  background-position: top center;

  ${(prop) =>
    prop["data-page"] === "home" &&
    css`
      background-image: url(images/home/background-home-mobile.jpg);
    `}

  ${(prop) =>
    prop["data-page"] === "destination" &&
    css`
      background-image: url(images/destination/background-destination-mobile.jpg);
    `}

    ${(prop) =>
    prop["data-page"] === "crew" &&
    css`
      background-image: url(images/crew/background-crew-mobile.jpg);
    `}

    ${(prop) =>
    prop["data-page"] === "technology" &&
    css`
      background-image: url(images/technology/background-technology-mobile.jpg);
    `}
`;

function AppLayout() {
  const currentUrl = useHref();
  const currentPage = currentUrl.slice(1).toLowerCase();

  return (
    <StyledAppLayout data-page={currentPage}>
      <Header />
      <Main>
        <Container>{<Outlet />}</Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
