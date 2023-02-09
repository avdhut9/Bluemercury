const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    name:{type:String,required:true},
   img:{type:String,required:true},
   qty:{type:Number,default:1,required:true},
    
})
const Productmodel=mongoose.model("product",Schema);
module.exports=Productmodel;
