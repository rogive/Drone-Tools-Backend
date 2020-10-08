const sequelize = require("./database/connection");
const express = require('express');
const cors = require('cors');
/* const apiRouter = require("./routes/api"); */
const app = express();

app.use(express.json());
app.use(cors());
sequelize.sync({ force: true });

/* app.use("/api", apiRouter); */

module.exports = app;