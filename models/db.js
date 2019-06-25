mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/review_system',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("Connected to Database");
    }
    else
    {
        console.log("Error in connection");
    }
});

require('./user.model');