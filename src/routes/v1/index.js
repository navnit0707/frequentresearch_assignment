const express = require("express");
const UserController = require("../../controllers/userdetails-controllers");

const router = express.Router();
router.post("/createuser", UserController.create);

module.exports = router;
