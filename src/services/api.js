const baseURL = "https://api.musement.com/api/v3";

async function callAPI(endpoint) {
  const response = await fetch(`${baseURL}/${endpoint}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data.data;
}
export async function fetchActivities() {
  return callAPI("activities");
}
export async function fetchActivityByUuid(activityUuid) {
  const response = await fetch(`${baseURL}/activities/${activityUuid}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data;
}
