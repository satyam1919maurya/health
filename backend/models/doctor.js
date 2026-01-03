const mongoose = require("mongoose")
const sch = mongoose.Schema({
    hospitalid:{type:String , required:true},
    hospitalname:{type:String , required:true},
    Doctorname:{type:String , required:true},
    phone:{type:String , required:true},
    gender:{type:String , required:false},
    specialization:{type:String , required:true},
    qualification:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String,required:false}
    
})

module.exports = mongoose.model("doctor",sch)   