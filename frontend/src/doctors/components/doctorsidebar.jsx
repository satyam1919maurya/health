import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'




const Doctorsidebar = (x) => {
  const [cookie, createcookie, removecookie] = useCookies()

const jump = useNavigate()


//  doctor logout function 
  const logout = () => {
    removecookie("doctoremail")
    removecookie("doctorname")
    removecookie("doctorid")
    jump("/doctorlogin")
  }

  useEffect(()=>{
    if(!cookie.doctoremail){
      return jump("/doctorlogin")
    }
  })





  return (
    <div className="sidebar doctorside">
      <div className="up" >
        <h1 style={{ textAlign: 'center', backgroundColor: 'maroon ', height: 55, color: 'white' }}>{cookie.doctorname}</h1>
        <ul>
          <li> <Link to={`/doctorp/${cookie.doctorid}`} className='link'><i class="fa-solid fa-user-doctor" style={{ color: 'black' }}></i> Profile</Link></li>
          <li> <Link to="/doctorappointment" className='link'><i class="fa-solid fa-user-doctor" style={{ color: 'black' }}></i> Appointment's</Link></li>


        </ul>
      </div>
      <div className="down" >
        <li className='btn m-2' onClick={logout}>
          <i class="fa-solid fa-arrow-right-from-bracket" style={{color:"black",transform:"rotate(180deg)"}}></i> Logout</li>

      </div>
    </div>
  )
}

export default Doctorsidebar
