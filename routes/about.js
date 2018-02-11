const json = require("../data/about");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/about", (req, res) => {
        log.log(req.connection.remoteAddress + " GET /about");
        console.log(req);
        res.render("pages/about", json)
    })
}