
import styled from "styled-components";
import device from "../../assets/breakpoints";
// import colors from "../../assets/colors";


export const WrapperCarousel = styled.div `

  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 10px;
  width: 100vh;

  @media ${device.deviceL} {
    display: flex;
    
  }

  @media ${device.deviceXL} {
    
  }


  /* flex-direction: row;
  justify-content: center;
  margin-bottom: 30vh;
  margin-right: 5px; */


`
