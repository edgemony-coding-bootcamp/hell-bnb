import React from "react";
import { ModalLayout, ModalContainer } from "./UpSlideModal.elements";

export default function UpSlideModal({ children, modalOpen }) {
  return (
    <ModalLayout modalOpen={modalOpen}>
      <ModalContainer>
        <header>
          <button type="button">freccia sinistra</button>
        </header>
        <main>{children}</main>
      </ModalContainer>
    </ModalLayout>
  );
}
