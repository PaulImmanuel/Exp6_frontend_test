const mongoose = require('mongoose')
//define schema
const UserSchema = new mongoose.Schema({
name:String,
email:String,
password:Number,
consumer_number:Number,
address:String
})
//create model object
const UserModel = new mongoose.model("Users",UserSchema)
module.exports=UserModel