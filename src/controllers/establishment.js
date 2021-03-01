"use strict";

const Establishment = require("../serializers/establishment");
const repository = require("../repositories/establishment");

exports.get = async (req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
};

exports.getByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const establishment = new Establishment({ id: id });
    await establishment.getByID();
    res.status(200).send(establishment);
  } catch (e) {
    res.status(404).send({
      message: e.message,
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
      message: e.message,
    });
  }
};

exports.patch = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = Object.assign({}, body, { id: id });
    const establishment = new Establishment(data);
    await establishment.patch();
    res.status(204).end();
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const establishment = new Establishment({ id: id });
    await establishment.delete();
    res.status(204).end();
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
};
