"use strict";

const model = require("../models/establishment");

module.exports = {
  get() {
    return model.findAll({ where: { active: true } });
  },

  async getByID(id) {
    const data = await model.findOne({ where: { id: id } });
    if (!data) {
      throw new Error("Estabelecimento não encontrado!");
    } else if (!data.active) {
      throw new Error("Estabelecimento desativado!");
    }
    return data;
  },

  post(data) {
    return model.create(data);
  },

  patch(id, data) {
    return model.update(data, { where: { id: id } });
  },

  delete(id) {
    return model.destroy({ where: { id: id } });
  },
};
