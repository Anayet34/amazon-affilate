const express = require('express')
const { route } = require("express/lib/application")

const Detail = require("../models/Detail")
const Service = require("../models/Service")
const Man = require("../models/Man")
const Woman = require("../models/Woman")
const bodyParser = require('body-parser')



const routes=express.Router();

routes.get("/", async (req,res) =>{

   const details= await Detail.findOne({"_id":"62c4d1ca9a2a3edb16cce948"})
//    console.log(details);

    const services=await Service.find()
    res.render("index",{
        details:details,
        services:services
    })
})


routes.get("/man", async(req,res) =>{
    const details= await Detail.findOne({"_id":"62c4d1ca9a2a3edb16cce948"})

    const mans=await Man.find()
    res.render("man", {
        details: details,
        mans:mans
        
    });
});

routes.get("/woman", async(req,res) =>{
    const details= await Detail.findOne({"_id":"62c4d1ca9a2a3edb16cce948"})

    const womans=await Woman.find()
    res.render("woman", {
        details: details,
        womans: womans
    });
});



module.exports=routes;




  






