const json = require("../data/garanti");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/garanti", (req, res) => {
        log.log(req.connection.remoteAddress + "GET /garanti");
        res.render("pages/garanti", json)
    })
}