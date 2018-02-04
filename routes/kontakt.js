const json = require("../data/kontakt");
module.exports = (app) => {
    app.get("/kontakt", (req, res) => {
        res.render("pages/kontakt", json)
    })
    app.post("/kontakt", (req, res) => {
        res.render("pages/kontakt", json)
    })  
}