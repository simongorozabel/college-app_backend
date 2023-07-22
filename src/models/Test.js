const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Test = sequelize.define("test", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  //courseId ==> llave foránea ==> Test.belongsTo(Course) ==> Course.hasMany(Test) ==> ./models/index.js
});

module.exports = Test;
