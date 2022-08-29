const mongoose= require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const Woman=mongoose.Schema({
    imageUrl:String,
    title:String,
    description:String,
    linkText:String,
    link:String
})

module.exports=mongoose.model("woman",Woman)