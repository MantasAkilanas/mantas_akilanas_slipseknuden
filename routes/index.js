const json = require("../data/index");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/", (req, res) => {
        log.log(req.connection.remoteAddress + "GET /index");
        res.render("pages/index", json)
    })
}