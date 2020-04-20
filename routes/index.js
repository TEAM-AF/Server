"use strict";

const apiController = require("../controllers/");
const express = require("express");
const router = express.Router();

router.get("/dolar", apiController.getDollarData);
router.get("/dolar/:date", apiController.getDollarDataDate);
router.use(apiController.error404);

module.exports = router;