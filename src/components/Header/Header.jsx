import React from "react";
import { HeaderContainer, LogoHeading, HeaderLink } from "./Header.elements.js";
import airbnbLogo from "../../assets/images/airbnb_logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <img src={airbnbLogo} alt="hellbnb logo" height="100%" />
        <LogoHeading>hellbnb</LogoHeading>
      </HeaderLink>
    </HeaderContainer>
  );
}

export default Header;
