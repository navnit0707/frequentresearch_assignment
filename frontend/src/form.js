import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { calculateAge, getYearDropdownItems } from "./utility/helper";

//fetch
import useCities from "./utility/fetchCity";
import useCountry from "./utility/fetchCountry";
import useStates from "./utility/fetchState";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState("");

  const fetchedCountries = useCountry();

  useEffect(() => {
    if (fetchedCountries.success) {
      setCountries(fetchedCountries.data);
      console.log(fetchedCountries.data);
      // setState(fetchedCountries.data);
    } else {
      console.error(fetchedCountries.message);
    }
  }, [fetchedCountries]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);

    setState(event.target.value);
    setCity("");
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAge(calculateAge(date));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      country === "" ||
      state === "" ||
      city === "" ||
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
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
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
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountry("");
        setState("");
        setCity("");
        setGender("");
        setSelectedDate(null);
        setAge("");
      } else {
        alert("Error creating user. Please try again.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("An error occurred while creating the user. Please try again.");
    }
  };

  return (
    <div className=" flex  flex-col min-h-screen  rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="m-2 p-2 bg-blue-200 flex  flex-col  max-w-md">
        <div className="flex flex-1  mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="firstName" className="block text-xl mb-2 font-bold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="w-full px-3 py-2 border rounded"
              pattern="[A-Za-z]+"
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="lastName" className="block text-xl mb-2 font-bold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full px-3 py-2 border rounded"
              pattern="[A-Za-z]+"
              required
            />
          </div>
        </div>
        <div className="flex  flex-1  mb-4">
          <div className="w-1/3 mr-2">
            <label htmlFor="country" className="block text-xl mb-2 font-bold">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={handleCountryChange}
              className="w-full px-3 py-2 border rounded"
              required>
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3 mx-2">
            <label htmlFor="state" className="block text-xl mb-2 font-bold">
              State
            </label>
            <select
              id="state"
              value={state}
              onChange={handleStateChange}
              className="w-full px-3 py-2 border rounded"
              required>
              <option value="">Select a state</option>
              <option value="state1">state 1</option>
              <option value="state2">state 2</option>
              <option value="state3">state 3</option>
              {/* {state.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))} */}
            </select>
          </div>
          <div className="w-1/3 ml-2">
            <label htmlFor="city" className="block text-xl mb-2 font-bold">
              City
            </label>
            <select
              id="city"
              value={city}
              onChange={handleCityChange}
              className="w-full px-3 py-2 border rounded"
              required>
              <option value="">Select a city</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </select>
          </div>
        </div>
        <div className="flex  flex-1 mb-4">
          <div className="mr-2">
            <label
              htmlFor="dateOfBirth"
              className="block text-xl mb-2 font-bold">
              Date of Birth
            </label>

            <DatePicker
              className="w-full px-3 py-2 border rounded"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={getYearDropdownItems().length}
              scrollableMonthDropdown
              yearDropdownItems={getYearDropdownItems()}
              required
            />
          </div>
          <div className="ml-2">
            <label htmlFor="age" className="block text-xl mb-2 font-bold">
              Age
            </label>
            <input
              type="text"
              id="age"
              value={age}
              pattern="^(1[5-9]|[2-9][0-9])$"
              readOnly
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1  mb-4">
          <label htmlFor="email" className="block text-xl mb-2 font-bold">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col flex-1 mb-4 text-lg">
          <label className="block mb-2 text-xl font-bold">Gender</label>
          <div className="flex">
            <div className="mr-2">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
                className="mr-1 h-5 w-6 rounded-full"
                required
              />
              <label htmlFor="male" className="text-center text-xl">
                Male
              </label>
            </div>
            <div className="mr-2 items-center justify-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
                className="mr-1 h-5 w-6 rounded-full"
                required
              />
              <label htmlFor="female" className="text-center text-xl">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={handleGenderChange}
                className="mr-1 h-5 w-6 rounded-full"
                required
              />
              <label
                htmlFor="other"
                className="text-center items-center justify-center text-xl">
                Other
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex flex-col flex-1 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
