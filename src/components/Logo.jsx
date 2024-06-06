import styled from "styled-components";

const StyledLogo = styled.img`
  width: 4rem;
  height: 4rem;

  @media only screen and (min-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

function Logo() {
  return <StyledLogo src="images/shared/logo.svg" alt="logo"></StyledLogo>;
}

export default Logo;
