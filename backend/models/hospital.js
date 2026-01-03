const mongoose = require("mongoose")
const sch = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    // pic:{type:String , required:true},

})

module.exports = mongoose.model("hospital", sch)