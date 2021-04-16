import ActivityCard from "../ActivityCard/ActivityCard";

//assets
import {WrapperCarousel,
        CarouselTitle,
} from "./CarouselActivities.elements";

const CarouselActivities = ({activities}) => {
    console.log(activities)
    return(
        <div>
            <CarouselTitle>
                Esperienze simili
            </CarouselTitle>
        
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