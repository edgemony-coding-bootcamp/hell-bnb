import React, { useState, useEffect } from "react";
import {
  ActivityModal,
  ImageContainer,
  ModalImage,
  CounterWrapper,
  PhotoCounterNum,
  CloseBox,
  ArrowBtn,
  CloseIcon,
} from "./Modal.elements";
import ActivitiesData from "../../assets/ActivitiesData";

function Modal({ ModalIsOpen, toggleModal, slides }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function getPhotoNumber(index) {
    console.log(index);
    setCurrent(index);
  }
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
          <CounterWrapper>
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
          </CounterWrapper>
          {current === 0 ? (
            <ArrowBtn none />
          ) : (
            <ArrowBtn mobile left onClick={prevSlide}>
              <i className="small chevron left icon" />
            </ArrowBtn>
          )}

          <ImageContainer id="wrapImage" draggable>
            {ActivitiesData.map((activity, index) => {
              const activitiesKeys = `${activity}-${index}`;
              return (
                <>
                  {widthWindow < 768 ? (
                    <ModalImage
                      key={activitiesKeys}
                      src={activity.image}
                      alt="no-image"
                      draggable
                      onTouchMoveCapture={() => getPhotoNumber(index)}
                    />
                  ) : (
                    <>
                      {index === current && (
                        <ModalImage src={activity.image} alt="no-image" />
                      )}
                    </>
                  )}
                </>
              );
            })}
          </ImageContainer>
          <CounterWrapper />
          {current === length - 1 ? (
            <ArrowBtn none />
          ) : (
            <ArrowBtn mobile right onClick={nextSlide}>
              <i className="small chevron right icon" />
            </ArrowBtn>
          )}
        </ActivityModal>
      ) : null}
    </>
  );
}

export default Modal;
