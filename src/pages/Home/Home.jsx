import React, { useState, useEffect } from "react";
import { Title, Wrap, SubTitle } from "./Home.elements";
import { fetchActivities, fetchCities } from "../../services/api";
import CarouselActivities from "../../components/CarouselActivities/CarouselActivities";
import CarouselCities from "../../components/CarouselCities/CarouselCities";

function Home() {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
