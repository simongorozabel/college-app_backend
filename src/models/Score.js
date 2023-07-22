const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Score = sequelize.define("score", {
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //studentId
  //testId
});

module.exports = Score;
