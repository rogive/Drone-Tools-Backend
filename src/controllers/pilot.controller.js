const Pilot = require('../models/pilot.model');
require("dotenv").config();

module.exports = {
  async list(req, res) {
    try {
      const pilots = await Pilot.findAll()
      res.status(200).json(pilots);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async create(req, res) {
    try {
      const data = req.body;      
      const pilots = await Pilot.create(data);
      res.status(200).json(pilots);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}