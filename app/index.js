const express = require('express')
const app = express()

const errorHandlerMiddleware = require('../middlewares/error-handler')
const notFoundMiddleware = require('../middlewares/not-found')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'production') {
	const morgan = require('morgan')
	const responseTime = require('response-time')

	app.use(morgan('common'))
	app.use(responseTime())
}

// API routes
require('../routes')(app)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

module.exports = app
