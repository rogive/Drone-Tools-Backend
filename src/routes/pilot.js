const router = require('express').Router()
const pilotController = require('../controllers/pilot.controller')

router.route("/list").get(pilotController.list)
router.route("/create").post(pilotController.create)

module.exports = router