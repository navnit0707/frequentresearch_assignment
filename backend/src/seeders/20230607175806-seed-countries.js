"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Countries", [
      { name: "United States", createdAt: new Date(), updatedAt: new Date() },
      { name: "India", createdAt: new Date(), updatedAt: new Date() },
      { name: "United Kingdom", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
