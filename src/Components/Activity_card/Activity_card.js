import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'

import device from'../Media_query_dimension';

const Card_wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* border: black solid 1px; */
    border-radius: 10px;
    background-color: white;

    width: 210px;
    height: 360px;
    
    @media ${device.deviceM} { 
        width: 250px;
        height: 410px;
    }
    @media ${device.deviceL} { 
        max-width: 280px;
        height: 410px;
    }
    @media ${device.deviceXL} { 
        max-width: 335px;
        height: 40px;
    }      
`

const Img = styled.img`
    padding: 1.5vh;
    width: 100%;
    border-radius: 10%;
    margin: 0px;
`

const Text_wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0vh 1.5vh 0.5vh 1.5vh;
    font-family: Helvetica;
    width: 100%;
`
const Rate = styled.p `
    font-size: 1em;
    margin: 1px 0px 0px 0px;
    color: ${props => props.light ? '#7a7a7a': 'black' };
`

const Rate_wrapper = styled.div `
    display: flex;
    flex-direction: row;
`

const Description = styled.p `
    font-size: 1.1em; 
    margin: 3px 0px 0px 0px;
    height: 28%;
    line-height: 1.2em;
    /* white-space: nowrap; */
    overflow: hidden;
    /* text-overflow: ellipsis; */

    @media ${device.deviceM} { 
        height: 28%;
    }
    @media ${device.deviceXL} { 
        height: 30%;
    }
`

const Detail = styled.p `
    font-size: 1.1em;
    margin: 3px 0px 7px 0px;
    line-height: 0.9em;
`
const Bold = styled.p `
    color: #222222;
    margin: 0px;
    font-weight: bold;
    display: inline;
`

export const Activity_card = ({img, rate, number, country, description, price})=>{
    return(
        <Card_wrapper>
            <Img src={img} alt=""/>
            <Text_wrapper>
                <Rate_wrapper>
                    <Icon color='red' name='star'/>
                    <Rate>{rate}</Rate>
                    <Rate light>({number}) - {country}</Rate>
                </Rate_wrapper>
                <Description>{description}</Description>
                <Detail><Bold>A partire da {price}€</Bold> a persona</Detail>
            </Text_wrapper>
        </Card_wrapper>
    )
}
export default Activity_card;
