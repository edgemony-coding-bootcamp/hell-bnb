import { useState, useEffect } from "react";
import { fetchActivities } from "../services/api";
import { useParams } from "react-router-dom";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  let { activityUuid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    // Fetching all activities to find a match with the selected activityId
    const fetchActivity = async () => {
      try {
        const activities = await fetchActivities();

        // webpack is trying to tell me something here: Array.prototype.find() expects a value to be returned at the end of arrow function array-callback-return
        const singleActivity = activities.find((activity) => {
          if (activity.uuid === activityUuid) return activity;
        });
        if (!singleActivity) {
          setIsLoading(false);
          throw new Error("Activity not found");
        }

        setSelectedActivity(singleActivity);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
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
        <h1 style={{ marginTop: "200px" }}>
          {selectedActivity
            ? selectedActivity.title
            : "Impossibile trovare l'evento selezionato."}
        </h1>
      )}
    </>
  );
}
