const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Gowshick")
.then(()=>{
    console.log("mongodb connected2");
})
.catch(()=>{
    console.log('failed');
})

const furniture=new mongoose.Schema({
    material:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String,
        fileName:String
    }
});

const stock = mongoose.model("stock",furniture);

module.exports=stock;