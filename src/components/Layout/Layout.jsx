import React from "react";
import { MainWrap, ContentWrap } from "./Layout.element";

function Layout({ children }) {
  return (
    <>
      <MainWrap>
        <ContentWrap>{children}</ContentWrap>
      </MainWrap>
    </>
  );
}

export default Layout;
