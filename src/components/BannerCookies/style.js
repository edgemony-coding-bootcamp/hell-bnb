import styled, { css } from 'styled-components'

import colors from '../../assets/colors'

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`
export const WrapContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    flex-direction: row;
  }
`
export const Banner = styled.div`
  font-family: Helvetica;
  min-height: 13vh;
  background-color: whitesmoke;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  bottom: 20px;
  padding: 3%;
  border-radius: 20px;
`

export const Icon = styled.i`
  color: rgb(66, 139, 255);
`

export const TitleCookie = styled.strong`
  font-size: 1.1rem;
  color: #484848;
`

export const ParagraphCookie = styled.p`
  font-size: 0.9rem;
  color: #484848;
`

export const LinkPolicy = styled.a`
  color: black;
  font-weight: bold;
  :visited {
    color: black;
  }
`

export const BtnCookies = styled.button`
  font-size: 1rem;
  width: 90%;
  border-radius: 8px;
  padding: 10px 0;
  cursor: pointer;
  margin: 5px 0;
  font-weight: 600;
  border: 1.3px solid ${colors.darkText};
  :hover {
    transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  }
  :focus {
    outline: none;
  }
  ${(props) =>
    props.accept &&
    css`
      background-color: rgb(34, 34, 34);
      color: white;
      :hover {
        background-color: black;
      }
    `}
  ${(props) =>
    props.preference &&
    css`
      background-color: white;
      color: rgb(34, 34, 34);
      border-color: rgb(34, 34, 34);
      :hover {
        background-color: rgb(247, 247, 247);
        color: black;
      }
    `}
    @media (min-width: 1080px) {
    width: 20%;
    margin-right: 10px;
    ${(props) =>
      props.accept &&
      css`
        width: 10%;
      `}
  }
`
