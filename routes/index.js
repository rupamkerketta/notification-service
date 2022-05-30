const ticketNotificationRouter = require('./ticket-notification.routes')

module.exports = (app) => {
	// Route test
	app.get('/api/v1', (req, res) => {
		res.send({ message: 'Notification Service - route test' })
	})

	app.use('/api/v1/notifications', ticketNotificationRouter)
}
