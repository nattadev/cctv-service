const express = require("express");
const db = require("./config/database");

db.authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("Eror : " + err));

const app = express();

const helloRouter = require("./route/user");

app.use("/", helloRouter);

app.listen(5050, () => console.log("Server started in port", 5050));
