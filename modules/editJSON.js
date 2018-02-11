let fs = require("fs");
module.exports = {
    addToFile: (navn, beskrivelse, billede) => {
        fs.readFile("./data/json.json", "utf8", (err, data) => {
            data = (data == undefined ? data = [] : JSON.parse(data));
            let obj = {};
            obj.navn = navn
            obj.beskrivelse = beskrivelse
            obj.billede = billede
            data.push(obj);
            let json = JSON.stringify(data, null, "\t")
            fs.writeFile("./data/json.json", json, (err) => {
            });
        })
    },
    editFile: (id, navn, beskrivelse, billede) => {
        fs.readFile("./data/json.json", "utf8", (err, data) => {
            data = JSON.parse(data);
            data[id].navn = navn;
            data[id].beskrivelse = beskrivelse;
            data[id].billede = billede;
            data = JSON.stringify(data)
            fs.writeFile("./data/json.json", data, (err) => {
            })
        })
    },
    deleteFile: (id) => {
        fs.readFile("./data/json.json", "utf8", (err, data) => {
            data = JSON.parse(data);
            data.splice(id, 1)
            data = JSON.stringify(data, null,"/t")
            fs.writeFile("./data/json.json", data, (err) => {
            })
        })
    }
}