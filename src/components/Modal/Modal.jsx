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

  console.log(current);

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
                &#60;
              </PhotoCounterNum>
              <PhotoCounterNum desktop grey>
                X Close
              </PhotoCounterNum>
            </CloseBox>

            <PhotoCounterNum center mobile desktop>
              {current} &nbsp; / &nbsp; {slides.length}
            </PhotoCounterNum>
          </PhotoCounterWrapper>

          <ArrowBtn mobile left onClick={prevSlide}>
            {' '}
            &#x21E6;{' '}
          </ArrowBtn>

          {ActivitiesData.map((activity, index) => {
            return (
              <ImageContainer
                classname={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <ModalImage src={activity.image} alt="no-image" />
                )}
              </ImageContainer>
            );
          })}

          <ArrowBtn mobile right onClick={nextSlide}>
            {' '}
            &#x21E8;{' '}
          </ArrowBtn>
        </ActivityModal>
      ) : null}
    </>
  );
}

export default Modal;
