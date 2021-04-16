import colors from '../../assets/colors'
import styled from 'styled-components'

export const PhotoCounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media ${device.deviceL} {
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`

export const PhotoCounterNum = styled.p`
  color: white;

  @media ${device.deviceL} {
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`
