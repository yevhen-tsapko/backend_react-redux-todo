const createSessionAndTokens = require("../helpers/createNewSessionAndToken");
const User = require("../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || password !== user.password) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }
  const tokens = await createSessionAndTokens(user.id);
  return res.status(200).json({ ...user._doc, ...tokens });
};
module.exports = login;
