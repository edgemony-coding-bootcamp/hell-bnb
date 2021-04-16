
import React,{ useState, useEffect } from "react";
import { Title, Wrap, SubTitle } from "./Homepage.element";
import  fetchActivities  from "../../services/api";

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
      {activities && <>
            <ul>
                {activities.map(activity=><li key={activity.uuid}>{activity.title}</li>
                  )}
            </ul>
           </>}
    </Wrap>
  );
}

export default Homepage;
