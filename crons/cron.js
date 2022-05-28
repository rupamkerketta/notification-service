const cron = require('node-cron')

cron.schedule('*/2 * * * * *', () => {
	// I need to send emails here
	// 1. Get the list of all the notifications to be sent
	// 2. Send email for each notifications
})
