import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const AdminLogin = () => {
  const [cookie, createcookie, removecookie] = useCookies()
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");


  const jump = useNavigate();

  // popup function 
  const showToast = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",


      // transition: Bounce,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId == "admin" && password == "123") {
      createcookie("admin", userId)
      jump("/admindashboard");
      showToast("Logged in")
    }
    else {
      alert("invailid userid or password")
    }
  };






  useEffect(() => {
    document.title = "Adminlogin";
  }, [])




  return (
    <div>

      <style>{`
        .login-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        /* Form Box */
        .login-card {
          width: 360px;
          background: #ffffff;
          padding: 30px 28px;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
          font-family: "Segoe UI", sans-serif;
        }

        .login-card h2 {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #0a6cff;
        }

        .login-card label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
          color: #333;
        }

        .login-card input {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .login-card input:focus {
          border-color: #0a6cff;
          outline: none;
          box-shadow: 0px 0px 5px rgba(10,108,255,0.3);
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background: #0a6cff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          color: white;
          cursor: pointer;
          margin-top: 5px;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: #084dbd;
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-card">
          <h2>Admin Login</h2>

          <form onSubmit={handleSubmit}>
            <label>User ID</label>
            <input
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
