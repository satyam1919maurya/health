import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const [cookie, createcookie, removecookie] = useCookies("")
  const jump = useNavigate()

  const logout = () => {
    // alert("test");
    removecookie("admin");
    jump("/adminlogin")


  }

  // Protecting admin routes 
  useEffect(() => {
    if (!cookie.admin) jump("/adminlogin");
  }, [])


  return (
    <div className="sidebar">
      <h1 style={{ textAlign: 'center', backgroundColor: 'maroon ', height: 55, color: 'white' }}>Admin</h1>
      <ul>
        <li> <Link to="/admindashboard" className='link'  ><i class="fa-solid fa-gauge" style={{ color: 'black' }}></i>  Dashboard</Link></li>
        <li> <Link to="/hospital" className='link'  ><i class="fa-solid fa-hospital-user" style={{ color: 'black' }}></i>  Hospital</Link></li>
        <li> <Link to="/doctor" className='link'><i class="fa-solid fa-user-doctor" style={{ color: 'black' }}></i> Doctor's</Link></li>
        <li> <Link to="/appointmenttable" className='link'><i class="fa-solid fa-user-doctor" style={{ color: 'black' }}></i> Appointment's</Link></li>
      </ul>

      <p className='link' onClick={logout} style={{ cursor: "pointer" }}>
        <i class="fa-solid fa-arrow-right-from-bracket text-dark" style={{ transform: "rotate(180deg)" }}></i>Logout</p>
    </div>
  )
}

export default Sidebar
