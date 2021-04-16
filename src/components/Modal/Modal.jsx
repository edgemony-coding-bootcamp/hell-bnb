import {
  Modal_Wrapper,
  Background,
  ArrowModalBtn,
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
          <Modal_Wrapper
            url={
              'https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            isOpen={isOpen}
          >
            {/* <Modal_Image
              src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt='ciaooo'
            /> */}
            <ArrowModalBtn
              onClick={() => setIsOpen((prev) => !prev)}
            ></ArrowModalBtn>
          </Modal_Wrapper>
        </Background>
      ) : null}
    </>
  )
}

export default Modal
