const fs = require("fs");

module.exports = {
    "log": (text) => {
        let date = new Date;
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        // fs.readFile("./log/log.txt", "utf8", (err, data) => {
        //     fs.writeFile("./log/log.txt", text + ` ${h}:${m}:${s}` + "\r\n" + data);
        // })
        console.log("./log/log.txt", "\r\n" + text + ` ${h}:${m}:${s}`)
        fs. appendFile("./log/log.txt", "\r\n" + text + ` ${h}:${m}:${s}`, (err) => {
            if (err){
                throw err;
            }
        })
    }
}