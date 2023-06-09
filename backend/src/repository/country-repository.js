const { State, Country, City } = require("../models/index");

class CountryRepository {
  async getCitiesByStateId(stateId) {
    try {
      const cities = await City.findAll({
        where: {
          stateId: stateId,
        },
      });
      return cities;
    } catch (error) {
      console.log("Something went wrong in the Country city repository");
      throw error;
    }
  }

  async getStatesByCountryId(countryId) {
    try {
      const states = await State.findAll({
        where: {
          countryId: countryId,
        },
      });
      return states;
    } catch (error) {
      console.log("Something went wrong in the Country repository");
      throw error;
    }
  }

  async getCountries() {
    try {
      const countries = await Country.findAll();
      return countries;
    } catch (error) {
      console.log("Something went wrong in the Country repository");
      throw error;
    }
  }
}

module.exports = CountryRepository;
