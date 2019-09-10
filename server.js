const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.set("useFindAndModify", false);
let dev_db_url = "mongodb://localhost:27017/to-do";
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

app.listen(5000, () => {
  console.log("Server is up");
});
