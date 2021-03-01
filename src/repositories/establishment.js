"use strict";

const model = require("../models/establishment");

module.exports = {
  get() {
    return model.findAll();
  },

  post(data) {
    return model.create(data);
  },
};
