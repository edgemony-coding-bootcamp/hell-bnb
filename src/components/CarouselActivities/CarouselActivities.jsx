import ActivityCard from "../ActivityCard/ActivityCard";

//assets
import {WrapperCarousel,
        CarouselTitle,
        HeaderCarousel,
        NavigatorCarousel,
        CounterSlide,
        NavBtn,
} from "./CarouselActivities.elements";

import useWindowDimensions from "./WindowSize";

const CarouselActivities = ({activities}) => {
    return(
        <div>
            <HeaderCarousel>
                <CarouselTitle>
                    Esperienze simili
                </CarouselTitle>
                {/* window size */}
                {(useWindowDimensions().width >= 768)&&<NavigatorCarousel>
                    <CounterSlide> 1/4 </CounterSlide>
                    <NavBtn> &lsaquo; </NavBtn>
                    <NavBtn> &rsaquo; </NavBtn>
                </NavigatorCarousel>}
            </HeaderCarousel>
            <WrapperCarousel>
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