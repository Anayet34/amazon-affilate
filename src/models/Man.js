const mongoose= require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const Man=mongoose.Schema({
    imageUrl:String,
    title:String,
    description:String,
    linkText:String,
    link:String
})

module.exports=mongoose.model("man",Man)