const router = require('express').Router()
const projectController = require('../controllers/project.controller')

router.route("/list").get(projectController.list)
router.route("/create").post(projectController.create)

module.exports = router