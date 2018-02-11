const json = require("../data/produkter");
const log = require("../log/log");
module.exports = (app) => {
    app.get("/produkter", (req, res) => {
        log.log(req.connection.remoteAddress + "GET /produkter");
        res.render("pages/produkter", json)
    })
    app.get("/produkter/:id", (req, res) => {
        log.log(req.connection.remoteAddress + `GET /produkter/${req.params.id}`);
        res.render("pages/produkt", { 
            produkt: json.produkter[req.params.id],
            pageID : json.pageID,
            sidebar : json.sidebar
        }
    )
    })
}