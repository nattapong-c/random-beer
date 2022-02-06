require("../config_env");
const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            autoIndex: false
        });
    } catch (err) {
        console.log("error to ", process.env.MONGO_CONNECTION_STRING)
        throw new Error(err);
    }
};

exports.disconnectDB = async () => {
    try {
        await mongoose.disconnect();
    } catch (err) {
        throw new Error(err);
    }
};