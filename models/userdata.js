const mongoose=require('mongoose')

mongoose.connect(`mongodb://localhost:27017/showninterest`);

const userSchema =mongoose.Schema({
    name:String,
    phone:Number,
    email:String

})
const userModel=mongoose.model('userModel',userSchema)

const logUserSchema =mongoose.Schema({
    username: String,
    email:String,
    password:String,
    age:Number
    

})

const logUserModel=mongoose.model('logUserModel',logUserSchema)

module.exports={userModel,logUserModel}
