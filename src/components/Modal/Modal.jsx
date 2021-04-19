import {
  ActivityModal,
  ImageContainer,
  ModalImage,
  PhotoCounterWrapper,
  PhotoCounterNum,
  CloseBox,
} from './Modal.elements';

function Modal({ isOpen, totalPhoto, counter, setIsOpen }) {
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
              1{counter} / 16{totalPhoto}
            </PhotoCounterNum>
          </PhotoCounterWrapper>
          <ImageContainer>
            <ModalImage
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1740697-poster/original/f3c99a17-0b54-4862-9a3c-e1b681968765.jpeg?im_w=320"
              alt="no-image"
            />
          </ImageContainer>
        </ActivityModal>
      ) : null}
    </>
  );
}

export default Modal;
