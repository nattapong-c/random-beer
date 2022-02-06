const { Error400 } = require("../utils/case_error");

module.exports.createBeer = async (req, res) => {
    const beer = new req.db.Beer(req.body);
    beer.joiValidate(req.body);

    try {
        const created = await beer.save();
        return res.send({
            message: "create beer success",
            data: created
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).send({
                error: "duplicate uid",
                message: err.message
            });
        }
        throw new Error400(err.message);
    }
};

module.exports.getBeer = async (req, res) => {
    const random = await req.db.Beer.aggregate([
        { $sample: { size: 1 } }
    ]);

    if (!random.length) return res.status(400).send({ error: "no beer data" });

    const beer = await req.db.Beer.findOneAndUpdate(
        { uid: random[0].uid },
        { $inc: { randomCount: 1 } },
        { new: true, fields: { __v: false } }
    );

    return res.send(beer);
};