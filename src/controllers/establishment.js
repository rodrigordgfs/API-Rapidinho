"use strict";

const Establishment = require("../serializers/establishment");
const repository = require("../repositories/establishment");

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: "Failed to process the request",
      error: e,
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    const body = req.body;
    const establishment = new Establishment(body);
    await establishment.post();
    res.status(201).send(establishment);
  } catch (e) {
    res.status(400).send({
      message: "Failed to process the request",
      error: e,
    });
  }
};
