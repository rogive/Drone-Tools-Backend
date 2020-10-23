const Flightpermit = require('../models/flightpermit.model')
require("dotenv").config()

module.exports = {
  async list(req, res) {
    try {
      const flightpermits = await Flightpermit.findAll()
      res.status(200).json(flightpermits)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async listbypilot(req, res) {
    try {
      const { id } = req.params
      const flightpermits = await Flightpermit.findAll({
        where: { PilotId: id },
      })
      res.status(200).json(flightpermits)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async create(req, res) {
    try {
      const data = req.body
      const flightpermits = await Flightpermit.create(data)
      res.status(200).json(flightpermits)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async find(req, res) {
    try {
      const { id } = req.params
      const flightpermit = await Flightpermit.findByPk(id)

      if (!flightpermit) {
        throw Error("El registro no existe")
      }

      res.status(200).json({ flightpermit })
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
      const [updated] = await Flightpermit.update(data, { where: { id } })
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
      const flightpermit = await Flightpermit.findByPk(id)
      const flightpermitDeleted = await Flightpermit.destroy()
      res.status(200).json(flightpermit)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async destroyandlist(req, res) {
    try {
      const { id } = req.params
      const flightpermit = await Flightpermit.findByPk(id, { include: { all: true }})
      const pilotId = flightpermit.Pilot.dataValues.id
      const flightpermitDeleted = await Flightpermit.destroy()
      const flightpermits = await Flightpermit.findAll({ where: { PilotId: pilotId }})
      res.status(200).json(flightpermits)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}