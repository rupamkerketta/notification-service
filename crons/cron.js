const cron = require('node-cron')
const Notification = require('../models/notification.model')
const constants = require('../utils/constants')
const emailTransporter = require('../notifier/email-service')

cron.schedule('*/2 * * * * *', async () => {
	// I need to send emails here
	// 1. Get the list of all the notifications to be sent
	// 2. Send email for each notifications

	const notifications = await Notification.find({
		sentStatus: constants.sentStatuses.un_sent
	})

	if (notifications.length !== 0) {
		notifications.forEach((notification) => {
			const mailDataObj = {
				from: 'generic-notification-service@gmail.com',
				to: notification.recepientEmails.join(','),
				subject: notification.subject,
				text: notification.content
			}

			emailTransporter.sendMail(mailDataObj, async (err, info) => {
				if (err) {
					console.log('Some error happend!')
				} else {
					// update the status
					const _notification = await Notification.findOne({
						_id: notification._id
					})
					_notification.sentStatus = constants.sentStatuses.sent
					await _notification.save()
				}
			})
		})
	}
})
