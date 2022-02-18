const userCtrl = {};

const UserModel = require('../models/User');

userCtrl.getUsers = async (req, res) => {

  const users = await UserModel.find();

  res.json(users);

};

userCtrl.postUser = async (req, res) => {

  const { username } = req.body;

  const newUser = new UserModel({ username });

  const createdUser = await newUser.save();

  res.json(`New user ${createdUser.username} was created succes`);

};

userCtrl.deleteUser = async (req, res) => {

  const { id } = req.params;

  const deletedUser = await UserModel.findByIdAndDelete(id);

  res.json({ responce: `${deletedUser.username} was deleted succesfully` });

};

module.exports = userCtrl;
