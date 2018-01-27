const json = require("../data/about");
module.exports = (app) => {
    app.get("/about", (req, res) => {
        res.render("pages/about", json)
    })
}