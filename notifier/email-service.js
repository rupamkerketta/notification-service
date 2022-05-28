// This file will have the logic to send the emails
const nodemailer = require('nodemailer')
const config = require('config')

// I need to setup the nodemailer for sending the emails
// smtp host details
// credentials if needed

module.exports = nodemailer.createTransport({
	port: 465,
	host: 'smtp.gmail.com',
	auth: {
		user: config.get('emailConfig.user'),
		pass: config.get('emailConfig.pass')
	},
	secure: true
})
