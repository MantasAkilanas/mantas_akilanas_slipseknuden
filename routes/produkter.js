const json = require("../data/produkter");
module.exports = (app) => {
    app.get("/produkter", (req, res) => {
        res.render("pages/produkter", json)
    })
    app.get("/produkter/:id", (req, res) => {
        res.render("pages/produkt", { 
            produkt: json.produkter[req.params.id],
            pageID : json.pageID,
            sidebar : json.sidebar
        }
    )
    })
}