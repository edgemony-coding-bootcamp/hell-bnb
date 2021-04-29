/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import {
  fetchActivityByUuid,
  fetchRelatedActivity,
  fetchActivityMedia,
} from "../services/api";
import Map from "../components/Map/Map";
import Layout from "../components/Layout/Layout";
import ActivityTitle from "../components/ActivityTitle/ActivityTitle";
import PhotoPreview from "../components/PhotoPreview/PhotoPreview";
import Rank from "../components/Rank/Rank";
import {
  WrapPreviewPhoto,
  WrapMainDetails,
  WrapGenericInfo,
  WrapHost,
  WrapExperiences,
  WrapGeneric,
  WrapParagraph,
  WrapIcons,
} from "../components/Layout/Layout.element";
import CarouselActivities from "../components/CarouselActivities/CarouselActivities";
import Modal from "../components/Modal/Modal";
import Hero from "../components/Hero/Hero";
import Breadcrump from "../components/Breadcrump/Breadcrump";
import ParagraphSection from "../components/ParagraphSection/ParagraphSection";
import IconsSection from "../components/IconsSection/IconsSection";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  const [relatedActivity, setRelatedActivity] = useState();
  const [activitiesMedia, setActivitiesMedia] = useState();
  const { activityUuid } = useParams();
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
    fetchActivity();
  }, [activityUuid]);

  return (
    <>
      {/* Content to define */}
      {isLoading ? (
        <h1 style={{ marginTop: "200px" }}>Loading...</h1>
      ) : (
        <>
          {widthWindow < 788 && (
            <>
              <Hero coverUrl={selectedActivity.cover_image_url} />
            </>
          )}
          <Layout>
            {selectedActivity ? (
              <>
                <WrapParagraph>
                  <Breadcrump activityInfo={selectedActivity} />
                  <ActivityTitle
                    title={selectedActivity.title}
                    rate={48}
                    number={3}
                    country={selectedActivity.city.country.name}
                  />
                </WrapParagraph>
                <WrapPreviewPhoto>
                  <PhotoPreview
                    toggleModal={toggleModal}
                    activitiesMedia={activitiesMedia}
                  />
                </WrapPreviewPhoto>
                <WrapIcons>
                  <IconsSection
                    mobile={relatedActivity.voucher_access_usage}
                    whenText={relatedActivity.when_text}
                    opsDays={relatedActivity.operational_days}
                  />
                </WrapIcons>
                <WrapMainDetails>
                  <WrapGenericInfo>
                    <ParagraphSection
                      title="Cosa farete"
                      paragraphText={selectedActivity.about}
                      maxCharacters={2000}
                    />
                  </WrapGenericInfo>
                  <WrapHost />
                  {/* <WrapModalInfo /> */}
                </WrapMainDetails>
                <WrapGeneric>
                  <Map activityData={selectedActivity} />
                </WrapGeneric>
                <WrapExperiences />
                <Rank />
                <WrapGeneric comments>
                  <Comments pageId={activityUuid} />
                </WrapGeneric>
                <WrapGeneric available />
                <WrapGeneric info />
                <WrapGeneric>
                  <CarouselActivities activities={relatedActivity} />
                </WrapGeneric>

                <Modal
                  slides={activitiesMedia}
                  ModalIsOpen={ModalIsOpen}
                  toggleModal={toggleModal}
                />
              </>
            ) : (
              "Impossibile trovare l'evento selezionato."
            )}
          </Layout>
        </>
      )}
    </>
  );
}
