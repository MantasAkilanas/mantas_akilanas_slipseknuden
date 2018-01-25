module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("pages/index", {
            sidebar: [{
                title: "SLIPSKNUDEN ONLINE.",
                text: "VI LANCERER NU VORES HJEMMESIDEN MED BILLEDER AF VORES ALLER FINESTE SLIPS."
            }, {
                title: "SLIPSKNUDEN ONLINE.",
                text: "VI LANCERER NU VORES HJEMMESIDEN MED BILLEDER AF VORES ALLER FINESTE SLIPS."
            }],
            frontpageProducts: [{
                name: "Sleek Fabric UK",
                text: "Sort nat, slipset til den ultra stilbeviste",
                pris: 900,
                billede:"1_klassisk_brun.jpg"
            }, {
                name: "Sleek Fabric UK",
                text: "Sort nat, slipset til den ultra stilbeviste",
                pris: 900,
                billede: "2_stribet_stil.jpg"
            }]
        })
    })
}