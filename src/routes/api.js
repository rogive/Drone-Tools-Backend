const router = require('express').Router()
const paymentController = require('../controllers/pilot.controller')

router.route("/pilot").get(paymentController.list)
router.route("/pilot").post(paymentController.create)

module.exports = router