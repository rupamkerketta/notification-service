const mongoose = require('mongoose')
const config = require('config')

// Database connection string
const dbUrl = config.get('dbConfig.url')

const dbConnect = async (app) => {
	try {
		await mongoose.connect(dbUrl)
		console.log('[mongodb] Connected to the database successfully!')
		app()
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

module.exports = dbConnect
