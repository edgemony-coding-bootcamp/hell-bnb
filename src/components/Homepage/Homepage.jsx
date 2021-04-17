import React from "react";
import { Title, Wrap, SubTitle } from "./styles.js";
import { fetchActivities } from "../../services/api";
import { useState, useEffect } from "react";
import Rank from "../Rank/Rank";


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
      <Rank
        rate={3}
        number={99}
        country={"Italy"}
        light={true}
        underline={false}
      />

    </Wrap>
  );
}

export default Homepage;
