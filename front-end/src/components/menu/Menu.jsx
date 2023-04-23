import React, { useEffect, useState } from "react";
import Ball from "../../assets/img/ball.png";
import Icon1 from "../../assets/img/icon_1.png";
import Icon2 from "../../assets/img/icon_2.png";
import Icon3 from "../../assets/img/icon_3.png";
import IconProfile from "../../assets/img/icon_profile.png";
import IconContent from "../../assets/img/icon_4.png";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
// import Component
import EmptyWork from "../EmptyWork/EmptyWork";
import FormWork from "../FormWork/FormWork";
import VertyfyStatus from "../VertifyStatus/VertyfyStatus";
import DetailWork from "../DetailWork/DetailWork";
import style from "./Menu.module.css";
import { color } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Vertify_token } from "../../service/for_user";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");

function Menu() {
  const [dataVertify, setDataVertify] = useState({});
  const Verifytoken = async () => {
    const token = localStorage.getItem("token");
    const resVerify = await Vertify_token(token);
    if (resVerify.status) {
      setDataVertify(resVerify);
    } else {
      navigate("/");
    }
  };

  const navigate = useNavigate();
  const LogOut = () => {
    // console.log("test");
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    Verifytoken();
  }, []);
  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="row m-0 " style={{ backgroundColor: "white" }}>
          <div
            className="col-md-2 p-0 shadow-lg "
            // style={{ height: "calc(96vh - 68px)" }}
          >
            <div className="row m-0 py-3 rounded">
              <div className="col-md-12 rounded-2">
                <NavLink
                  to="/register/"
                  className="mx-auto text-decoration-none"
                >
                  {({ isActive, isPending }) => {
                    // console.log(isActive);
                    if (isActive) {
                      return (
                        <div
                          className={"rounded-2 py-3"}
                          style={{ backgroundColor: "#6832ae" }}
                        >
                          <div className={style.BoxImg}>
                            <img
                              src={Ball}
                              alt=""
                              className={"img-fluid " + style.ImgBall}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div className="text-center text-md-end">
                                <i
                                  className="bi bi-person-fill-add"
                                  style={{ fontSize: "22px", color: "white" }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-md-9 p-0 my-auto">
                              <div className="text-center text-md-start">
                                <p
                                  className="m-0"
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "18.17px",
                                  }}
                                >
                                  แบบฟอร์มสมัครงาน
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className={"rounded-2 py-3"}
                          style={{ backgroundColor: "#EEEEEE" }}
                        >
                          <div className={style.BoxImg}>
                            <img
                              src={Ball}
                              alt=""
                              className={"img-fluid " + style.ImgBall}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div className="text-center text-md-end">
                                <i
                                  className="bi bi-person-add"
                                  style={{ fontSize: "22px", color: "black" }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-md-9 p-0 my-auto">
                              <div className="text-center text-md-start">
                                <p
                                  className="m-0"
                                  style={{
                                    color: "black",
                                    fontSize: "18.17px",
                                  }}
                                >
                                  แบบฟอร์มสมัครงาน
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }}
                </NavLink>
              </div>
              {/* <div className="col-md-12 rounded-2 pt-2">
                <NavLink to="FormWork" className="mx-auto text-decoration-none">
                  {({ isActive, isPending }) => {
                    // console.log(isActive);
                    if (isActive) {
                      return (
                        <div
                          className={"rounded-2 py-3"}
                          style={{ backgroundColor: "#6832ae" }}
                        >
                          <div className={style.BoxImg}>
                            <img
                              src={Ball}
                              alt=""
                              className={"img-fluid " + style.ImgBall}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div className="text-center text-md-end">
                                <i
                                  className="bi bi-clipboard-plus-fill"
                                  style={{ fontSize: "22px", color: "white" }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-md-9 p-0 my-auto">
                              <div className="text-center text-md-start">
                                <p
                                  className="m-0"
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "18.17px",
                                  }}
                                >
                                  แบบฟอร์มสมัครงาน
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className={"rounded-2 py-3"}
                          style={{ backgroundColor: "#EEEEEE" }}
                        >
                          <div className={style.BoxImg}>
                            <img
                              src={Ball}
                              alt=""
                              className={"img-fluid " + style.ImgBall}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div className="text-center text-md-end">
                                <i
                                  className="bi bi-clipboard-plus"
                                  style={{ fontSize: "22px", color: "black" }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-md-9 p-0 my-auto">
                              <div className="text-center text-md-start">
                                <p
                                  className="m-0"
                                  style={{
                                    color: "black",
                                    fontSize: "18.17px",
                                  }}
                                >
                                  แบบฟอร์มสมัครงาน
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }}
                </NavLink>
              </div> */}
              <div className="col-md-12 rounded-2 pt-2 border-bottom pb-3">
                <NavLink
                  to="VerifyStatus"
                  className="mx-auto text-decoration-none"
                >
                  {({ isActive, isPending }) => {
                    // console.log(isActive);
                    if (isActive) {
                      return (
                        <div
                          className={"rounded-2 py-3"}
                          style={{ backgroundColor: "#6832ae" }}
                        >
                          <div className={style.BoxImg}>
                            <img
                              src={Ball}
                              alt=""
                              className={"img-fluid " + style.ImgBall}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div className="text-center text-md-end">
                                <i
                                  className="bi bi-clipboard2-check-fill"
                                  style={{ fontSize: "22px", color: "white" }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-md-9 p-0 my-auto">
                              <div className="text-center text-md-start">
                                <p
                                  className="m-0"
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "18.17px",
                                  }}
                                >
                                  ตรวจสอบสถานะ
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className={"rounded-2 py-3"}
                          style={{ backgroundColor: "#EEEEEE" }}
                        >
                          <div className={style.BoxImg}>
                            <img
                              src={Ball}
                              alt=""
                              className={"img-fluid " + style.ImgBall}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div className="text-center text-md-end">
                                <i
                                  className="bi bi-clipboard2-check"
                                  style={{ fontSize: "22px", color: "black" }}
                                ></i>
                              </div>
                            </div>
                            <div className="col-md-9 p-0 my-auto">
                              <div className="text-center text-md-start">
                                <p
                                  className="m-0"
                                  style={{
                                    color: "black",
                                    fontSize: "18.17px",
                                  }}
                                >
                                  ตรวจสอบสถานะ
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }}
                </NavLink>
              </div>
              <div className="col-md-12">
                <div className="row m-0">
                  <div className="col-md-12 py-4">
                    <div className="text-center">
                      <img src={IconProfile} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center">
                      <h5>ข้อมูลส่วนตัว</h5>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="">
                      <p className="m-0 text-md-start text-center py-2">
                        ชื่อ :{" "}
                        {dataVertify.m_firstname + " " + dataVertify.m_lastname}
                      </p>
                      <p className="m-0 text-md-start text-center">
                        ที่อยู่{" "}
                        {dataVertify.m_house_no + "/" + dataVertify.m_moo} ตำบล
                        ช้างเผือก อำเภอ เมือง จังหวัด เชียงใหม่
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="py-4 text-center">
                      <div className="d-flex justify-content-center flex-column flex-md-column ">
                        <NavLink to="Edit_profile">
                          <button className={style.SettingProfile}>
                            เเก้ไขข้อมูล
                          </button>
                        </NavLink>

                        <button
                          className={style.logoutUser + " mx-auto"}
                          onClick={() => LogOut()}
                        >
                          ออกจากระบบ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
