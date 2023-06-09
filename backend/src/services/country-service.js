const { CountryRepository } = require("../repository/index");

class CountryService {
  constructor() {
    this.countryRepository = new CountryRepository();
  }

  async getCities() {
    try {
      const cities = await this.countryRepository.getCities();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the Country service");
      throw error;
    }
  }

  async getStates() {
    try {
      const states = await this.countryRepository.getStates();
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
