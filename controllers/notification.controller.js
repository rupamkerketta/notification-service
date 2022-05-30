// Controller for the notification resource
const Notification = require('../models/notification.model')
const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/not-found-err')

exports.notificationRequest = async (req, res) => {
	const { subject, content, recepientEmails, requester, ticketId } = req.body
	const notificationObj = {
		subject,
		content,
		recepientEmails,
		requester,
		ticketId
	}

	const notification = await Notification.create(notificationObj)

	res.status(StatusCodes.CREATED).send({
		requestId: notification.ticketId,
		status: `Request Accepted - it's in progress`
	})
}

// :TODO: Check the notification status ( if email is sent or not )
// using the trackingId
exports.getNotificationStatus = async (req, res) => {
	const { ticketId } = req.params

	const ticketNotification = await Notification.findOne({ ticketId })
	if (!ticketNotification) {
		throw new NotFoundError(
			`Notification not found for the given ticketId: ${ticketId}`
		)
	}

	res.status(StatusCodes.OK).send({
		ticketId: ticketNotification.ticketId,
		sentStatus: ticketNotification.sentStatus
	})
}
