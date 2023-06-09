const { CountryService } = require("../services/index");

const countryService = new CountryService();

const getAllCountries = async (req, res) => {
  try {
    const countries = await countryService.getCountries();
    return res.status(200).json({
      data: countries,
      success: true,
      message: "Successfully fetched countries",
      error: null,
    });
  } catch (error) {
    console.log("Something went wrong in the country controller");
    return res.status(500).json({
      data: null,
      success: false,
      message: "Failed to fetch countries",
      error: error,
    });
  }
};

const getAllStates = async (req, res) => {
  try {
    const states = await countryService.getStates();
    return res.status(200).json({
      data: states,
      success: true,
      message: "Successfully fetched states",
      error: null,
    });
  } catch (error) {
    console.log("Something went wrong in the state controller");
    return res.status(500).json({
      data: null,
      success: false,
      message: "Failed to fetch states",
      error: error,
    });
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await countryService.getCities();
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched cities",
      error: null,
    });
  } catch (error) {
    console.log("Something went wrong in the city controller");
    return res.status(500).json({
      data: null,
      success: false,
      message: "Failed to fetch cities",
      error: error,
    });
  }
};

module.exports = {
  getAllCountries,
  getAllStates,
  getAllCities,
};
