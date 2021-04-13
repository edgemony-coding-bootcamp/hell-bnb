
const baseURL = "https://sandbox.musement.com/api/v3"

async function callAPI(endpoint) {
  const response = await fetch(`${baseURL}/${endpoint}`);
  console.log("response",response)
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message); 
  }
  return data.data;
  
}
export async function fetchActivities() {
    return callAPI("activities");
  }
