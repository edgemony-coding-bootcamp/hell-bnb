import React from "react";
import { Title, Wrap, SubTitle } from "./styles.js";
import { fetchActivities } from "../../services/api";
import { useState, useEffect } from "react";
function Homepage() {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchActivities();
        console.log("data", data);
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
      {activities && <>
            <ul>
                {activities.map(activity=>{
                    return <li key={activity.uuid}>{activity.title}</li>
                })}
            </ul>
           </>}
    </Wrap>
  );
}

export default Homepage;
