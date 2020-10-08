const router = require('express').Router()
const pilotController = require('../controllers/pilot.controller')

router.route("/pilot").get(pilotController.list)
router.route("/pilot").post(pilotController.create)

module.exports = router