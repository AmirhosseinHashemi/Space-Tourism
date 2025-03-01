import styled from "styled-components";

const StyledHamburgerMenu = styled.button`
  width: 2.4rem;
  height: 2.1rem;
  z-index: 11;
  transition: all 0.5s;

  &.setPos {
    position: absolute;
    top: 3.395rem;
    right: 2.645rem;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function HamburgerMenu({isNavOpen, toggleNav}) {
  return (
    <StyledHamburgerMenu
      aria-label={`${isNavOpen ? "hamburger" : "close"}`}
      onClick={toggleNav}
      className={`${isNavOpen ? "setPos" : ""}`}
    >
      {isNavOpen ? (
        // hamburger icon
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      ) : (
        // close icon
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      )}
    </StyledHamburgerMenu>
  );
}

export default HamburgerMenu;
