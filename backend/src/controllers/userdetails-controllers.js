const { UserService } = require("../services/index");

const userService = new UserService();
const create = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      data: user,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log("Something is wrong at controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const user = await userService.getUser();
    return res.status(201).json({
      data: user,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log("Something is wrong at controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get city",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
};
