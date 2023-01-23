const { Schema, model } = require("mongoose");
const utility = require("../helper/utility").encodedString;

const usersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      default: false,
    },
    userContactNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//encrypting password before saving
usersSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();
  user.password = utility(user.password);
  next();
});

module.exports = model("Users", usersSchema);
