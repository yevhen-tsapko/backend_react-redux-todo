const controllers = require("../../controllers");
const express = require("express");

const router = express.Router();

router.post("/login", controllers.login);
router.post("/register", controllers.register);

module.exports = router;
