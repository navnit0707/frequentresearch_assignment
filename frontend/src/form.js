import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

//utlities
import { calculateAge, getYearDropdownItems } from "./utility/helper";
import { submitData } from "./utility/submitData";

//fetch
import {
  countryData,
  stateDataByCountryId,
  citiesByStateId,
} from "./utility/fetchData";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState("");

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState([]);

  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  useEffect(() => {
    const initialCountry = async () => {
      try {
        const country = await countryData();
        setCountryList(country);
        setSelectedCountry(country[0].id);
        console.log("country", countryList);

        // console.log("country", countryList);
      } catch (error) {
        console.log("Error", error);
      }
    };

    initialCountry();
  }, []);

  useEffect(() => {
    if (countryList.length > 0) {
      const fetchStates = async () => {
        try {
          const state = await stateDataByCountryId(selectedCountry);
          setStateList(state);
          setSelectedState(state[0].id);
        } catch (error) {
          console.log("Error", error);
        }
      };

      fetchStates();
    }
  }, [countryList, selectedCountry]);

  useEffect(() => {
    if (stateList.length > 0) {
      const fetchCities = async () => {
        try {
          const city = await citiesByStateId(selectedState);
          setCityList(city);
          setSelectedCity(city[0].id);
          // console.log("city", cityList);
        } catch (error) {
          console.log("Error", error);
        }
      };

      fetchCities();
    }
  }, [selectedState, stateList, selectedCountry]);

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
    setSelectedCountry(event.target.value);

    setSelectedState("");
    setStateList([]);

    setSelectedCity("");
    setCityList([]);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);

    setCityList([]);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAge(calculateAge(date));
  };

  async function handleSubmit(e) {
    const result = await submitData(
      e,
      firstName,
      lastName,
      email,
      gender,
      selectedDate,
      countryList[selectedCountry - 1].name,
      stateList[selectedState - 1].name,
      cityList[selectedCity - 1].name,
      age
    );
    if (result) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setSelectedCountry("1");
      setSelectedState("1");
      setSelectedCity("1");
      setGender("");
      setSelectedDate(null);
      setAge("");
    }
  }

  return (
    <div className=" flex flex-col  h-[80vh] ">
      <form
        onSubmit={handleSubmit}
        className="m-2 p-2 bg-blue-200 flex flex-col flex-1 max-w-md rounded-lg">
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
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-full px-3 py-2 border rounded"
              required>
              {!countryList.length ? (
                <option value="">Loading ...</option>
              ) : (
                countryList.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))
              )}
              {console.log(selectedCountry)}
            </select>
          </div>
          <div className="w-1/3 mx-2">
            <label htmlFor="state" className="block text-xl mb-2 font-bold">
              State
            </label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              className="w-full px-3 py-2 border rounded"
              required>
              {!stateList.length ? (
                <option value="">Loading ...</option>
              ) : (
                stateList.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="w-1/3 ml-2">
            <label htmlFor="city" className="block text-xl mb-2 font-bold">
              City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full px-3 py-2 border rounded"
              required>
              {!cityList.length ? (
                <option value="">Loading ...</option>
              ) : (
                cityList.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))
              )}
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
              maxDate={
                new Date(
                  new Date().getFullYear() - 14,

                  new Date().getMonth(),
                  new Date().getDate()
                )
              } // Set the maximum selectable date to the current date
              minDate={new Date(new Date().getFullYear() - 14 - 100)} // Set the minimum selectable date to 14 years less than the current date
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
          className="flex flex-col flex-1 items-center justify-center px-4 py-2 text-5xl text-center font-bold text-white bg-blue-500 rounded hover:bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
