const json = require("../data/garanti");
module.exports = (app) => {
    app.get("/garanti", (req, res) => {
        res.render("pages/garanti", json)
    })
}