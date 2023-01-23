const USERMODEL = require("../model/user.model");
const { decodedString } = require("../helper/utility");
const { v4: uuidv4 } = require("uuid");

const userRegister = async (req, res, next) => {
  try {
    const { userName, userEmail, userContactNumber, password } = req.body;

    const userData = await USERMODEL.findOne({ userEmail });
    if (userData) {
      return res
        .status(502)
        .json({ error: true, message: "Email id already exist." });
    }

    const uuid = uuidv4();

    const data = await USERMODEL({
      userId: uuid,
      userName,
      userEmail,
      userContactNumber,
      password,
    }).save();
    if (data) {
      res.status(200).json({
        error: false,
        message: "User registration successful",
        data,
      });
    } else {
      res.status(502).json({
        error: true,
        message: "Operation failed.",
      });
    }
  } catch (err) {
    next(err);
  }
};

const authenticate = async (req, res, next) => {
  try {
    const { userEmail, password } = req.body;

    const user = await USERMODEL.findOne({
      userEmail,
    });
    if (!user) {
      return res.status(502).json({ error: true, message: "User not found." });
    }

    if (password !== decodedString(user.password)) {
      return res
        .status(502)
        .json({ error: true, message: "Invalid credentials." });
    }

    res.status(200).json({
      error: false,
      message: "User login successfull.",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { userRegister, authenticate };
