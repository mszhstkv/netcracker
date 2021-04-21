const { Schema, model } = require("mongoose");

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  position: { type: String, required: true },
});

module.exports = model("User", schema);
