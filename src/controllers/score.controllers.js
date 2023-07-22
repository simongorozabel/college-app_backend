const catchError = require("../utils/catchError");
const Score = require("../models/Score");
const Test = require("../models/Test");
const Student = require("../models/Student");

const getAll = catchError(async (req, res) => {
  const results = await Score.findAll({ include: [Test, Student] });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Score.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Score.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Score.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Score.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
