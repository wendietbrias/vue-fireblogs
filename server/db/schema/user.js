const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 4,
  },
  lastName: String,
  firstName: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
