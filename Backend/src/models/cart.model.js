const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    cart:[{name:{type:String,required:true},qty:{type:Number,required:true},image:{type:String,required:true},price:{type:Number,required:true},productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true}}]
})
const Cartmodel=mongoose.model("cart",Schema);
module.exports=Cartmodel;
