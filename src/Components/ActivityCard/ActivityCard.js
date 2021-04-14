/* 
import ActivityCard from './Components/ActivityCard/ActivityCard';

import img from './Components/ActivityCard/img.jpeg';

<ActivityCard
    img = {img}
    rate = {4.93}
    number = {204}
    country = {'Argentina'}
    title = {'Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum'}
    price = {7}/>
*/



import styled from 'styled-components';

//assets

import device from'../../assets/Media_query_dimension';
import colors from '../../assets/Colors';

import Rank from './Rank';

const CardWrapper = styled.div`
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

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0vh 1.5vh 0.5vh 1.5vh;
    font-family: Helvetica;
    width: 100%;
`

const Title = styled.p `
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
    color: ${colors.darkText};
    margin: 0px;
    font-weight: bold;
    display: inline;
`

export const ActivityCard = ({img, rate, number, country, title, price})=>{
    return(
        <CardWrapper>
            <Img src={img} alt=""/>
            <TextWrapper>
                <Rank
                    rate = {rate}
                    number = {number}
                    country = {country}
                    light = {true}
                    underline = {false}
                />
                <Title>{title}</Title>
                <Detail><Bold>A partire da {price}€</Bold> a persona</Detail>
            </TextWrapper>
        </CardWrapper>
    )
}
export default ActivityCard;


