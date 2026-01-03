import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hospital from './Admin/pages/hospital'
import Doctor from './Admin/pages/doctor'
import Home from './user/pages/home'
import Login from './user/pages/login'
import Signup from './user/pages/signup'
import Appointment from './user/pages/appointment'
import { CookiesProvider } from 'react-cookie'
import Appointmenttable from './Admin/pages/appointmenttable'
import Welcome from './user/pages/welcome'
import Doctorappointment from './doctors/pages/Doctorappointment'
import Doctorp from './doctors/pages/doctorp'
import Doctorlogin from './doctors/pages/doctorlogin'
import LocationTracker from '../utils/LocationTracker'
import Abouthome from './user/pages/abouthome'
import Contact from './user/pages/contact'
import Departments from './user/pages/departments'
import HospitalDetails from './user/pages/hospitaldetails'
import DoctorDetails from './user/pages/doctordetails'
import AdminLogin from './Admin/pages/adminlogin'
import AdminDashboard from './Admin/pages/admindashboard'
import Test from './tt'

import { ToastContainer } from 'react-toastify';
import OurMission from './user/pages/mission'
// import Doctorprofiletable from './doctors/pages/doctorprofile'
function App() {

  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        <Routes>

          {/* Admin routes  */}
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/doctor" element={<Doctor />} />
          {/* user routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointmenttable" element={<Appointmenttable />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="/doctorappointment" element={<Doctorappointment />} />
          <Route path="/doctorp/:id" element={<Doctorp />} />
          <Route path="/doctorlogin" element={<Doctorlogin />} />
          <Route path="/lt" element={<LocationTracker />} />
          <Route path="/abouthome" element={<Abouthome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/hospitaldetails" element={<HospitalDetails />} />
          <Route path="/doctordetails" element={<DoctorDetails />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ourmission" element={<OurMission />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
