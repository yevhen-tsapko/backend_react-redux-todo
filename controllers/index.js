const register = require("./register");
const login = require("./login");
const contrsWrapper = require("../helpers/contrsWrapper");

module.exports = {
  register: contrsWrapper(register),
  login: contrsWrapper(login),
};
