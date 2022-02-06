class Error400 extends Error {
	constructor(message) {
		super(message);
		this.name = "Error400";
		this.statusCode = 400;
		Error.captureStackTrace(this, this.constructor);
	}
}

exports.Error400 = Error400;
