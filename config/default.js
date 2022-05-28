if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

module.exports = {
	serverConfig: {
		port: process.env.PORT
	},
	emailConfig: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	},
	dbConfig: {
		url: process.env.DB_URL
	}
}
