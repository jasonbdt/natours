class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.message = message;
    this.name = 'AppError';
    this.code = 10000;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
