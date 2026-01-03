const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 5000
const cors = require("cors")
const nodemailer = require("nodemailer")
require('dotenv').config();

const sendDoctorWelcomeEmail = require("./emails/doctoremail")

// middleware

app.use(express.json())
app.use(cors())
// building connection to mongodb

const con = mongoose.connect("mongodb://localhost:27017/Hospital")

con.then(() => {
    console.log("Connection Done")
})
con.catch((e) => {
    console.log("Connection Failed")
    console.log(e.message)
})

// create APIs

// import models
const Hospital = require("./models/hospital")
const Doctor = require("./models/doctor")

const Patient = require("./models/signup");
const Appointment = require("./models/appointment")


// Creating Nodmeailer transport 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Sending email to doctor 



// ===== APIs for the Admin section ======

//===--==- APIs for the hospitals (for post method)------=--===---===

app.post("/hospital", async (req, res) => {
    const newHospital = new Hospital({
        name: req.body.name,
        phone: req.body.phone,
        category: req.body.cattegory,
        description: req.body.description,
        location: req.body.location,
        // pic: req.body.pic
    })
    await newHospital.save();
    res.json({ msg: "Hospital added sucessfully" })
})

// APIs for the get hospityals-------

app.get("/hospital", async (req, res) => {
    const newhospital = await Hospital.find({

    })
    res.json(newhospital)
})

// single hospital data 
app.get("/hospital/:id", async (req, res) => {
    const newhospital = await Hospital.findOne({
        _id: req.params.id
    })
    res.json(newhospital)
})

// put api for hospital update 

app.put("/hospital", async (req, res) => {
    const d = await Hospital.findOneAndUpdate({
        _id: req.body.id
    }, {
        name: req.body.name,
        phone: req.body.phone,
        category: req.body.cattegory,
        description: req.body.description,
        location: req.body.location,
    })
    res.json({ msg: "Data is updated" })
})


// Delete Hospitals------

app.delete("/hospital", async (req, res) => {
    const d = await Hospital.findOneAndDelete({
        _id: req.body.id
    })
    res.json({ msg: "Hospital is deleted" })
})


// find the hospital with location

app.post("/hospital/location", async (req, res) => {
    if (req.body.location == "all") {
        const hl = await Hospital.find();
        return res.json(hl)
    }
    const hl = await Hospital.find({
        location: req.body.location
    });
    res.json(hl)
})



// --====---==-- APis for the doctors(for post method)---=====---===-===-==--------=

app.post("/doctor", async (req, res) => {

    const ex = await Doctor.findOne({ email: req.body.email });
    if (ex) {
        if (ex.email == req.bodyemail)
            console.log(ex.email)
        return res.json({ msg: "Email already exists" })
    }

    const rn = Math.floor(Math.random() * 10000)
    const h = await Hospital.findOne({
        _id: req.body.hospitalid
    })
    // console.log(h)

    const newDoctor = new Doctor({
        Doctorname: req.body.nm,
        phone: req.body.ph,
        gender: req.body.gen,
        specialization: req.body.sp,
        hospitalid: req.body.hospitalid,
        hospitalname: h.name,
        qualification: req.body.qualification,
        email: req.body.email,
        password: rn



    })
    await newDoctor.save();

    sendDoctorWelcomeEmail(req.body.email, req.body.nm, rn)
    res.json({ msg: "Doctor added" })
})


// getting all doctors 
app.get("/doctor", async (req, res) => {
    const newDoctor = await Doctor.find({

    })
    res.json(newDoctor)
})

// single doctor data 
app.get("/doctor/:id", async (req, res) => {
    const newdoctor = await Doctor.findOne({
        _id: req.params.id
    })
    res.json(newdoctor)
})

// Delete doctors------

app.delete("/doctor", async (req, res) => {
    const d = await Doctor.findOneAndDelete({
        _id: req.body.id
    })
    res.json({ msg: "Doctor is deleted" })
})

// put api for hospital update 

app.put("/doctor", async (req, res) => {
    const d = await Doctor.findOneAndUpdate({
        _id: req.body.id
    }, {
        Doctorname: req.body.nm,
        phone: req.body.ph,
        // gender: req.body.gen,
        specialization: req.body.sp,
        hospitalid: req.body.hospitalid,
        // hospitalname: h.name,
        qualification: req.body.qualification
    })
    res.json({ msg: "Data is updated" })
})


// gettting all doctors based on the particular hospital 
app.post("/hospital/doctors", async (req, res) => {
    const doctors = await Doctor.find({ hospitalid: req.body.hid });
    if (doctors.length > 0) {
        return res.json(doctors)

    }
    res.json({ msg: "No doctors for this hospital" })
})


// API for the show doctor specific appointment to pationt

app.get("/appointment/:email", async (req, res) => {
    const doctorappointment = await Appointment.find({
        doctoremail: req.params.email
    })
    res.json(doctorappointment)
})


// ===================== APIs for the user section ================================



// const hospital = require("./models/hospital")

// To the Build APIs for the signup for the user/patient --------

app.post("/signup", async (req, res) => {
    const newPatient = new Patient({
        name: req.body.nm,
        email: req.body.email,
        gender: req.body.gen,
        password: req.body.pass,
        location: req.body.location,
    })
    await newPatient.save();
    res.json({ msg: "Patient added" })
})

app.get("/signup", async (req, res) => {
    const signup = await Patient.find({

    })
    res.json(signup)
})






// user login for the form =======


app.post("/login", async (req, res) => {
    const em = req.body.em
    const psw = req.body.psw

    const existingPatient = await Patient.find({ email: em, password: psw })
    if (existingPatient.length > 0) {
        res.json({ msg: "valid", dt: existingPatient[0].email, loc: existingPatient[0].location, nm: existingPatient[0].name })
        return
    }
    res.json({ msg: "No user found" })
})

// for the doctor login -----------

app.post("/doctorlogin", async (req, res) => {
    const em = req.body.em
    const psw = req.body.psw

    const existingDoctor = await Doctor.find({ email: em, password: psw })
    if (existingDoctor.length > 0) {
        res.json({ msg: "valid", dt: existingDoctor })
        return
    }
    res.json({ msg: "No user found" })
})


// ---------To Build APIs for the appointment  book for the client Post method---------

app.post("/appointment", async (req, res) => {
    // console.log(req.body.pemail)
    // console.log(req.body.doctoremail)


    const newAppointment = new Appointment({
        patientname: req.body.pname,
        phone: req.body.phone,
        patientemail: req.body.pemail,
        address: req.body.address,
        hospitalid: req.body.hospitalid,
        hospitalname: req.body.hospitalname,
        doctorname: req.body.doctorname,
        doctorid: req.body.doctorid,
        date: req.body.date,
        time: req.body.time,
        message: req.body.message,
        doctoremail: req.body.doctoremail,

    })
    await newAppointment.save();
    res.json({ msg: "Booked Appointment" })
})

// ------- To Build APIs for appointment form for the Get method -----



app.get("/appointment", async (req, res) => {
    const newAppointment = await Appointment.find({

    })
    res.json(newAppointment)
})







app.listen(PORT, () => {
    console.log("Server running on " + PORT)
    // console.log(process.env.EMAIL_USER)
})