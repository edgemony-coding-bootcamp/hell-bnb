import React, { useState, useEffect } from "react";
import { Title, Wrap, SubTitle } from "./Home.elements";
import {
  fetchActivities,
  fetchActivityRefundPolicy,
  fetchCities,
} from "../../services/api";
import CarouselActivities from "../../components/CarouselActivities/CarouselActivities";
import CarouselCities from "../../components/CarouselCities/CarouselCities";

function Home() {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function policy() {
    activities.forEach((act) => {
      try {
        const data = fetchActivityRefundPolicy(act.uuid);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    });
  }

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      try {
        const [dataActivities, dataCities] = await Promise.all([
          fetchActivities(),
          fetchCities(),
        ]);
        setActivities(dataActivities);
        setCities(dataCities);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
        setIsLoading(false);
      }
    };
    fetch();
    policy();
  }, []);

  return (
    <Wrap>
      <Title>ESPERIENZE HELLBNB</Title>
      <SubTitle>Attività uniche organizzate da esperti</SubTitle>
      {!isLoading && <CarouselActivities activities={activities} />}
      {!isLoading && <CarouselCities cities={cities} />}
    </Wrap>
  );
}

export default Home;
