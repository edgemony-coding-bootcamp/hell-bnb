import React from "react";
import { Title, Wrap, SubTitle, CarouselActivities } from "./styles.js";
import { fetchActivities } from "../../services/api";
import { useState, useEffect } from "react";
// import Rank from "../Rank/Rank";

import ActivityCard from "../ActivityCard/ActivityCard";


function Homepage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchActivities();
        setActivities(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  return (
    <Wrap>
      <Title>ESPERIENZE HELLBNB</Title>
      <SubTitle>Attività uniche organizzate da esperti</SubTitle>

      {/* Component Rank Visual Test */}
      {/* <Rank
        rate={3}
        number={99}
        country={"Italy"}
        light={true}
        underline={false}
      /> */}
      {/* End of Visual Test */}

      {activities && (
        <CarouselActivities>
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
        </CarouselActivities>
      )}
    </Wrap>
  );
}

export default Homepage;
