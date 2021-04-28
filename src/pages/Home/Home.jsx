import React, { useState, useEffect } from "react";
import { Title, Wrap, SubTitle } from "./Home.elements";
import { fetchActivities } from "../../services/api";
import CarouselActivities from "../../components/CarouselActivities/CarouselActivities";

function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchActivities();
        setActivities(data);
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
    </Wrap>
  );
}

export default Home;
