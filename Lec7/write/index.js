const fs=require("fs")


let users =[
    {
        id:3,
        name:"yashiiiii",
        age:"20"
    },
    {
        id:4,
        name:"pariiiiii",
        age:"17"
    },
]

fs.writeFile("../users2.txt",JSON.stringify(users), function(err){
    if(err) return console.log(err);
    console.log("users written")
})
