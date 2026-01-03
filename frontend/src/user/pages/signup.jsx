import React, { useEffect, useState } from "react";
import "./signup.css";
import logo from "../.././images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import axios from "axios";
import { useCookies } from "react-cookie";



const Signup = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [gender, setgender] = useState("")
    const [password, setpassword] = useState("");


    const [loader, setloader] = useState(false);
    const [location, setlocation] = useState("")
    const [coords, setCoords] = useState({ lat: null, lon: null });
    const [loc, setloc] = useState("all")
    const [cookie, createcookie, removecookie] = useCookies()

    // Internal css for gender 
    const gen = {
        // backgroundColor:"blue",
        // height:"300px"
    }
    const genlabel = {
        // backgroundColor:"yellow",
    }
    const geninput = {
        // backgroundColor:"purple",
        width: "50px"
    }


    // for the jump to login page==== 

    const jump = useNavigate()


    const gologin = () => {
        jump("/login")
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //     alert("Passwords do not match!");
        //     return;
        // }

        const re = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                nm: name,
                email: email,
                gen: gender,
                pass: password,
                location: location
            })
        });
        const d = await re.json()
        console.log(d)
    };







    useEffect(() => {
        // if (cookie.userlocation) {
         setloader(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setCoords({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                });
                getloc(pos.coords.latitude, pos.coords.longitude)
            });
        } else {
            alert("Geolocation is not supported by your browser");
        }

        // }
        // else {
        //     setloc("all")
        //     console.log("first only")
        // }
    }, [])



    const getloc = async (lt, ln) => {
        setloader(true)
        console.log("gggg")
        console.log("lttt " + lt)
        console.log("testing")
        const re = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lt}%2C+${ln}&key=a8b7cd404cbb40458d9cce26dcecd26c`)
        console.log("re.data.results[0].formatted")
        setlocation(re.data.results[0].components.city)
        console.log(re.data.results[0].formatted)
        setloader(false)

    }



    return (
        <div className="signup-page">
            <Header />

            <div className="signup-card input-sign">
                <div className="signup-logo">
                    <img src={logo} alt="Hospital Logo" />
                    <h2>Health Care</h2>
                    <p>Create your patient account</p>
                </div>
                {

                    loader ?
                        (<h1 style={{ position: "fixed", left: "40%", top: "40%", width: "400px" }}>Getting Current location</h1>)
                        : null
                }
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        // value={formData.fullName}
                        onChange={(e) => { setname(e.target.value) }}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        // value={formData.email}
                        onChange={(e) => { setemail(e.target.value) }}
                        required
                    />

                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter your Location"
                        value={location}
                        onChange={(e) => { setlocation(e.target.value) }}
                        required
                    />

                    <label>Gender</label>
                    <div style={gen}>
                        <label style={genlabel}>
                            <input
                                style={geninput}
                                type="radio"
                                name="gender"
                                value="Male"
                                // checked={formData.gender === "Male"}
                                // checked={formData.gender === "Male"}
                                onChange={(e) => { setgender(e.target.value) }}
                            // required
                            />
                            Male
                        </label>
                        <label style={genlabel}>
                            <input
                                style={geninput}
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={(e) => { setgender(e.target.value) }}
                            // checked={formData.gender === "Female"}
                            // onChange={handleChange}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                style={geninput}
                                type="radio"
                                name="gender"
                                value="Other"
                                onChange={(e) => { setgender(e.target.value) }}
                            // checked={formData.gender === "Other"}
                            // onChange={handleChange}
                            />
                            Other
                        </label>
                    </div>

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        // value={formData.password}
                        onChange={(e) => { setpassword(e.target.value) }}
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        // value={formData.confirmPassword}
                        onChange={(e) => { setconfirmpassword(e.target.value) }}
                        required
                    />

                    <button type="submit" className="signup-btn" onClick={gologin} >
                        Register
                    </button>

                    <p className="login-link">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
