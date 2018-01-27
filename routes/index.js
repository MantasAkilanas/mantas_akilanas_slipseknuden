const json = require("../data/index");
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("pages/index", json)
    })
}