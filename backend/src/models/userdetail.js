"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class UserDetail extends Model {
    // No associations to define
  }
  UserDetail.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      gender: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
