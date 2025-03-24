const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    }
});

const user = mongoose.model("rekha",schema);
module.exports = user;