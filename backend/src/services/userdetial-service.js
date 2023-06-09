const { UserRepository } = require("../repository/index");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getUser() {
    try {
      const user = await this.userRepository.getUser();
      return user;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}
module.exports = UserService;
