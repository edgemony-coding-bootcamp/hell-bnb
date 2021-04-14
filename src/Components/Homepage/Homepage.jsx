import React from "react";
import { Title, Wrap, SubTitle } from "./styles.js";
import { fetchActivities } from "../../services/api";
import { useState, useEffect } from "react";
import Rank from "../Rank/Rank";

import colors from "../../assets/colors";

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
      {/* End of Visual Test */}

      {activities && (
        <>
          <ul>
            {activities.map((activity) => {
              return <li key={activity.uuid}>{activity.title}</li>;
            })}
          </ul>
        </>
      )}
    </Wrap>
  );
}

export default Homepage;
