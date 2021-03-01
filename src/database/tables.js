"use strict";

const establishment = require("../models/establishment");

establishment
  .sync()
  .then(() => {
    console.log("Table ESTABLISHMENT created succesfully!");
  })
  .catch((e) => {
    console.error(e);
  });
