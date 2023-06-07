const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const db = require("./models/index");

const UserRepository = require("./repository/userdetails-repository");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);

    const repo = new UserRepository();
    const data = {
      firstName: "Navnit",
      lastName: "Kumar",
      email: "navnit@gmail.com",
      country: "India",
      state: "Kerala",
      city: "Kozhikode",
      gender: "male",
      dateOfBirth: "1990-05-15",
    };
    try {
      await repo.createUser(data); // Await the createUser function call
      console.log("User created successfully.");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  });
};

setupAndStartServer();
