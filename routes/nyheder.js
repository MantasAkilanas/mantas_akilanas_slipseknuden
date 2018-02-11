const json = require("../data/nyheder");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/nyheder", (req, res) => {
        log.log(req.connection.remoteAddress + "GET /nyheder");
        res.render("pages/nyheder", json)
    })
}