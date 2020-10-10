const sequelize = require("./database/connection");
const express = require('express');
const cors = require('cors');
const pilotRouter = require("./routes/pilot");
const projectRouter = require("./routes/project");
const app = express();

app.use(express.json());
app.use(cors());
sequelize.sync();
//sequelize.sync({ force: true });

app.use("/pilot", pilotRouter);
app.use("/pilot/project", projectRouter);

module.exports = app;