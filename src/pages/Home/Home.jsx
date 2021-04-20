import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title, Wrap, SubTitle } from "./Home.elements";
import { fetchActivities } from "../../services/api";

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

      {activities && (
        <>
          <ul>
            {activities.map((activity) => {
              const path = `/activities/${activity.uuid}`;

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

export default Home;
