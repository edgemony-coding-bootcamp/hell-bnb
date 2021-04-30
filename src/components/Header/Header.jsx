import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer, LogoHeading, HeaderLink } from "./Header.elements";
import airbnbLogo from "../../assets/images/airbnb_logo.svg";
import Layout from "../Layout/Layout";
import { WrapHeader } from "../Layout/Layout.element";
import useWindowDimensions from "../CarouselActivities/WindowSize";

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <Layout noPadding="noPadding">
          <WrapHeader>
            {useWindowDimensions().width > 743 || location.pathname === "/" ? (
              <img src={airbnbLogo} alt="hellbnb logo" width="50px" />
            ) : (
              <i className="black chevron left icon" />
            )}
            <LogoHeading>hellbnb</LogoHeading>
          </WrapHeader>
        </Layout>
      </HeaderLink>
    </HeaderContainer>
  );
}

export default Header;
