const User = require("../models/user");

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.status(409).json({ message: "Email in use" });
  }
  const newUser = await User.create({ email, password, name });
  const token = createToken(password);
  return res.status(200).json({ ...newUser, token });
};
module.exports = register;
