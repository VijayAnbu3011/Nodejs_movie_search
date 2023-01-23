require("dotenv").config();
const config = {
  database: {
    url: process.env.MONGOURL,
    option: {
      user: "",
      pass: "",
      autoIndex: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  },
  encryption: {
    secret: "DUMMYSECRETKEY",
  },
};
module.exports = config;
