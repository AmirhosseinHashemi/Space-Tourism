import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 37.5rem;
  margin-inline: auto;
  padding-inline: 2.4rem;

  @media only screen and (min-width: 768px) {
    max-width: 76.8rem;
    padding-inline: 3.9rem;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 144rem;
    padding-inline: 5.5rem;
  }
`;

export default Container;
