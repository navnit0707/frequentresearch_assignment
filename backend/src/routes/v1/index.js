const express = require("express");
const UserController = require("../../controllers/userdetails-controllers");

const router = express.Router();
router.post("/createuser", UserController.create);
router.get("/getuser", UserController.get);

module.exports = router;
