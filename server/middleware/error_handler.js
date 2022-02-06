const mongoose = require("mongoose");
const { ValidationError, CastError } = mongoose.Error;
const { Error400 } = require("../utils/case_error");

module.exports = (err, req, res, next) => {
	if (err instanceof ValidationError) {
		return res
			.status(400)
			.send({ error: "mongoose validation error", data: err });
	}

	if (err instanceof CastError) {
		return res.status(400).send({ error: "mongoose cast error", data: err });
	}

	if (err instanceof Error400)
		return res.status(400).send({ error: err.message, data: err });

	res.status(err.status || 500).send({ error: "Unhandled!", data: err.message });
};
