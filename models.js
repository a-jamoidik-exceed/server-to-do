const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TodosSchema = new Schema({
  done: { type: Boolean, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model("Todo", TodosSchema);
