const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const Detail= mongoose.Schema({
    brandName:String,
    brandImg:String,
   
    links:[
        {
            label:String,
            url:String
            
        },
    ],
   
});

module.exports=mongoose.model("detail",Detail)