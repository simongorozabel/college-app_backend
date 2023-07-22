const Student = require("./Student.js");
const Course = require("./Course");
const Test = require("./Test.js");
const Score = require("./Score.js");

Course.belongsToMany(Student, { through: "CourseStudent" });
Student.belongsToMany(Course, { through: "CourseStudent" });

Test.belongsTo(Course);
Course.hasMany(Test);

Score.belongsTo(Student);
Student.hasMany(Score);

Score.belongsTo(Test);
Test.hasMany(Score);
