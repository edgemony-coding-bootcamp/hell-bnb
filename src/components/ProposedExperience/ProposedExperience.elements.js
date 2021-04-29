import styled, { css } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  min-height: 30px;
  padding-bottom: 20px;
  ${(props) =>
    props.center &&
    css`
      width: 2%;
      justify-content: center;
    `}/* flex-direction: column; */
`;

export const Dot = styled.span`
  margin: 0;
  padding: 0 8px;
  padding-top: 2px;
`;
