require("dotenv").config({ path: "config.env" });

const app = require("./app.js");


// Define PORT & other variables in 'config.env' file.
app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
