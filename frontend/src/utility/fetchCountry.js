import { useState, useEffect } from "react";

export default function useCountry() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchCountry()
      .then((response) => setCountry(response))
      .catch((error) => console.error("Error fetching Country:", error));
  }, []);

  return country;
}

async function fetchCountry() {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/country`);
    if (!response.ok) {
      throw new Error("Failed to fetch country");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country:", error);
    throw error;
  }
}
