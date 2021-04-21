// import CarouselActivities from "../CarouselActivities/CarouselActivities";
// in Homepage
// {activities && <CarouselActivities
// activities = {activities}/>}
// fetch Homepage
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ActivityCard from "../ActivityCard/ActivityCard";
// assets
import {
  WrapperCarousel,
  CarouselTitle,
  HeaderCarousel,
  NavigatorCarousel,
  CounterSlide,
  NavBtn,
} from "./CarouselActivities.elements";

// function getting dinamic window size
import useWindowDimensions from "./WindowSize";

const CarouselActivities = ({ activities }) => {
  const myRef = useRef(null);
  const scrollSpace = useWindowDimensions().width;

  const cardWidth = 210;
  const totalScroll = Math.ceil(
    (activities.length * cardWidth) / useWindowDimensions().width
  );

  const [scrollNum, setScrollNum] = useState(1);
  return (
    <div>
      {activities ? (
        <div>
          <HeaderCarousel>
            <CarouselTitle>Esperienze simili</CarouselTitle>
            {/* window size */}
            {useWindowDimensions().width >= 768 && (
              <NavigatorCarousel>
                <CounterSlide>
                  {" "}
                  {scrollNum}/{totalScroll}{" "}
                </CounterSlide>
                <NavBtn
                  onClick={() => {
                    myRef.current.scrollLeft -= scrollSpace;
                    if (scrollNum > 1) {
                      setScrollNum(scrollNum - 1);
                    }
                  }}
                >
                  <span>&lsaquo;</span>
                </NavBtn>
                <NavBtn
                  onClick={() => {
                    myRef.current.scrollLeft += scrollSpace;
                    if (scrollNum < totalScroll) {
                      setScrollNum(scrollNum + 1);
                    }
                  }}
                >
                  <span>&rsaquo;</span>
                </NavBtn>
              </NavigatorCarousel>
            )}
          </HeaderCarousel>
          <WrapperCarousel ref={myRef}>
            {activities.map((activity) => {
              const path = `/activities/${activity.uuid}`;
              return (
                <Link to={path} key={activity.uuid}>
                  <ActivityCard
                    key={activity.uuid}
                    img={activity.cover_image_url}
                    rate={activity.reviews_avg}
                    number={activity.reviews_number}
                    country={activity.city.country.name}
                    title={activity.title}
                    price={activity.retail_price.formatted_value}
                  />
                </Link>
              );
            })}
          </WrapperCarousel>{" "}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default CarouselActivities;
