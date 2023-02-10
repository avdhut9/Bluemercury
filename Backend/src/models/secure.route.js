const express=require("express");
const app=express.Router();
const Cartmodel=require("./cart.model")
const middleware=require("../middleware/checkmiddleware")

app.use(middleware)

app.post("/cartitems",async(req,res)=>{
 
  const{user}=req.body
  console.log(user)
    try{
const user1=await Cartmodel.findOne({user:user}).populate({path:"cart",populate:{path:"productid"}})

return res.send(user1)
    }catch(e){
return res.send(e.message)
    }
})
app.post("/cart",async(req,res)=>{
  const{user,cart}=req.body;
  try{
let product=await Cartmodel.findOne({user:user});

if(product==null){
    await Cartmodel.create({...req.body})
    return res.send("cart item created")
  }
  else{
await Cartmodel.updateOne({user:user},{cart:[...product.cart,cart]},{new:true});
  return res.send("added to existing cart")
  }
}catch(e){
  return res.send(e.message)
}
})
app.patch("/productqty/:id",async(req,res)=>{
  const{id}=req.params
  const{user,qty}=req.body
  console.log(id)
  console.log(user,qty)
  try{
let user1=await Cartmodel.findOne({user:user}).populate({path:"cart"})
console.log(user1)
let y=user1.cart.map((ele)=>{
if(ele._id.toString()==id){
  ele.qty=ele.qty+qty
}
return ele
});
console.log(y,"i am y")
user1.cart=y


let x=await Cartmodel.replaceOne({user:user},{user:user,cart:[...user1.cart]})

return res.send(x)
  }catch(e){
return res.send(e.message)
  }
})
app.delete("/productdel/:id",async(req,res)=>{
  const{id}=req.params
  const{user}=req.body
  console.log(id,"i am del")
  console.log(user)
  try{
let user1=await Cartmodel.findOne({user:user})
console.log(user1.cart)
let y=user1?.cart?.filter((ele)=>{
  console.log(typeof(ele._id))
return ele?._id.toString()!==id
  });
 

console.log(y)

try{
  let x=await Cartmodel.replaceOne({user:user},{user:user,cart:[...y]})

  return res.send(x)
}catch(e){
return res.send(e.message)
}
  }catch(e){
return res.send(e.message)
  }
})
app.post("/productid/:id",async(req,res)=>{
let {id}=req.params
let {user}=req.body
console.log(user)
try{
const user1=await Cartmodel.findOne({user:user}).populate({path:"cart",populate:{path:"productid"}})
console.log(user1)
let isproductavailable=user1.cart.find((ele)=>{
  return ele.productid._id.toString()==id
})

if(isproductavailable?.productid){
  return res.send("already in the cart")
}else{
  return res.send("not in cart")
}
}catch(e){
  
res.send(e.message)
}

})

module.exports=app;