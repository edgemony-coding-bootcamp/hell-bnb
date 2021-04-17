import styled from 'styled-components'

import { device } from '../../assets/breakpoints'

// Photo Preview

export const PhotoPreview_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 100px;
  overflow-x: hidden;

  height: 600px;
  /* border: 4px red solid; */
  box-sizing: border-box;
  object-fit: cover;

  @media ${device.deviceL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-basis: 100%;
    flex: 1;
    margin-top: 200px;
    height: 400px;
    transition: all 0.2s ease-in-out;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 60vh;
  object-fit: cover;
  margin: 10px;
  overflow: hidden;
  /* border: 4px blue solid; */
  @media ${device.deviceL} {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    margin: 10px;
    overflow: hidden;
    /* border: 4px blue solid; */
  }
`

export const ImageColumnWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100vw;
  height: 60vh;
  object-fit: cover;

  /* border: 4px black solid; */
  @media ${device.deviceL} {
    display: flex;

    flex-direction: column;

    height: 60vh;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }
`

export const Image = styled.img`
  width: ${(props) => (props.width ? '70%' : '100%')};
  height: ${(props) => (props.height ? '100%' : '50%')};
  border-radius: ${(props) =>
    props.top
      ? '0px 25px 0px 0px'
      : props.bottom
      ? '0px 0px 30px 0px'
      : '35px 0px 0px 40px'};
  margin: 5px 0px 0px 5px;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  display: ${(props) => (props.display ? 'block' : props.none ? 'none' : '')};
  @media ${device.deviceL} {
    display: ${(props) => (props.display ? 'none' : props.none ? 'block' : '')};
    width: ${(props) => (props.width ? '200px' : '200px')};
    height: ${(props) => (props.height ? '300px' : '300px')};
    border-radius: ${(props) =>
      props.zero
        ? '0px 0px 0px 0px'
        : props.left
        ? '0px 40px 40px 0px'
        : '40px 0px 0px 40px'};
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    object-fit: cover;
  }
`

// export const BtnCookies = styled.button`
//   font-size: 1rem;
//   width: 90%;
//   border-radius: 8px;
//   padding: 10px 0;
//   cursor: pointer;
//   margin: 5px 0;
//   :hover {
//     transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
//   }
//   :focus {
//     outline: none;
//   }

//   ${(props) =>
//     props.accept &&
//     css`
//       background-color: rgb(34, 34, 34);
//       color: white;
//       :hover {
//         background-color: black;
//       }
//     `}
//   ${(props) =>
//     props.preference &&
//     css`
//       background-color: white;
//       color: rgb(34, 34, 34);
//       border-color: rgb(34, 34, 34);
//       :hover {
//         background-color: rgb(247, 247, 247);
//         color: black;
//       }
//     `}
//     @media (min-width: 1080px) {
//     width: 20%;
//     margin-right: 20px;
//   }
// `

// /* Flex columns */
// .flex-columns.flex-reverse .row {
//     flex-direction: row-reverse;
// }

// .flex-columns .row {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     width: 100%;
// }

// .flex-columns .column {
//     display: flex;
//     flex-direction: column;
//     flex-basis: 100%;
//     flex: 1;
// }

// .flex-columns .column .column-1,
// .flex-columns .column .column-2 {
//     height: 100%;
// }

// .flex-columns img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }

// .flex-columns .column-2 {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 30px;
// }

// .flex-columns h2 {
//     font-size: 40px;
//     font-weight: 100;
// }

// .flex-columns h4 {
//     margin-bottom: 4px;
// }

// .flex-columns p {
//     margin: 20px 0;
// }
