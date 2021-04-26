import React, { useState } from "react";
import {
  ActivityModal,
  ImageContainer,
  ModalImage,
  PhotoCounterWrapper,
  PhotoCounterNum,
  CloseBox,
  ArrowBtn,
  CloseIcon,
} from "./Modal.elements";
import ActivitiesData from "../../assets/ActivitiesData";

function Modal({ ModalIsOpen, toggleModal, slides }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      {ModalIsOpen ? (
        <ActivityModal>
          <PhotoCounterWrapper>
            <CloseBox onClick={() => toggleModal((prev) => !prev)}>
              <CloseIcon mobile>
                <i className="chevron left icon" />
              </CloseIcon>
              <CloseIcon desktop>
                <p>X &nbsp; Chiudi</p>
              </CloseIcon>
            </CloseBox>

            <PhotoCounterNum center mobile desktop>
              {current + 1}&nbsp;/&nbsp;{slides.length}
            </PhotoCounterNum>
          </PhotoCounterWrapper>

          <ArrowBtn mobile left onClick={prevSlide}>
            <i className="small chevron left icon" />
          </ArrowBtn>

          {ActivitiesData.map((activity, index) => {
            const activitiesKeys = `${activity}-${index}`;

            return (
              <ImageContainer key={activitiesKeys}>
                {index === current && (
                  <ModalImage src={activity.image} alt="no-image" />
                )}
              </ImageContainer>
            );
          })}

          <PhotoCounterWrapper />

          <ArrowBtn mobile right onClick={nextSlide}>
            <i className="small chevron right icon" />
          </ArrowBtn>
        </ActivityModal>
      ) : null}
    </>
  );
}

export default Modal;
