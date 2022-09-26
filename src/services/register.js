const Users = require("../model/user");

module.exports = async (output) => {
  try {
    const { firstname, lastname, username, email } = output.value;

    const existUsername = await Users.findOne({
      where: { username: username },
    });
    if (existUsername) {
      throw new Error("username ซ้ำ");
    }
    const newUser = new Users({
      firstname,
      lastname,
      username,
      email,
      hash: "1234",
      role: "USER",
      status: "ACTIVE",
      loggedInTimestamp: new Date().toISOString(),
      latestResetTimestamp: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    const saveUser = await newUser.save();

    return saveUser;
  } catch (error) {
    console.log(error);
  }
};
