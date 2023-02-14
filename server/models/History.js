const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedHistory` array in User.js
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
  link: {
    type: String,
  },
});

module.exports = historySchema;
