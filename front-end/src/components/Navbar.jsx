import React from "react";
import ImgNav from "../assets/img/img_nav.png";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pt-3 ">
        <div
          className="container-fluid "
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <img src={ImgNav} alt="" className="img-fluid " />
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
                  <div className="" style={{ color: "White", fontSize: 20 }}>
                    องค์การบริหารส่วนจังหวัดเชียงใหม่
                  </div>
                  <div style={{ fontSize: 12, color: "White" }}>
                    Chiang Mai Provincial Administrative Organization
                  </div>
                </a>
              </li>
            </ul>
            <div>
              <h2
                className="mt-5 mb-0"
                style={{ fontSize: 25, color: "White" }}
              >
                ระบบการรับสมัครบุคลากรออนไลน์
              </h2>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "#065375" }}
      >
        <hr className="hr m-0  pb-1" style={{ color: "White", height: 0 }} />
      </div>
    </>
  );
}

export default Navbar;
