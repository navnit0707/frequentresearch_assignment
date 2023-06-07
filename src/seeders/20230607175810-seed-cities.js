"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Cities", [
      // Cities for United States
      {
        name: "Los Angeles",
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "San Francisco",
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "San Diego",
        stateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Houston",
        stateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Austin",
        stateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dallas",
        stateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New York City",
        stateId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Buffalo",
        stateId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Albany",
        stateId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Cities for India
      {
        name: "Mumbai",
        stateId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pune",
        stateId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nagpur",
        stateId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jaipur",
        stateId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Udaipur",
        stateId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jodhpur",
        stateId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kochi",
        stateId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thiruvananthapuram",
        stateId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kozhikode",
        stateId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Cities for United Kingdom
      {
        name: "London",
        stateId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manchester",
        stateId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Birmingham",
        stateId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Edinburgh",
        stateId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Glasgow",
        stateId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aberdeen",
        stateId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cardiff",
        stateId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Swansea",
        stateId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Newport",
        stateId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
