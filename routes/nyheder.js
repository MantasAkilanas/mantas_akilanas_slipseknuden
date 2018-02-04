const json = require("../data/nyheder");
module.exports = (app) => {
    app.get("/nyheder", (req, res) => {
        res.render("pages/nyheder", json)
    })
}