require("rootpath")();

// Loading dependencies
const config = require("config");
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");
const express = require("express");
const app = express();

// Loading helpers
const errorHandler = require("helpers/error-handler");

// Initializing server app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

// Setting routes
app.use("/generate", require('modules/generator/generator.controller'));

// Starting server app
app.listen(config.port, () => {
  console.log(colors.green("Server listening at http://localhost:" + config.port));
});
