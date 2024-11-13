const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
// const authenticateToken = require("../middlewares/authenticationMiddleware");

router.get("/profile", profileController.Profile);

module.exports = router;
