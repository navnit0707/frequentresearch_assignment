const { UserDetail } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      console.log(data);
      const user = await UserDetail.create(data);
      return user;
    } catch (error) {
      console.log("Something wrong in the user details repo ");
      throw { error };
    }
  }
  async getUser() {
    try {
      console.log();
      const user = await UserDetail.findAll();
      return user;
    } catch (error) {
      console.log("Something wrong in the user details repo ");
      throw { error };
    }
  }
}

module.exports = UserRepository;
