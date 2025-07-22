const express=require('express');
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server created");
    
})

app.post("/data",(req, res)=>{
    const recieveData=req.body;
    console.log(recieveData);
    res.json({
        name:"Yashika",
        address:"pkl"
    });
});


app.listen(3000, () => {
  console.log("Server started");
});