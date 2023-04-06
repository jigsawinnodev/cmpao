import React, { useState } from "react";
import ImgNav from "../assets/img/img_nav.png";
import "../App.css";

function Navbar() {
  const [ShowNavbar, setShowNavbar] = useState(false);
  const Show_Navbar = () => {
    console.log(ShowNavbar);
    setShowNavbar(!ShowNavbar);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg py-2 border-bottom  "
        style={{ backgroundColor: "#6832ae" }}
      >
        <div className="container-fluid px-4 px-md-5">
          <img src={ImgNav} alt="" className="img-fluid my-auto" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <div className="" style={{ color: "White", fontSize: 22 }}>
                    องค์การบริหารส่วนจังหวัดเชียงใหม่
                  </div>
                  <div style={{ fontSize: 16, color: "White" }}>
                    Chiang Mai Provincial Administrative Organization
                  </div>
                </a>
              </li>
            </ul>
            <div>
              <h2
                className="mt-5 mb-0 text-center text-md-start"
                style={{ fontSize: 22, color: "White" }}
              >
                ระบบการรับสมัครบุคลากรออนไลน์
              </h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
