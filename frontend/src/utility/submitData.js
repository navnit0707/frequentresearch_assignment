export const submitData = async (
  event,
  firstName,
  lastName,
  email,
  gender,
  selectedDate,
  selectedCountry,
  selectedState,
  selectedCity,
  age
) => {
  event.preventDefault();

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    selectedCountry === "" ||
    selectedState === "" ||
    selectedCity === "" ||
    gender === "" ||
    selectedDate === null ||
    age <= 14
  ) {
    alert(
      "Please fill in all the required fields and ensure that the age is greater than 14."
    );
    return;
  }

  const formData = new URLSearchParams();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("country", selectedCountry);
  formData.append("state", selectedState);
  formData.append("city", selectedCity);
  formData.append("gender", gender);
  formData.append("dateOfBirth", selectedDate.toISOString().split("T")[0]);

  try {
    const response = await fetch("http://localhost:3001/api/v1/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      alert("User created successfully!");
      return true;
    } else {
      alert("Error creating user. Please try again.");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    alert("An error occurred while creating the user. Please try again.");
  }
};
