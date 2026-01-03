const mongoose = require("mongoose")
const sch = mongoose.Schema({
    doctoremail: { type: String, required: true },
    doctorname: { type: String, required: true },
    doctorid: { type: String, required: true },
    hospitalname: { type: String, required: true },
    hospitalid: { type: String, required: true },
    patientname: { type: String, required: true },
    patientemail: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String, required: true },

})

module.exports = mongoose.model("appointment", sch)