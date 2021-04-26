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
  console.log(selectedActivity);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen((prev) => !prev);
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
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <PhotoPreview openModal={openModal} both top bottom zero left />
        </>
      )}
    </>
  );
}
