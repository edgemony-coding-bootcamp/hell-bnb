import {
  ActivityModal,
  ImageContainer,
  ModalImage,
  PhotoCounterWrapper,
  PhotoCounterNum,
  CloseBox,
  ArrowBtn,
} from './Modal.elements';

import { useState } from 'react';
import { ActivitiesData } from '../../assets/ActivitiesData';

function Modal({ isOpen, setIsOpen, slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
      {isOpen ? (
        <ActivityModal isOpen={isOpen}>
          <PhotoCounterWrapper>
            <CloseBox onClick={() => setIsOpen((prev) => !prev)}>
              <PhotoCounterNum mobile grey>
                <i class="chevron left icon"></i>
              </PhotoCounterNum>
              <PhotoCounterNum desktop close grey>
                X &nbsp; Close
              </PhotoCounterNum>
            </CloseBox>

            <PhotoCounterNum center mobile desktop>
              {current + 1} &nbsp; / &nbsp; {slides.length}
            </PhotoCounterNum>
          </PhotoCounterWrapper>

          <ArrowBtn mobile left onClick={prevSlide}>
            <i class="chevron left icon"></i>
          </ArrowBtn>

          {ActivitiesData.map((activity, index) => {
            return (
              <ImageContainer key={index}>
                {index === current && (
                  <ModalImage src={activity.image} alt="no-image" />
                )}
              </ImageContainer>
            );
          })}

          <ArrowBtn mobile right onClick={nextSlide}>
            <i class="chevron right icon"></i>
          </ArrowBtn>
        </ActivityModal>
      ) : null}
    </>
  );
}

export default Modal;
