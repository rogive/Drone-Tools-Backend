const Project = require('../models/project.model');
require("dotenv").config();

module.exports = {
  async list(req, res) {
    try {
      const projects = await Project.findAll()
      res.status(200).json(projects);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async create(req, res) {
    try {
      const data = req.body;      
      const projects = await Project.create(data);
      res.status(200).json(projects);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}