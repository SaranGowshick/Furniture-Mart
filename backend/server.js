const express = require("express")
const collection = require('./models/customer')
const stock= require('./models/admin')
const multer = require('multer')
const path = require('path');
const cors = require("cors")
const app = express()
const bcrypt = require("bcrypt")
const upload = require('./middlewares/multerMiddleware'); 




app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/images", express.static(path.join(__dirname,"images")));


app.get("/",cors(),(req,res)=>{

})

  
  
  
  
app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})
        if(!check){
            return res.json("notexist")
        }
        const valid = await bcrypt.compare(password, check.get("password"));
        if (valid === true) {
            console.log("if part")
            return res.json( "exist");
        } else {
            console.log("else part")
            return res.json("notexist");
        }
    }
        catch(e){
            res.json("notexist")
        }

});



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
    const encryptedPassword = await bcrypt.hash(password,10);

    const data={
        email:email,
        password:encryptedPassword
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/admin", async (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("File upload failed");
      } else {
        const material = req.body.material;
        const amount = req.body.amount;
        const imageDetails = req.file;

        // Check if all required data is provided
        if (!material || !amount || !imageDetails) {
          return res.status(400).json("Missing form data");
        }

        // Create the new stock object
        const newStock = new stock({
          material: material,
          amount: amount,
          image: {
            data: imageDetails.buffer,
            contentType: imageDetails.mimetype,
            fileName: imageDetails.filename,
          },
        });
    
        // Save the stock object to the MongoDB collection
        newStock
          .save()
          .then(() => res.status(200).json("ok"))
          .catch((err) => {
            console.log(err);
            res.status(500).json("Failed to save data");
          });
      }
    });
  });
  
  

app.get('/cart',async(req,res) =>{
    
    const furniture= await stock.find({});
    //console.log(furniture)
    res.json(furniture);
    
})





app.listen(3001,()=>{
    console.log("port connected");
})




