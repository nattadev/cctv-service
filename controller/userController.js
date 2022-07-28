const  UserModel = require('../model/user')


exports.index = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json({ error: false, users });
  } catch (error) {
    console.log(error);
    res.json({ error: true, users: null });
  }
};
