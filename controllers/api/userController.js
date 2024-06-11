const User = require('../../models/User'); 

async function getUsers(req, res) {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({
      name,
      email,
      password
    });
    await newUser.save();
    return res.json({ user: newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { username } = req.params;
    const updatedUser = await User.findOneAndUpdate(
      { username },
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


async function removeUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({ user: deletedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getUsers, updateUser, addUser, removeUser };