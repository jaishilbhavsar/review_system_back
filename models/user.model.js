// const mongoose=require('mongoose');
// var db=require('./db');
// var userSchema=new mongoose.Schema({email:{type:String},name:{type:String},student_id:{type:Number},password:{type:String}});
// mongoose.model('user',userSchema);    
var conn = require('./dbconnection').connection;

var user = {
    getuser: async function () {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("review_system");
            var dbo = await conn.connect.connectDb().then(async (data) => {
                console.log("conn.t = ", conn.t);
            });
            await console.log(dbo);
            await dbo.collection("user").findOne({}, async function (err, result) {
                if (err)
                    throw err;
                console.log(result);
                db.close();
            });
            console.log("conn ", conn);
        });
    }
}
module.exports = user;
