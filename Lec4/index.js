let account_balance = 200000;
let products = [
    {
        name:"samsung",
        amount:70000,
        quantity:10
    },
     {
        name:"Iphone 16",
        amount:100000,
        quantity:1
    }
]
//  function buyProduct(product_name,cb){
//     //some asynchronous operations
//     //1. get product detail from product db
//     //2. write order detail in user db
//     setTimeout(()=>{
//         console.log("order complete");
//         cb();
//     })
// }

//console.log("product is purchased")
function buyProduct(product_name,cb){
    //find product object from product array whose name is equal to product_name
   let isproduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == product_name){
            isproduct = products[i];
        }
    }
if(!isproduct){
    cb("Product is not available",null)
}else{
    cb(null,isproduct.amount);
}   
}
function deductAmount(amount,cb){
if(amount > account_balance) {
     cb("Not enough balance to purchase the product",null);   
}else{
    account_balance -= amount;
    cb(null,"Your product is purchased");    
}
}
buyProduct("Iphone 16",function(err,amount){
   //console.log("Product is Purchased");
   if(err) return console.log(err)
    console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message)
        console.log(account_balance)
    });
})
//problems in callback
// 1. Callback hell
// 2. Don't have control on your own code