import React, { useState, useEffect } from "react";
import { Title, Wrap, SubTitle } from "./Home.elements";
import { fetchActivities, fetchCities } from "../../services/api";
import CarouselActivities from "../../components/CarouselActivities/CarouselActivities";
import CityCard from "../../components/CityCard/CityCard";

function Home() {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const [dataActivities, dataCities] = await Promise.all([
          fetchActivities(),
          fetchCities(),
        ]);
        // const dataActivities = await fetchActivities();
        // const dataCities = await fetchCities();
        setActivities(dataActivities);
        setCities(dataCities);
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }
    };
    fetch();
  }, []);

  return (
    <Wrap>
      <Title>ESPERIENZE HELLBNB</Title>
      <SubTitle>Attività uniche organizzate da esperti</SubTitle>
      {activities && <CarouselActivities activities={activities} />}
      <CityCard />
      {
        // eslint-disable-next-line
        cities && console.log(cities)
      }
    </Wrap>
  );
}

export default Home;
