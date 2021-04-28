import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchActivityByUuid,
  fetchRelatedActivity,
  fetchActivityMedia,
} from "../services/api";
import Layout from "../components/Layout/Layout";
import ActivityTitle from "../components/ActivityTitle/ActivityTitle";
import Rank from "../components/Rank/Rank";

import {
  WrapPreviewPhoto,
  WrapMainDetails,
  WrapGenericInfo,
  WrapHost,
  WrapExperiences,
  WrapGeneric,
} from "../components/Layout/Layout.element";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  const [relatedActivity, setRelatedActivity] = useState();
  const [activitiesMedia, setActivitiesMedia] = useState();

  const { activityUuid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchActivity = async () => {
      try {
        const [activity, relatedActivities, activityMedia] = await Promise.all([
          fetchActivityByUuid(activityUuid),
          fetchRelatedActivity(activityUuid),
          fetchActivityMedia(activityUuid),
        ]);
        setSelectedActivity(activity);
        setRelatedActivity(relatedActivities);
        setActivitiesMedia(activityMedia);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error("Something went wrong during Fetch calls");
      }
    };
    fetchActivity();
  }, [activityUuid]);

  return (
    <>
      {/* Content to define */}
      {isLoading ? (
        <h1 style={{ marginTop: "200px" }}>Loading...</h1>
      ) : (
        <>
          {selectedActivity ? (
            <>
              <Layout>
                <ActivityTitle
                  title={selectedActivity.title}
                  rate={48}
                  number={3}
                  country={selectedActivity.city.country.name}
                />
                <WrapPreviewPhoto activitiesMedia={activitiesMedia} />
                <WrapMainDetails>
                  <WrapGenericInfo />
                  <WrapHost />
                  {/* <WrapModalInfo /> */}
                </WrapMainDetails>

                <WrapExperiences />

                <Rank />
                <WrapGeneric comments />
                <WrapGeneric available />
                <WrapGeneric info />
                <WrapGeneric carousel relatedActivity={relatedActivity} />
              </Layout>
            </>
          ) : (
            "Impossibile trovare l'evento selezionato."
          )}
        </>
      )}
    </>
  );
}
