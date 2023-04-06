import React from "react";
import "./indexPage.css";
import Icon from "../../assets/img/img_nav.png";
import Wave from "../../assets/img/bg-03.png";
import Bg from "../../assets/img/bg-04.png";
import Avatar from "../../assets/img/avatar.svg";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

function Rootpage() {
  return (
    <>
      <div>
        <img className="wave" src={Wave} />
        <div className="container">
          <div className="img">
            <img src={Bg} />
          </div>
          <div className="login-content mx-auto">
            <form className="fromlogin">
              <img src={Icon} className="img-fluid py-2" />
              <h5 className="title m-0">องค์การบริหารส่วนจังหวัดเชียงใหม่</h5>
              <p>Chiang Mai Provincial Administrative Organization</p>
              <div className="input-div one py-2">
                <div className="d-flex">
                  <i
                    class="bi bi-person-fill my-auto mx-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="input-div pass py-2">
                <div className="d-flex">
                  <i
                    class="bi bi-key-fill my-auto mx-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <a href="#" className="float-end py-2 text-dark px-1">
                Forgot Password?
              </a>
              <div className="mx-auto px-5">
                <button className="btnLogin">เข้าสู่ระบบ</button>
              </div>
              <div className="mx-auto">
                หากท่านยังไม่มี username/password คลิก
                <NavLink to={"Newuser"} className="text-decoration-none">
                  ลงทะเบียน
                </NavLink>
              </div>
              <div>
                คู่มือสำหรับผู้สมัครสอบ
                <a href="" className="text-decoration-none">
                  คลิก
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rootpage;
