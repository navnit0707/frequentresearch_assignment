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

const getStatesByCountryId = async (req, res) => {
  try {
    const { countryId } = req.params;
    const states = await countryService.getStatesByCountryId(countryId);
    return res.status(200).json({
      data: states,
      success: true,
      message: "Successfully fetched states by country ID",
      error: null,
    });
  } catch (error) {
    console.log("Something went wrong in the state controller");
    return res.status(500).json({
      data: null,
      success: false,
      message: "Failed to fetch states by country ID",
      error: error,
    });
  }
};

const getCitiesByStateId = async (req, res) => {
  try {
    const { stateId } = req.params;
    const cities = await countryService.getCitiesByStateId(stateId);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched cities by state ID",
      error: null,
    });
  } catch (error) {
    console.log("Something went wrong in the city controller");
    return res.status(500).json({
      data: null,
      success: false,
      message: "Failed to fetch cities by state ID",
      error: error,
    });
  }
};

module.exports = {
  getAllCountries,
  getStatesByCountryId,
  getCitiesByStateId,
};
