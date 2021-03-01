"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const indexRoute = require("./routes/index");
const establishmentRoute = require("./routes/establishment");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api-rapidinho/", indexRoute);
app.use("/api-rapidinho/establishment", establishmentRoute);

module.exports = app;
