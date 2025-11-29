const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const AddressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  fullAddress: { type: String, required: true },
  pincode: { type: String, required: true },
  phone: { type: String, required: true }
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    address: {
      type: [AddressSchema],
      default: []
    }
  },
  { timestamps: true }
);

UserSchema.methods.getJwt = async function () {
  return jwt.sign({ _id: this._id }, "Ecommerce77", { expiresIn: "1d" });
};

module.exports = mongoose.model("User", UserSchema);

