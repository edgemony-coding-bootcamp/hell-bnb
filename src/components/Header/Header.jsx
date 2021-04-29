import React from "react";
import { HeaderContainer, LogoHeading, HeaderLink } from "./Header.elements";
import airbnbLogo from "../../assets/images/airbnb_logo.svg";
import Layout from "../Layout/Layout";
import { WrapHeader } from "../Layout/Layout.element";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <Layout noPadding="noPadding">
          <WrapHeader>
            <img src={airbnbLogo} alt="hellbnb logo" width="50px" />
            <LogoHeading>hellbnb</LogoHeading>
          </WrapHeader>
        </Layout>
      </HeaderLink>
    </HeaderContainer>
  );
}

export default Header;
