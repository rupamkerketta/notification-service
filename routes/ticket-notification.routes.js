const express = require('express')
const router = express.Router()

const notificationController = require('../controllers/notification.controller')

router.route('/:ticketId').get(notificationController.getNotificationStatus)

router.route('/').post(notificationController.notificationRequest)

module.exports = router
