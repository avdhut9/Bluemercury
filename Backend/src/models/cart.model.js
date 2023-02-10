const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    cart:[{productid:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},qty:{type:Number,default:1,required:true}}]
})
const Cartmodel=mongoose.model("cart",Schema);
module.exports=Cartmodel;
