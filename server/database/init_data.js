require("../config_env");
const mongoose = require("mongoose");
const models = require("../middleware/schema_injection").db;
const { connectDB } = require("./mongo");
const data = require("./data");

const initData = async () => {
    var collectionName = null;
    try {
        for (let schema in data) {
            collectionName = schema;
            for (let d of data[schema]) {
                let obj = new models[schema](d);
                try{                    
                    obj.joiValidate(d);
                }catch(err) {
                    console.error(err);
                    process.exit();
                }
            }
            await models[schema].deleteMany();
            await models[schema].insertMany(data[schema]);
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
        await initData();
    }
})();