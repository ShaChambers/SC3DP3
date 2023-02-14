const { Schema, model } = require("mongoose");

const historySchema = new Schema({
  person: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});
const History = model("History", historySchema);

module.exports = History;
