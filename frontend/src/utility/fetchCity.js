import { useState, useEffect } from "react";

export default function useCities(stateId) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (stateId) {
      fetchCities(stateId)
        .then((response) => setCities(response))
        .catch((error) => console.error("Error fetching states:", error));
    } else {
      setCities([]);
    }
  }, [stateId]);

  return cities;
}

async function fetchCities(stateId) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/city/${stateId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch cities");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching states:", error);
    throw error;
  }
}
