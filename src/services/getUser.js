const Users = require("../model/user");

module.exports = class User {
  UserGetAll = async () => {
    try {
      const UserGetAll = await Users.findAll();

      return UserGetAll;
    } catch (error) {
      console.log(error);
      res.json({ error: true, users: null });
    }
  };

  UserGet = async (output) => {
    try {
    
      const UserGetID = await Users.findByPk(output.value);

      return UserGetID;
    } catch (error) {
      console.log(error);
      res.json({ error: true, users: null });
    }
  };
};
