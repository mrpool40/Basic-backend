const mongoose = require("mongoose");


//Schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
},
{
  timestamps: true
});


//Model
const User = mongoose.model("User", userSchema);

module.exports = User;