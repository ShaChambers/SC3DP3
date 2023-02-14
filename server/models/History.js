const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const historySchema = new Schema({
  person: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // fact id from db of BH facts
  factId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = bookSchema;
