import styled from "styled-components";
// import colors from "../../assets/colors";
// import device from "../../assets/breakpoints";

export const ModalLayout = styled.section`
  position: fixed;
  /* display: none; */
  right: 0;
  top: 100%;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transition: all 0.3s ease-in-out;
  top: ${(props) => props.modalOpen && "0"};
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
