const mongoose = required("mongoose");
const Schema=mongoose.Schema();

const users=new Schema({
      email:String,
      password:String
});

const customer=mongoose.model("customer",users);

module.exports = customer;