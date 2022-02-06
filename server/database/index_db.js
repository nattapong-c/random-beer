require("../config_env");
const mongoose = require("mongoose");
const models = require("../middleware/schema_injection").db;
const { connectDB } = require("./mongo");

const indexDB = async () => {
    var collectionName = null;
    try {
        const schemas = Object.keys(models);
        for (let schema of schemas) {
            collectionName = schema;
            await models[schema].ensureIndexes();
        }
        await mongoose.disconnect();
    } catch (e) {
        console.error(`collection: ${collectionName}`);
        console.error(e);
        process.exit();
    }
};

(async () => {
    if (require.main === module) {
        await connectDB();
        await indexDB();
    }
})();