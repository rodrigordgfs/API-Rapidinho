"use strict";

const model = require("../models/establishment");

module.exports = {
  post(data) {
    return model.create(data);
  },
};
