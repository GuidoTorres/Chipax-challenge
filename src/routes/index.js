const express = require("express");
const router = express.Router();
const mergeData = require("../controllers/mergeData")

router.get("/", mergeData)

module.exports = router