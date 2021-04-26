import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchActivityByUuid } from "../services/api";
import Modal from "../components/Modal/Modal";
import PhotoPreview from "../components/PhotoPreview/PhotoPreview";
import ActivitiesData from "../assets/ActivitiesData";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
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

    if (ModalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    fetchActivity();
  }, [activityUuid]);

  return (
    <>
      {/* Content to define */}
      {isLoading ? (
        <h1 style={{ marginTop: "200px" }}>Loading...</h1>
      ) : (
        <>
          <Modal
            slides={ActivitiesData}
            ModalIsOpen={ModalIsOpen}
            toggleModal={toggleModal}
          />

          <PhotoPreview toggleModal={toggleModal} both top bottom zero left />
        </>
      )}
    </>
  );
}
