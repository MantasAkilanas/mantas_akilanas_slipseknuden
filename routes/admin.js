const json = require("../modules/editJSON");
let data = require("../data/json.json");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/admin", (req, res) => {
        log.log(req.connection.remoteAddress + " GET /admin");
        res.render("pages/admin", { data: data })
    })
    app.post("/adminopret", (req, res) => {
        log.log(req.connection.remoteAddress + " POST /adminopret");
        json.addToFile(req.body.navn, req.body.beskrivelse, req.body.billede);
        res.render("pages/admin", { data: data })
    })
    app.post("/adminslet/:id", (req, res) => {
        log.log(req.connection.remoteAddress + " POST /adminopret");
        json.deleteFile(req.params.id);
        res.render("pages/admin", { data: data })
    })
    app.post("/adminredigere/:id", (req, res) => {
        log.log(req.connection.remoteAddress + " POST /adminredigere/" + req.params.id);
        json.editFile(req.params.id, req.body.navn, req.body.beskrivelse, req.body.billede);

        res.render("pages/admin", { data: data })
    })
}