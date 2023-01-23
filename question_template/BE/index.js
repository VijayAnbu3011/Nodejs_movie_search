const express = require("express");
require("dotenv").config();
const config = require("./config/index");
const { db } = require("./helper/dbConnect");
const router = require("./routes/routes").routes();

const app = express();
const expressServer = async () => {
  db.connect(config.database.url, config.database.option);

  //CORS handling
  app.all("/*", (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "*");
    response.header("Access-Control-Expose-Headers", "*");
    response.header(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH"
    );
    response.header("Access-Control-Allow-Credentials", true);
    next();
  });

  app.use(express.urlencoded({ extended: true, limit: "20mb" }));
  app.use(express.json({ limit: "20mb" }));

  app.use("/", router);

  app.use((err, req, res, next) => {
    res.status(500).json({ error: true, message: err.message });
  });
  app.listen(process.env.PORT, () => {
    console.log(`app running on port number:${process.env.PORT}`);
  });
};

expressServer();
module.exports = app;
