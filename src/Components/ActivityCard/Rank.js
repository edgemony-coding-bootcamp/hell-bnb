import styled from 'styled-components';

//assets
import colors from '../../assets/Colors';

const RateWrapper = styled.div `
    display: flex;
    flex-direction: row;
`
const Rate = styled.p `
    font-size: 1em;
    margin: 1px 0px 0px 0px;
    color: ${props => props.light ? colors.lightText : 'black' };
`


const Country = styled.a `
    font-size: 1em;
    margin: 1px 0px 0px 0px;
    color: ${props => props.light ? colors.lightText: 'black'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`

export const Rank = ({rate, number, country, light, underline}) => {
    return(
        <RateWrapper>
            <i className="red star icon"/>
            <Rate>{rate}</Rate>
            <Rate light>({number}) ·&nbsp;</Rate>
            <Country 
                light = {light} 
                underline = {underline}> {country}</Country>
        </RateWrapper>
    )
}
export default Rank;