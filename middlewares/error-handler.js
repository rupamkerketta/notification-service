const { StatusCodes } = require('http-status-codes')
const CustomApiError = require('../errors/custom-api-err')

const errorHandlerMiddleware = (err, req, res, next) => {
	console.log(err)
	if (err instanceof CustomApiError) {
		return res.status(err.statusCode).send({ message: err.message })
	}

	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
		message: 'Something went wrong! Please try again later.'
	})
}

module.exports = errorHandlerMiddleware
