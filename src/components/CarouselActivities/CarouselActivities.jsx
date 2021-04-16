import ActivityCard from "../ActivityCard/ActivityCard";
import { useRef } from 'react';

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

    const myRef = useRef(null);

    const cardWidth = 210;
    const cardViewed = 3;
    let scrollSpace = cardWidth*cardViewed;

    return(
        <div>
            <HeaderCarousel>
                <CarouselTitle>
                    Esperienze simili
                </CarouselTitle>
                {/* window size */}
                {(useWindowDimensions().width >= 768)&&<NavigatorCarousel>
                    <CounterSlide> 1/4 </CounterSlide>
                    <NavBtn onClick = {() => myRef.current.scrollLeft-=scrollSpace} > 
                        &lsaquo;
                    </NavBtn>
                    <NavBtn onClick = {() => myRef.current.scrollLeft+=scrollSpace}> 
                        &rsaquo; 
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
                                rate={activity.reviews_aggregated_info.reviews_avg}
                                number={activity.reviews_aggregated_info.reviews_number}
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