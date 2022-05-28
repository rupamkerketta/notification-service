const mongoose = require('mongoose')
const constants = require('../utils/constants')

const notificationSchema = mongoose.Schema({
	subject: {
		type: String,
		required: true
	},
	ticketId: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	recepientEmails: {
		type: [String],
		required: true
	},
	requester: {
		type: String
	},
	sentStatus: {
		type: String,
		required: true,
		default: constants.sentStatuses.un_sent // SENT or UN_SENT
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now()
	},
	updatedAt: {
		type: Date,
		immutable: true,
		default: () => Date.now()
	}
})

module.exports = mongoose.model('Notification', notificationSchema)
