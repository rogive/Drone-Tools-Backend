const router = require('express').Router()
const projectController = require('../controllers/project.controller')

router.route("/list").get(projectController.list)
router.route("/listbypilot/:id").get(projectController.listbypilot)
router.route("/create").post(projectController.create)
router.route("/delete/:id").delete(projectController.destroy)
router.route("/deleteandlist/:id").delete(projectController.destroyandlist)
module.exports = router