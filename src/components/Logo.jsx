import styled from "styled-components";

const StyledLogo = styled.img`
  width: 4rem;
  height: 4rem;
`;

function Logo() {
  return <StyledLogo src="images/shared/logo.svg" alt="logo"></StyledLogo>;
}

export default Logo;
