const { CountryRepository } = require("../repository/index");

class CountryService {
  constructor() {
    this.countryRepository = new CountryRepository();
  }

  async getCitiesByStateId(stateId) {
    try {
      const cities = await this.countryRepository.getCitiesByStateId(stateId);
      return cities;
    } catch (error) {
      console.log("Something went wrong in the Country service");
      throw error;
    }
  }

  async getStatesByCountryId(countryId) {
    try {
      const states = await this.countryRepository.getStatesByCountryId(
        countryId
      );
      return states;
    } catch (error) {
      console.log("Something went wrong in the Country service");
      throw error;
    }
  }

  async getCountries() {
    try {
      const countries = await this.countryRepository.getCountries();
      return countries;
    } catch (error) {
      console.log("Something went wrong in the Country service");
      throw error;
    }
  }
}

module.exports = CountryService;
