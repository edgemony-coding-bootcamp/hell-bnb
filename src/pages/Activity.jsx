import { useState, useEffect } from "react";
import { fetchActivityByUuid } from "../services/api";
import { useParams } from "react-router-dom";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState();
  let { activityUuid } = useParams();

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
        setSelectedActivity(false);
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
        <h1 style={{ marginTop: "200px" }}>
          {selectedActivity
            ? selectedActivity.title
            : "Impossibile trovare l'evento selezionato."}
        </h1>
      )}
    </>
  );
}
