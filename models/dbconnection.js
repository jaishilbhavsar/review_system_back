// mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/review_system',{useNewUrlParser:true},(err)=>{
//     if(!err){
//         console.log("Connected to Database");
//     }
//     else
//     {
//         console.log("Error in connection");
//     }
// });

// require('./user.model');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// var t = null;
var connect = {
    connectDb: async function () {
        await MongoClient.connect(url, async function (err, db) {
            if (err) throw err;
            t = db.db("review_system");
        });
        
    }
}
module.exports = { connection };