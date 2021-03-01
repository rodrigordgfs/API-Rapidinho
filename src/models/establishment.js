"use strict";

const Sequelize = require("sequelize");
const instance = require("../database/connection");

const columns = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  establishment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  latitude: {
    type: Sequelize.DECIMAL(8, 6),
    allowNull: false,
  },
  longitude: {
    type: Sequelize.DECIMAL(8, 6),
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
  tableName: "establishment",
  timestamp: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  version: "version",
};

module.exports = instance.define("establishment", columns, options);
