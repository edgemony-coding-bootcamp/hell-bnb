import React from "react";
import { Title, Wrap, SubTitle } from "./styles.js";
import { fetchActivities } from "../../services/api";
import { useState, useEffect } from "react";
import Rank from "../Rank/Rank";
import { Link } from "react-router-dom";

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
              let path = `/activities/${activity.uuid}`;

              return (
                <Link to={path} key={activity.uuid}>
                  <li>{activity.title}</li>
                </Link>
              );
            })}
          </ul>
        </>
      )}
    </Wrap>
  );
}

export default Homepage;
