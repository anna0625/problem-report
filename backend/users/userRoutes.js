const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("./userController");
const { protect } = require("./authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/me", protect, getMe);

module.exports = router;
