import React from 'react'
import logo from "../.././images/logo.jpeg";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [cookie, createcookie, removecookie] = useCookies()

  const logout = () => {
    removecookie("useremail")
    removecookie("userlocation")
    window.location.reload()
  }


  return (



    <header className="header">
      <Link to="/" style={{ color: 'white', }} className='link'>
        <div className="logo-section">
          <img src={logo} alt="Hospital Logo" className="logo" />
          <h2 className="title">Health Care</h2>
        </div>
      </Link>

      {
        cookie.useremail ? (
          <p><i className=" fa-solid fa-location-dot"></i>
           {cookie.userlocation} </p>
        ) : ""
      }


      <nav className="navbar">
        <ul>
          <Link to="/" className='link'><li>Home</li></Link>
          <Link to="/abouthome" className='link'><li>About</li></Link>
          <Link to="/departments" className='link'><li>Departments</li></Link>
          <Link to="/doctordetails" className='link'><li>Doctors</li></Link>
          <Link to="/contact" className='link'><li>Contacts</li></Link>
        </ul>
      </nav>

      <div className="login-btn">
        {
          cookie.useremail ? (
            <div style={{ display: "flex", width: "200px", alignItems: "center", justifyContent: "center ", height: "50px" }}>
              <button onClick={logout}>Logout</button>

            </div>
          )
            : (
              <Link to="/login" className='link'><button>Login</button></Link>
            )
        }
      </div>
    </header >
  )
}

export default Header