module.exports = (app) =>{
    require("./index")(app);
    require("./about")(app);
    require("./garanti")(app);
    require("./kontakt")(app);
    require("./nyheder")(app);
    require("./produkter")(app);
}