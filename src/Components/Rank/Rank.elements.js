import colors from "../../assets/colors";
import styled from "styled-components";

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Rate = styled.p`
  font-size: 1em;
  margin: 1px 0px 0px 0px;
  color: ${(props) => (props.light ? colors.lightText : "black")};
`;

export const Country = styled.a`
  font-size: 1em;
  margin: 1px 0px 0px 0px;
  color: ${(props) => (props.light ? colors.lightText : "black")};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
`;
