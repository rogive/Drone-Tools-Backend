const Project = require('../models/project.model')
require("dotenv").config()

module.exports = {
  async list(req, res) {
    try {
      const projects = await Project.findAll()
      res.status(200).json(projects)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async listbypilot(req, res) {
    try {
      const { id } = req.params
      const projects = await Project.findAll({
        where: { PilotId: id },
      })
      res.status(200).json(projects)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async create(req, res) {
    try {
      const data = req.body
      const projects = await Project.create(data)
      res.status(200).json(projects)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async find(req, res) {
    try {
      const { id } = req.params
      const project = await Project.findByPk(id)

      if (!project) {
        throw Error("El proyecto no existe")
      }

      res.status(200).json({ project })
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
      const [updated] = await Project.update(data, { where: { id } })
      if (updated) {
        res.status(200).json(data)
      }
      res.status(200).json({
        message: `No se encontro el proyecto con id: ${id}`
      })
    } catch (err) {
      res.status(400).json(err)
    }
  },  
  async destroy(req, res) {
    try {
      const { id } = req.params
      const project = await Project.findByPk(id)
      const projectDeleted = await project.destroy()
      res.status(200).json(project)
    } catch (err) {
      res.status(400).json(err)
    }
  },
  async destroyandlist(req, res) {
    try {
      const { id } = req.params
      const project = await Project.findByPk(id, { include: { all: true }})
      const pilotId = project.Pilot.dataValues.id
      const projectDeleted = await project.destroy()
      const projects = await Project.findAll({ where: { PilotId: pilotId }})
      res.status(200).json(projects)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}