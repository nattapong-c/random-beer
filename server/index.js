require("./config_env");
require("express-async-errors");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const httpShutdown = require("http-shutdown");
const { connectDB, disconnectDB } = require("./database/mongo");
const schemaInjection = require("./middleware/schema_injection");
const routes = require("./utils/route");
const errorHandler = require("./middleware/error_handler");

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(schemaInjection);
app.use(cors({ origin: true }));


routes(app);

app.get("/health", (req, res) => res.send({ message: "server running..." }));
app.use((req, res, next) => res.status(404).send({ error: "page not found" }));
app.use(errorHandler)

var server = httpShutdown(app.listen(process.env.EXPRESS_PORT));
server.on("error", error => {
    if (error.syscall !== "listen") throw error;
    else if (error.code === "EADDRINUSE") console.error("port is already in use");
    process.exit(1);
});

// graceful shutdown
var called = false;
const shutdown = () => {
    if (called) return;
    called = true;
    server.shutdown(async err => {
        try {
            await disconnectDB();
            return process.exit(0);
        } catch (e) {
            err = e;
        }
        console.error(err);
        return process.exit(1);
    });
};
process.once("SIGINT", shutdown).once("SIGTERM", shutdown);