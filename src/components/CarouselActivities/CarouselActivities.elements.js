import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: fit-content;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
export const HeaderCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const NavigatorCarousel = styled.div`
  display: flex;
  /* margin-right: 0px; */
`;
export const CounterSlide = styled.p`
  font-size: 18px;
  padding-right: 5px;
  padding-top: 4px;
  margin: 0px;
`;
export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${colors.borderColor} solid 1px;
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-left: 13px;
  padding-left: 5px;
  padding-bottom: 3px;
  cursor: pointer;
  :focus {
    outline: none;
  }

  transition: transform 0.1s; //transition button
  :hover {
    transform: scale(1.1);
  }
`;

export const CarouselTitle = styled.h3`
  color: black;
  margin-bottom: 0px;
  padding-top: 5px;
`;
export const WrapperCarousel = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  max-width: 100%;
  /* border : black solid 1px; */
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  @media ${device.deviceM} {
    overflow: hidden;
  }
`;
