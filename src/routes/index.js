const express = require("express");
const studentRouter = require("./student.router");
const courseRouter = require("./course.router");
const testRouter = require("./test.router");
const scoreRouter = require("./score.router");
const router = express.Router();

// colocar las rutas aquí
router.use("/students", studentRouter);

router.use("/courses", courseRouter);

router.use("/tests", testRouter);

router.use("/scores", scoreRouter);

module.exports = router;
