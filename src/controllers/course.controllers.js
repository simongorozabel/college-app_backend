const catchError = require("../utils/catchError");
const Course = require("../models/Course");
const Student = require("../models/Student");
const Test = require("../models/Test");

const getAll = catchError(async (req, res) => {
  const results = await Course.findAll({ include: [Student, Test] });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Course.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Course.findByPk(id, { include: [Student, Test] });
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Course.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Course.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const setCourseStudents = catchError(async (req, res) => {
  const { id } = req.params;
  const course = await Course.findByPk(id);
  if (!course)
    return res.status(404).json({ message: "Course does not exist." });
  await course.setStudents(req.body);
  const students = await course.getStudents();
  return res.json(students);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setCourseStudents,
};
