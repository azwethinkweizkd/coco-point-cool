const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  review: {
    type: String,
    required: true,
    maxlength: 500,
  },
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
