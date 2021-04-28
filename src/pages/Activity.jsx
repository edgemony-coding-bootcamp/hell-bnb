/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import { fetchActivityByUuid } from "../services/api";
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
  const { activityUuid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchActivity = async () => {
      try {
        const activity = await fetchActivityByUuid(activityUuid);
        if (!activity) {
          throw new Error("Activity not found");
        }
        setSelectedActivity(activity);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
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
                <WrapPreviewPhoto />
                <WrapMainDetails>
                  <WrapGenericInfo />
                  <WrapHost />
                  {/* <WrapModalInfo /> */}
                </WrapMainDetails>
                <WrapExperiences />
                <Rank />
                <WrapGeneric comments>
                  <Comments pageId={activityUuid} />
                </WrapGeneric>
                <WrapGeneric available />
                <WrapGeneric info />
                <WrapGeneric carousel />
              </Layout>
            </>
          ) : (
            "Impossibile trovare l'evento selezionato."
          )}
        </>
      )}
      {/* <Comments pageId={activityUuid} /> */}
    </>
  );
}
