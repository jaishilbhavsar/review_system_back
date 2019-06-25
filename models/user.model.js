const mongoose=require('mongoose');
var db=require('./db');
var userSchema=new mongoose.Schema({email:{type:String},name:{type:String},student_id:{type:Number},password:{type:String}});
mongoose.model('user',userSchema);    