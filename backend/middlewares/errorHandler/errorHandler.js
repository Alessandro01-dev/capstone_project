const HttpException = require('../../exceptions')
const mongoose = require('mongoose')

const errorHandler = (err, req, res, next) => {

  if (err.code === 11000) {
    return res.status(409).json({
      statusCode: 409,
      message: 'User is already a tutor (Duplicate Record)',
      error: 'CONFLICT_ERROR'
    })
  }

  if (err.message === 'User is already a tutor' || err.message === 'User record already exists') {
    return res.status(409).json({
      statusCode: 409,
      message: err.message,
      error: 'CONFLICT_ERROR'
    })
  }

  if (err instanceof HttpException) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      error: err.error
    })
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Invalid or malformed ObjectId',
      error: err.message
    })
  }

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      statusCode: 400,
      message: 'One or more fields failed validation',
      error: err.errors
    })
  }

  if (err instanceof mongoose.Error.DocumentNotFoundError) {
    return res.status(404).json({
      statusCode: 404,
      message: "Mongoose error: Document not found",
      error: err.error,
    })
  }

  if (err.code?.startsWith('LIMIT_')) {
    return res.status(400).json({
      statusCode: 400,
      message: 'File upload error: file too large (max 5MB)',
      error: err.code
    })
  }

  if (err.message.includes('This file format is not supported. Upload only PDFs or images.')) {
    return res.status(400).json({
      statusCode: 400,
      message: err.message,
      error: 'UNSUPPORTED_FORMAT'
    })
  }

  return res.status(500).json({
    statusCode: 500,
    message: 'Internal Server Error',
    error: 'UNEXPECTED_ERROR'
  })
}

module.exports = errorHandler