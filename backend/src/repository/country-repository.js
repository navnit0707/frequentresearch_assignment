const { State, Country, City } = require("../models/index");

class CountryRepository {
  async getCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the Country city repository");
      throw error;
    }
  }

  async getStates() {
    try {
      const states = await State.findAll();
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
