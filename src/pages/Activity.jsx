import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActivityByUuid } from '../services/api';

import Modal from '../components/Modal/Modal';
import PhotoPreview from '../components/PhotoPreview/PhotoPreview';
import ActivityTitle from '../components/ActivityTitle/ActivityTitle';

import { Main } from '../assets/App.elements';
import { ActivitiesData } from '../assets/ActivitiesData';

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  const { activityUuid } = useParams();

  // Modal Logic

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
          throw new Error('Activity not found');
        }
        console.log(activity);
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
        <h1 style={{ marginTop: '200px' }}>Loading...</h1>
      ) : (
        <Main>
          <Modal
            // activities={selectedActivity}
            // current={current}
            // setCurrent={setCurrent}
            slides={ActivitiesData}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          {/* <h1 style={{ marginTop: '200px' }}>
            {selectedActivity
              ? selectedActivity.title
              : "Impossibile trovare l'evento selezionato."}
          </h1> */}

          <ActivityTitle
            title={selectedActivity}
            // rate={rate}
            // number={number}
            // country={country}
          />
          <PhotoPreview
            openModal={openModal}
            both={true}
            top={true}
            bottom={true}
            zero={true}
            left={true}
          />
        </Main>
      )}
    </>
  );
}
