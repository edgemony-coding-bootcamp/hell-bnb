// import CarouselActivities from "../CarouselActivities/CarouselActivities"; 
//in Homepage
//{activities && <CarouselActivities
// activities = {activities}/>}
//fetch Homepage

import ActivityCard from "../ActivityCard/ActivityCard";
import { useRef, useState } from 'react';

//assets
import {WrapperCarousel,
        CarouselTitle,
        HeaderCarousel,
        NavigatorCarousel,
        CounterSlide,
        NavBtn,
} from "./CarouselActivities.elements";

//function getting dinamic window size
import useWindowDimensions from "./WindowSize";


const CarouselActivities = ({activities}) => {

    //
    const myRef = useRef(null);
    let scrollSpace = useWindowDimensions().width;
    //
    const cardWidth = 210;
    let totalScroll = Math.ceil((activities.length*cardWidth)/useWindowDimensions().width);

    //
    const [scrollNum, setScrollNum] = useState(1);
    console.log(activities)
    return(
        <div>
            <HeaderCarousel>
                <CarouselTitle>
                    Esperienze simili
                </CarouselTitle>
                {/* window size */}
                {(useWindowDimensions().width >= 768)&&<NavigatorCarousel>
                    <CounterSlide> {scrollNum}/{totalScroll} </CounterSlide>
                    <NavBtn onClick = {() => {myRef.current.scrollLeft-=scrollSpace
                                        if (scrollNum>1) 
                                        {setScrollNum(scrollNum-1)}
                                        }}> 
                        <span>&lsaquo;</span>
                    </NavBtn>
                    <NavBtn onClick = {() => {myRef.current.scrollLeft+=scrollSpace
                                        if (scrollNum<totalScroll) 
                                        {setScrollNum(scrollNum+1)}
                                        }}> 
                        <span>&rsaquo;</span>
                    </NavBtn>
                </NavigatorCarousel>}
            </HeaderCarousel>
            <WrapperCarousel
                ref = {myRef}>
                {activities.map((activity) => {
                    return ( 
                        <div 
                            onClick = {() => window.location.href=activity.url}
                            key={activity.uuid}>
                            <ActivityCard
                                key={activity.uuid}
                                img={activity.cover_image_url}
                                rate={activity.reviews_avg}
                                number={activity.reviews_number}
                                country={activity.city.country.name}
                                title={activity.title}
                                price={activity.retail_price.formatted_value} 
                            />
                        </div>
                        )
                    })}
            </WrapperCarousel>
        </div>
    )
}
export default CarouselActivities;