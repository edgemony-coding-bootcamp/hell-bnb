import styled from 'styled-components'
import colors from '../../assets/colors'

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${(props) => (props.margin ? '0px 0px 0px 4px' : '1px 0px 0px 0px')};
`
export const Rate = styled.p`
  font-size: 1em;
  margin: ${(props) => (props.margin ? '0px 0px 0px 4px' : '1px 0px 0px 0px')};
  color: ${(props) => (props.light ? colors.lightText : 'black')};
`

export const Country = styled.a`
  font-size: 1em;
  margin: ${(props) => (props.margin ? '0px 0px 0px 10px' : '1px 0px 0px 0px')};
  color: ${(props) => (props.light ? colors.lightText : 'black')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
`
