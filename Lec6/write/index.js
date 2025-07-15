const fs = require("fs");


fs.writeFile("../demo.txt","hello", function(err){
    if(err) return console.log(err);
    console.log("sucess!!")


})

fs.writeFile("../be.txt","world", function(err){
    if(err) return console.log(err);
    console.log("sucess")


})
