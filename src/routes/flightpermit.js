const router = require('express').Router()
const flightlogController = require('../controllers/flightlog.controller')

router.route("/list").get(flightlogController.list)
router.route("/listbypilot/:id").get(flightlogController.listbypilot)
router.route("/create").post(flightlogController.create)
router.route("/delete/:id").delete(flightlogController.destroy)
router.route("/deleteandlist/:id").delete(flightlogController.destroyandlist)
module.exports = router