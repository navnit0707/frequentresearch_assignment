export async function countryData() {
  console.log("country fetched called");

  try {
    const result = await fetch(`http://localhost:3001/api/v1/country`);
    if (!result.ok) {
      throw new Error("Failed to fetch country");
    }
    const data = await result.json();
    return data.data;
  } catch (error) {
    console.log("error in state fetching");
  }
}

export async function stateDataByCountryId(countryId) {
  console.log("state fetched called");

  try {
    const result = await fetch(
      `http://localhost:3001/api/v1/state/${countryId}`
    );
    if (!result.ok) {
      throw new Error("Failed to fetch country");
    }
    const data = await result.json();
    return data.data;
  } catch (error) {
    console.log("error in state fetching");
  }
}

export async function citiesByStateId(stateId) {
  console.log("city fetched called");
  try {
    const result = await fetch(`http://localhost:3001/api/v1/city/${stateId}/`);
    if (!result.ok) {
      throw new Error("Failed to fetch country");
    }
    const data = await result.json();
    return data.data;
  } catch (error) {
    console.log("error in state fetching");
  }
}
