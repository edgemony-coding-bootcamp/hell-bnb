import {
  Modal_Wrapper,
  Background,
  CloseModalBtn,
  Modal_Image,
} from './Modal.elements'

// function Modal({ isOpen }) {
//   return <>{isOpen ? <Modal_Wrapper /> : null}</>
// }

// export default Modal

function Modal({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen ? (
        <Background>
          <Modal_Wrapper isOpen={isOpen}>
            <Modal_Image />
            <CloseModalBtn onClick={() => setIsOpen((prev) => !prev)}>
              {' '}
              X{' '}
            </CloseModalBtn>
          </Modal_Wrapper>
        </Background>
      ) : null}
    </>
  )
}

export default Modal
