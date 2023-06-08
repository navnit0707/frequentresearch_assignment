"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, { foreignKey: "stateId" });
      City.belongsTo(models.Country, {
        through: models.State,
        foreignKey: "countryId",
      });
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "City",
    }
  );

  return City;
};
