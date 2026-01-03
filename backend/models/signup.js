const mongoose = require("mongoose")
const sch = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
})

module.exports = mongoose.model("signup", sch)