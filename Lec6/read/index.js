const fs = require("fs");

fs.readFile("../demo.txt", "binary", function(err, data){
    if(err) return console.log(err);
    console.log(data)
})

fs.readFile("../be.txt", "binary", function(err, data){
    if(err) return console.log(err);
    console.log(data)
})

