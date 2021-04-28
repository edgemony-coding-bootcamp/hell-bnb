import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import PhotoPreview from "../components/PhotoPreview/PhotoPreview";
// import ActivitiesData from "../assets/ActivitiesData";
import {
  fetchActivityByUuid,
  fetchRelatedActivity,
  fetchActivityMedia,
} from "../services/api";
import Map from "../components/Map/Map";
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
import CarouselActivities from "../components/CarouselActivities/CarouselActivities";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  const [relatedActivity, setRelatedActivity] = useState();
  const [activitiesMedia, setActivitiesMedia] = useState();

  const { activityUuid } = useParams();
  // eslint-disable-next-line
  console.log(selectedActivity);

  const [ModalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

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

    if (ModalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    fetchActivity();
  }, [activityUuid]);

  return (
    <>
      <Layout>
        {/* Content to define */}
        {isLoading ? (
          <h1 style={{ marginTop: "200px" }}>Loading...</h1>
        ) : (
          <>
            {selectedActivity ? (
              <>
                <ActivityTitle
                  title={selectedActivity.title}
                  rate={48}
                  number={3}
                  country={selectedActivity.city.country.name}
                />
                <WrapPreviewPhoto>
                  <PhotoPreview
                    activitiesMedia={activitiesMedia}
                    toggleModal={toggleModal}
                    both
                    top
                    bottom
                    zero
                    left
                  />
                </WrapPreviewPhoto>

                <WrapGeneric>
                  <Map activityData={selectedActivity} />
                </WrapGeneric>
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
                {relatedActivity && (
                  <WrapGeneric>
                    <CarouselActivities activities={relatedActivity} />
                  </WrapGeneric>
                )}
                <Modal
                  slides={activitiesMedia}
                  ModalIsOpen={ModalIsOpen}
                  toggleModal={toggleModal}
                />
              </>
            ) : (
              "Impossibile trovare l'evento selezionato."
            )}
          </>
        )}
      </Layout>
    </>
  );
}
