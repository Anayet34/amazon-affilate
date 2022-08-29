const mongoose= require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const Service=mongoose.Schema({
    imageUrl:String,
    title:String,
    description:String,
    link:String,
    linkText:String
    
})

module.exports=mongoose.model("services",Service)