import styled from "styled-components";

const PageBackImgContainer = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  z-index: -1;

  & picture {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  & img {
    height: 100%;
  }
`;

export default PageBackImgContainer;
