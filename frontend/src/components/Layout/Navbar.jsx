import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="/JobZee-logos__white.png" alt="logo" />
        </div>
        <ul className={show ? "menu show-menu" : "menu"}>
          <li>
            <button onClick={() => { setShow(false); navigateTo("/"); }}>HOME</button>
          </li>
          <li>
            <button onClick={() => { setShow(false); navigateTo("/job/getall"); }}>ALL JOBS</button>
          </li>
          <li>
            <button onClick={() => { setShow(false); navigateTo("/applications/me"); }}>
              {user && user.role === "Employer" ? "APPLICANT'S APPLICATIONS" : "MY APPLICATIONS"}
            </button>
          </li>
          {user && user.role === "Employer" && (
            <>
              <li>
                <button onClick={() => { setShow(false); navigateTo("/job/post"); }}>POST NEW JOB</button>
              </li>
              <li>
                <button onClick={() => { setShow(false); navigateTo("/job/me"); }}>VIEW YOUR JOBS</button>
              </li>
            </>
          )}
          <li>
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
          </li>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
