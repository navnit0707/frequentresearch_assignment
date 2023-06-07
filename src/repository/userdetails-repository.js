const { UserDetail } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      console.log(data);
      const user = await UserDetail.create(data);
      return user;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserRepository;
