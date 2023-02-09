const express=require("express");
const app=express.Router();
const Productmodel=require("./product.model")
app.get("/",async(req,res)=>{
    console.log("ok")
    let{page,limit}=req.query;
    console.log(page,limit)
page=Number(page);
limit=Number(limit)
try{
    let productss=await Productmodel.find({})
    if(page&&limit){
        let products=await Productmodel.find({}).limit(limit).skip(limit*(page-1))
       
        return res.send({products,totalpages:Math.ceil(productss.length/limit)})
    }else{
        return res.send(productss)
    }

}catch(e){
return res.send(e.message)
}
})
app.get("/:id",async(req,res)=>{
    const{id}=req.params;
    console.log(id)
try{
const product=await Productmodel.findOne({_id:id});
return res.send(product)

}catch(e){
return res.send(e.message)
}
})
module.exports=app