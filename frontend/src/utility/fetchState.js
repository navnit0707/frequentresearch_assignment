import { useState, useEffect } from "react";

export default function useStates(countryId) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (countryId) {
      fetchCities(countryId)
        .then((response) => setCities(response))
        .catch((error) => console.error("Error fetching states:", error));
    } else {
      setCities([]);
    }
  }, [countryId]);

  return cities;
}

async function fetchCities(countryId) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/city/${countryId}`
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
