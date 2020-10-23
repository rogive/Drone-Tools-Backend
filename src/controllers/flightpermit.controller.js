const Flightlog = require('../models/flightlog.model')
require("dotenv").config()

module.exports = {
  async list(req, res) {
    try {
      const flightlogs = await Flightlog.findAll()
      res.status(200).json(flightlogs)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async listbypilot(req, res) {
    try {
      const { id } = req.params
      const flightlogs = await Flightlog.findAll({
        where: { PilotId: id },
      })
      res.status(200).json(flightlogs)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async create(req, res) {
    try {
      const data = req.body
      const flightlogs = await Flightlog.create(data)
      res.status(200).json(flightlogs)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async find(req, res) {
    try {
      const { id } = req.params
      const flightlog = await Flightlog.findByPk(id)

      if (!flightlog) {
        throw Error("El registro no existe")
      }

      res.status(200).json({ flightlog })
    } catch (err) {
      res
        .status(401)
        .json(err)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const data = req.body
      const [updated] = await Flightlog.update(data, { where: { id } })
      if (updated) {
        res.status(200).json(data)
      }
      res.status(200).json({
        message: `No se encontro el registro con id: ${id}`
      })
    } catch (err) {
      res.status(400).json(err)
    }
  },  
  async destroy(req, res) {
    try {
      const { id } = req.params
      const flightlog = await Flightlog.findByPk(id)
      const flightlogDeleted = await Flightlog.destroy()
      res.status(200).json(flightlog)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async destroyandlist(req, res) {
    try {
      const { id } = req.params
      const flightlog = await Flightlog.findByPk(id, { include: { all: true }})
      const pilotId = flightlog.Pilot.dataValues.id
      const flightlogDeleted = await Flightlog.destroy()
      const flightlogs = await Flightlog.findAll({ where: { PilotId: pilotId }})
      res.status(200).json(flightlogs)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}