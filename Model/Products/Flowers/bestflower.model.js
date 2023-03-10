const mongoose = require("mongoose");

const bestflowerSchema = mongoose.Schema({
    image:{type:String, required:true},
    type:{type:String, required:true},
    size:{type:String, required:true},
    price:{type:Number, required:true},
    company:{type:String, required:true}
});

const BestflowerModel = mongoose.model("bestflower", bestflowerSchema);

module.exports = {BestflowerModel};