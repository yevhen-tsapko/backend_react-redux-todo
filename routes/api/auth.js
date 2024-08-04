const controllers = require("../../controllers");
const express = require("express");
const auth = require("../../midelvares/auth");

const router = express.Router();

router.post("/login", controllers.login);
router.post("/register", controllers.register);
router.post("/logout", auth, controllers.logout);
router.post("/refresh", controllers.refresh);

module.exports = router;
