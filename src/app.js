const sequelize = require("./database/connection");
const express = require('express');
const cors = require('cors');
const apiRouter = require("./routes/pilot");
const app = express();

app.use(express.json());
app.use(cors());
sequelize.sync({ force: true });

app.use("/pilot", apiRouter);

module.exports = app;