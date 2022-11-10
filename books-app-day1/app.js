require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

app.locals.appTitle = `bookaria_`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

require("./error-handling")(app);

module.exports = app;
