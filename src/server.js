const app = require("./app");
const sequelize = require("./utils/connection");
require("./models");

const PORT = process.env.PORT || 8080;
//{alter:true} if there are errors while changing some things on the data base creation
const main = async () => {
  try {
    sequelize.sync();
    console.log("DB connected");
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
