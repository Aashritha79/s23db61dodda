const mongoose = require("mongoose")
const airlinesSchema = mongoose.Schema({
airlines_name: {type:String,
    required:true},
airlines_seating: {type:String,
    required:true
},
price:{ type: Number,
required:true,
min:[1,"Minimum Price is less than 0"],
max:[10000,"The maximum price is exceeded"],
validate:{
    validator:function(value){
        return "The price between 1 and 10000"
    }
}},
})
module.exports = mongoose.model("Airlines",airlinesSchema)