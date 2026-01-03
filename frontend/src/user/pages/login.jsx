import React, { useState } from "react";
import "./login.css"; // External CSS file
import logo from "../.././images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useCookies } from 'react-cookie'

const Login = () => {

  const [cookie, createcookie, removecookie] = useCookies()

  const [email, setemail] = useState()
  const [password, setpasword] = useState()

  // APIs connect with backend--------

  const login = async () => {
    // alert(email)
    const re = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        em: email,
        psw: password
      })
    })
    const d = await re.json()
    console.log(d)

    if (d.msg == "valid") {
      createcookie("useremail", d.dt, { maxAge: 864000 })    //84000 means login for 10 days
      createcookie("userlocation", d.loc, { maxAge: 864000 })    //84000 means login for 10 days
      jump("/")
    }
    else {
      alert(d.msg)
    }
  }



  const jump = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    login()
    // Add your login API call here
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-card">
        <div className="login-logo">
          <img src={logo} alt="Hospital Logo" />
          <h2>Health Care </h2>
          <p>Welcome back, Patient</p>
        </div>

        <form className="fm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={formData.email}
            onChange={(e) => { setemail(e.target.value) }}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            // value={formData.password}
            onChange={(e) => { setpasword(e.target.value) }}
            required
          />

          <button type="submit" className="login-btn login-page-btn lb">
            Login
          </button>

          <p className="register-link">
            Don’t have an account?<Link to="/signup">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
