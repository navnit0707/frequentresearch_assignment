const express = require("express");
const UserController = require("../../controllers/userdetails-controllers");

const CountryController = require("../../controllers/countryData-controller");

const router = express.Router();
router.post("/createuser", UserController.create);
router.get("/getuser", UserController.get);

router.get("/country", CountryController.getAllCountries);

router.get("/state", CountryController.getAllStates);

router.get("/city", CountryController.getAllCities);

module.exports = router;
