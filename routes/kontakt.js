const json = require("../data/kontakt");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/kontakt", (req, res) => {
        log.log(req.connection.remoteAddress + "GET /kontakt");
        res.render("pages/kontakt", json)
    })
    app.post("/kontakt", (req, res) => {
        res.render("pages/kontakt", json)
    })  
}