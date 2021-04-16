import ActivityCard from "../ActivityCard/ActivityCard";

//assets
import {WrapperCarousel} from "./CarouselActivities.elements";

const CarouselActivities = ({activities}) => {
    return(
        <WrapperCarousel>
            {activities.map((activity) => {
                return ( 
                    <ActivityCard
                        key={activity.uuid}
                        img={activity.cover_image_url}
                        rate={activity.reviews_aggregated_info.reviews_avg}
                        number={activity.reviews_aggregated_info.reviews_number}
                        country={activity.city.country.name}
                        title={activity.title}
                        price={activity.retail_price.formatted_value}
                    />
                    )
                })}
        </WrapperCarousel>
    )
}
export default CarouselActivities;