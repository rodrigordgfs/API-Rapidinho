"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/establishment");

console.log(router.toString);

router.post("/", controller.post);
router.get("/", controller.get);
router.get("/:id", controller.getByID);
router.patch("/:id", controller.patch);
router.delete("/:id", controller.delete);

module.exports = router;
