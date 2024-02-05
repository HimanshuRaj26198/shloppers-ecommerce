const port = 4000;
const express= require("express");
const app = express();

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const multer = require("multer");

const path = require("path");
const cors = require("cors");

app.use(express.json());
console.log("Hello")
app.use(cors());

// database connection

try{
    mongoose.connect("mongodb+srv://nayansi12:EbLelVljIlMIGaa3@cluster0.kdxg51o.mongodb.net/e-commerce");

}
catch(err){
    console.log(err)
}
//api creation

app.get("/", (req,res)=>{
    res.send("express app is running")

})

// image storage

let date = new Date();

const storage= multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload = multer({storage:storage})

//creating upload the end point:

app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
}) 
   
// schema for creating product
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    key:{
        type: String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    new_price:{
        type:Number,
        require:true
    },
    old_price:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },

    available:{
        type:Boolean,
        default:true
    }


})
//schema for user model
const Users =mongoose.model('Users',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now,
    }
})


// creating endpoint for registering the userS

app.post('/signup',async (req,res)=>{
    let check= await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:'existing user found with same email id'})
    }
    let cart ={};
    for (let i = 0; i < 300; i++) {
        cart[i] =0;
        
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();
    const data={
        user:{
            id:user.id
        }
    }
    const token =jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})
// creating end point for userlogin
app.post("/login",async(req,res)=>{
    let user =await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare =req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token =jwt.sign(data,'secret_ecom');
            res.json({success:true,token})
        }
        else{
            res.json({success:false,error:"wrong password"})
        }
    }
    else{
        res.json({success:false,error:"wrong email id"})
    }
})





app.post("/addproducts",async(req,res)=>{
    let products = await Product.find();
    let id;
    if(products.length>0){
        let last_product_array =products.slice(-1);
        let last_product =last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    console.log(id, "ID");
    const product =new Product({
        id: parseInt(id),
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    });
    await product.save();
    res.json({
        success:true,
        name:req.body.name
    });
})
//creating api for deleting products 
app.post('/removeproducts',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name
    });
})
//creating api geeting all products

app.get("/allproducts", async (req,res)=>{
    let products = await Product.find();
    console.log("all products fetched");
    res.send(products);
})

//ceating end point of our data
app.get('/newcollectioned', async (req,res)=>{
    let products=await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("newcollection fetched")
    res.send(newcollection)
})


app.listen(port,(err)=>{
    if (!err) {
        console.log("server running" +port)
    }
    else{
        console.log("error")
    }
})


