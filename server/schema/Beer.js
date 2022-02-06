const mongoose = require("mongoose");
const Joi = require("joi");
const { Error400 } = require("../utils/case_error");

const BeerSchema = mongoose.Schema(
    {
        uid: {
            type: String
        },
        brand: {
            type: String
        },
        name: {
            type: String
        },
        style: {
            type: String
        },
        hop: {
            type: String
        },
        yeast: {
            type: String
        },
        malts: {
            type: String
        },
        ibu: {
            type: String
        },
        alcohol: {
            type: String
        },
        blg: {
            type: String
        },
        randomCount: {
            type: Number,
            default: 0
        }
    },
    { collection: "beer" }
);

BeerSchema.methods.joiValidate = (obj) => {
    const schema = Joi.object({
        uid: Joi.string().guid().required(),
        brand: Joi.string().required(),
        name: Joi.string().required(),
        style: Joi.string().required(),
        hop: Joi.string().required(),
        yeast: Joi.string().required(),
        malts: Joi.string().required(),
        ibu: Joi.string().required(),
        alcohol: Joi.string().required(),
        blg: Joi.string().required()
    });
    const validate = schema.validate(obj);
    if (validate.error) throw new Error400(validate.error.message);
};

BeerSchema.index({ uid: 1 }, { unique: true });
module.exports = mongoose.model("beer", BeerSchema);
