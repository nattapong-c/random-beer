
const router = (module.exports = require("express").Router());
const controller = require("../controller/beer");

router.post("/", controller.createBeer);

router.get("/random", controller.getBeer);