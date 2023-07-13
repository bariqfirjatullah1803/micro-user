const express = require("express");
const router = express.Router();

const refreshTokensHandler = require("./handler/refresh-tokens");
const { route } = require("./users");

router.post("/", refreshTokensHandler.create);
router.get("/", refreshTokensHandler.getToken);

module.exports = router;
