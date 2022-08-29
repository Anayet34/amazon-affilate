const express = require("express");
const hbs= require("hbs");
const app = express();
const mongoose= require("mongoose")
const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Service=require("./models/Service")
const Man=require("./models/Man")
const Woman=require("./models/Woman")

app.use('/static',express.static("public"))
app.use('',routes)


app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost:27017/detail",()=>{
    console.log("db connect");


        // Service.create(
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/03.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/03.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/03.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/03.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/03.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/02.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/03.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        //  }       
        // )



        //   Man.create(
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/04.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        //  }       
        // )






        //    Woman.create(
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis <br/>Price=10$?',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        //  {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        // },
        // {
        //     imageUrl:"static/images/06.jpg",
        //     title: 'T-shirt',
        //     description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid corporis? <br/>Price=10$',
        //     linkText:'https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles',
        //     link:'Buy Now'
        //  }       
        // )





    // Detail.create({
    //     brandName:"TRS",
    //     links:[
    //         {
    //             label:"Man",
    //             url:"/man"
    //         },
    //         {
    //             label:"Woman",
    //             url:"/woman"
    //         },
    //         {
    //             label:"Others",
    //             url:"/others"
    //         }
    //     ]
    // })
})

mongoose.con

app.listen(process.env.PORT | 9999, () =>{
    console.log("server start");
})