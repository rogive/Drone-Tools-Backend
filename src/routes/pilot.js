const router = require('express').Router()
const pilotController = require('../controllers/pilot.controller')

router.route("/list").get(pilotController.list)
router.route("/list/:id").get(pilotController.find)
router.route("/register").post(pilotController.signup)
router.route("/login").post(pilotController.signin)
router.route("/update/:id").put(pilotController.update)
router.route("/delete/:id").delete(pilotController.destroy)

module.exports = router