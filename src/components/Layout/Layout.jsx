import React from "react";
import { MainWrap, ContentWrap } from "./Layout.element";

function Layout({ children, noPadding }) {
  return (
    <>
      <MainWrap noPadding={noPadding}>
        <ContentWrap>{children}</ContentWrap>
      </MainWrap>
    </>
  );
}

export default Layout;
