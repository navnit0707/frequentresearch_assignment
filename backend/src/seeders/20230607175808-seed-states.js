"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("States", [
      // States for United States
      {
        name: "California",
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Texas",
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New York",
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // States for India
      {
        name: "Maharashtra",
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajasthan",
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kerala",
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // States for United Kingdom
      {
        name: "England",
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scotland",
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wales",
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("States", null, {});
  },
};
