"use strict";

require("./server/config/config");
const express = require("express");
const app = express();
const routes = require("../Server/routes/");

app.set("port", process.env.PORT).use(routes);

module.exports = app;