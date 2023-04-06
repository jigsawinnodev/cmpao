import React from "react";
import { NavLink } from "react-router-dom";
import "./indexPage.css";
import Icon from "../../assets/img/img_nav.png";
import Wave from "../../assets/img/bg-03.png";
import Bg from "../../assets/img/bg-04.png";
import Avatar from "../../assets/img/avatar.svg";
function Register() {
  return (
    <>
      <div>
        <img className="wave" src={Wave} />
        <div className="container">
          <div className="img">
            <img src={Bg} />
          </div>
          <div className="login-content mx-auto">
            <form className="fromRegister">
              <div className="text-center">
                <div className="d-flex px-2 py-4 justify-content-between">
                  <h3 style={{ fontWeight: "bold" }}>สมัครสมาชิก</h3>
                  <NavLink to={"/"}>
                    <button
                      type="button"
                      className="btn-close px-2"
                      aria-label="Close"
                    ></button>
                  </NavLink>
                </div>
                <div className="row m-0">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        Username
                        <p className="m-0" style={{ color: "red" }}>
                          *สำหรับการเข้าสู่ระบบ
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        ชื่อ
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        นามสกุล
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        Password
                        <p className="m-0" style={{ color: "red" }}>
                          *สำหรับการเข้าสู่ระบบ
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        เลขบัตรประจำตัวประชาชน
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        วันเดือนปีเกิด
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        Confirm-password
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        บ้านเลขที่
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        หมู่ที่
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        Email
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        จังหวัด
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        อำเภอ
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        เบอร์โทรศัพท์
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        ตำบล
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label d-flex"
                      >
                        ไปรษณีย์
                        <p className="m-0" style={{ color: "red" }}>
                          *
                        </p>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <input
                        className="form-check-input mx-1"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        ยอมรับเงื่อนไขและข้อตกลง
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 py-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btnRegister"
                    >
                      ลงทะเบียน
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
