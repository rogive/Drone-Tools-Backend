const router = require('express').Router()
const flightpermitController = require('../controllers/flightpermit.controller')

router.route("/list").get(flightpermitController.list)
router.route("/listbypilot/:id").get(flightpermitController.listbypilot)
router.route("/create").post(flightpermitController.create)
router.route("/delete/:id").delete(flightpermitController.destroy)
router.route("/deleteandlist/:id").delete(flightpermitController.destroyandlist)
module.exports = router