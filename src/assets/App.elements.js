import styled from 'styled-components';
import { device } from './breakpoints';

export const Main = styled.main`
  margin-top: 90px;
  @media ${device.deviceL} {
    margin-top: 200px;
  }
`;
