import React, { useEffect, useState } from "react";
import '../components/home.css' // external CSS file
// import logo from "../.././images/logo.jpeg";
import Header from "../components/header";
import { Link } from "react-router-dom";
import pic1 from '../../images/car.webp'
import pic2 from '../../images/nur.webp'
import pic3 from '../../images/Orthopedics.webp'
import axios from "axios"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

// import required modules
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


// import React from "react";

import hospitalImg from "../.././images/hospital.jpg"; // your image path
import hospitalImg2 from "../.././images/kgmu.jpeg"; // your image path
import hospitalImg3 from "../.././images/fatima.webp"; // your image path
import hospitalImg4 from "../.././images/cityh.jpeg"; // your image path
import hospitalImg5 from "../.././images/pgi.jpg"; // your image path
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookie, createcookie, removecookie] = useCookies()

  const [name, setname] = useState("")
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [phone, setphone] = useState("")
  const [category, setcategory] = useState("")
  const [loc, setloc] = useState("all")

  const [hospital, sethospital] = useState([])
  const [imgs, setimgs] = useState([hospitalImg, hospitalImg2, hospitalImg3, hospitalImg4, hospitalImg5])



  // track the location 
  const track = async (locc) => {
    setloc(locc)
    const re = await axios.post(`${import.meta.env.VITE_API_URL}/hospital/location`, {
      location: locc || loc
    })
    // console.log(re.data)
    sethospital(re.data)
  }


  useEffect(() => {
    document.title = "Healthcare"
  }, [])

  useEffect(() => {
    if (cookie.userlocation) {
      track(cookie.userlocation)
      setloc(cookie.userlocation)
      console.log("first" + cookie.userlocation)
    }
    else {
      track("all")
      setloc("all")
      // console.log("first only")


    }
  }, [])


  useEffect(() => {
    if (cookie.userlocation) {
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

    }
    else {
      track("all")
      setloc("all")
      // console.log("first only")
    }
  }, [])



  const getloc = async (lt, ln) => {
    console.log("lttt " + lt)
    console.log("testing")
    const re = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lt}%2C+${ln}&key=a8b7cd404cbb40458d9cce26dcecd26c`)
    console.log(re.data.results[0].formatted)
    if (re.data.results[0].formatted.includes(cookie.userlocation)) {
      // console.log(coo)
      track(cookie.userlocation)
    }
    else {
      track("all")
      console.log("Not Available locatioon")
    }


  }

  // useEffect(()=>{
  //   setloc("all")
  //   track("all")
  // },[cookie.userlocation])





  return (
    <>
      <div className="home-main">
        {/* ---------- Header Section ---------- */}
        <Header />

        {/* ---------- Hero Section ---------- */}
        <section className="hero">
          <div className="hero-text">
            <h1>Your Health, Our Frist Priority</h1>
            <p>
              Welcome to Health Care — where compassionate care meets advanced medical technology.
              We are committed to ensuring your well-being with the best doctors and facilities.
            </p>
            <Link to="/appointment" className="link"><button className="hero-btn">Book Appointment</button></Link>
          </div>
        </section>
        {/* -------------fix section-------------- */}
        <div className="new">
          <div className="sub-new">
            <h2>300+</h2>
            <p>Doctor's</p>
          </div>
          <div className="sub-new">
            <h2>500+</h2>
            <p>Bads</p>
          </div>
          <div className="sub-new">
            <h2>250+</h2>
            <p>Trained Staff</p>
          </div>
          <div className="sub-new">
            <h2>15+</h2>
            <p>Specialists</p>
          </div>


        </div>

        {/* ---------- Services Section ---------- */}
        <section className="services">
          <h2>Our Specialties</h2>

          <div className="service-boxes">

            <div className="service">
              <img
                src={pic1}
                alt="Cardiology"
                className="service-img"
              />
              <h3>Cardiology</h3>
              <p>World-class cardiac care and surgery facilities with 24/7 support.</p>
            </div>

            <div className="service">
              <img
                src={pic2}
                alt="Neurology"
                className="service-img"
              />
              <h3>Neurology</h3>
              <p>Advanced diagnosis and treatment for neurological disorders.</p>
            </div>

            <div className="service">
              <img
                src={pic3}
                alt="Orthopedics"
                className="service-img"
              />
              <h3>Orthopedics</h3>
              <p>Comprehensive bone, joint, and rehabilitation care.</p>
            </div>

          </div>
        </section>



        {/* headings  */}
        {/* --------card section ------------- */}

        <div className="card-section">

          <div className="select">
            <select value={loc} className="p-2" onChange={(e) => { track(e.target.value) }}>
              <option value="all">All Hospitals</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Gorakhpur">Gorakhpur</option>
            </select>
            <h2 className="section-title">Our Top Hospitals</h2>
          </div>
          <div className="card-container">


            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
            {hospital.map((x, i) => {
              return (

                <SwiperSlide>
                  <div className="card">
                    <img src={imgs[i]} alt="Hospital" className="card-img" />
                    <div className="card-content">
                      <h3>{x.name}</h3>
                      <p>{x.category}</p>
                      <p>{x.userlocation}</p>
                      <p>{x.description}</p>
                      <Link to="/hospitaldetails"><button className="card-btn">View Details</button></Link>
                    </div>
                  </div>
                </SwiperSlide>
                // <SwiperSlide>
                //   <img src={pic2} alt="" />
                // </SwiperSlide>



              )
            })}
            {/* </Swiper> */}


          </div>
        </div>





        {/* ---------- Footer Section ---------- */}
        {/* <footer className="footer">
          <p>© 2025 LifeCare Hospital | All Rights Reserved</p>
        </footer> */}



        <footer className="footer">
          <div className="footer-inner">

            {/* Column 1 — Logo & About */}
            <div className="footer-col about">
              <h2>HealthCare<span>+</span></h2>
              <p>
                Providing trusted medical services and connecting patients with
                experienced doctors and hospitals across India.
              </p>
            </div>

            {/* Column 2 — Navigation */}
            <div className="footer-col links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/department">Services</a></li>
                <li><a href="/appointment">Appointment</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3 — Contact Info */}
            <div className="footer-col contact">
              <h3 className="cu" style={{ color: "white" }}>Contact Us</h3>
              <ul>
                <li><i className="fa-solid fa-location-dot"></i> 45 MG Road, Lucknow</li>
                <li><i className="fa-solid fa-phone"></i> +91 98765 43210</li>
                <li><i className="fa-solid fa-envelope"></i> support@healthcareplus.com</li>
              </ul>
              <div className="social-links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} HealthCare+. All Rights Reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;

