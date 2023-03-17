import { React } from "react";
import Ball from "../../assets/img/ball.png";
import Icon1 from "../../assets/img/icon_1.png";
import Icon2 from "../../assets/img/icon_2.png";
import Icon3 from "../../assets/img/icon_3.png";
import IconProfile from "../../assets/img/icon_profile.png";
import IconContent from "../../assets/img/icon_4.png";

import { Link, Routes, Route, Outlet } from "react-router-dom";
// import Component
import EmptyWork from "../EmptyWork/EmptyWork";
import FormWork from "../FormWork/FormWork";
import VertyfyStatus from "../VertyfyStatus";
import DetailWork from "../DetailWork";

import style from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className="container-fluid px-4">
        <div className="row">
          <div
            className="col-md-2 shadow mb-4 p-0"
            style={{ backgroundcolor: "#065375" }}
          >
            <div className="row m-0">
              <div className="col-md-12 rounded-2 pt-5">
                <Link
                  to="/register"
                  className={"text-decoration-none " + style.Navigate}
                >
                  <div className={"rounded-2 py-3 " + style.setBGLink}>
                    <div className={style.BoxImg}>
                      <img
                        src={Ball}
                        alt=""
                        className={"img-fluid " + style.ImgBall}
                      />
                    </div>
                    <div className="row m-0">
                      <div className="col-md-3">
                        <div className="text-center my-auto text-md-end">
                          <img src={Icon1} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-md-9 p-0">
                        <div className="text-center text-md-start">
                          <p
                            className="m-0"
                            style={{
                              color: "#ffffff",
                              fontSize: "18.17px",
                            }}
                          >
                            ตำแหน่งงานว่าง
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-12 rounded-2 pt-2">
                <Link
                  to="FormWork"
                  className={"text-decoration-none " + style.Navigate}
                >
                  <div className={"rounded-2 py-3 " + style.setBGLink}>
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
                          <img src={Icon2} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-md-9 p-0">
                        <div className="text-center text-md-start">
                          <p
                            className="m-0"
                            style={{ color: "#ffffff", fontSize: "18.17px" }}
                          >
                            แบบฟอร์มสมัครงาน
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-12 rounded-2 pt-2 pb-4">
                <Link
                  to="VerifyStatus"
                  className={"text-decoration-none " + style.Navigate}
                >
                  <div className={"rounded-2 py-3 " + style.setBGLink}>
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
                          <img src={Icon3} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-md-9 p-0">
                        <div className="text-center text-md-start">
                          <p
                            className="m-0"
                            style={{ color: "#ffffff", fontSize: "18.17px" }}
                          >
                            ตรวจสอบสถานะ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <hr className="hr " />
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-7">
                    <div
                      className="pt-4 text-center"
                      style={{ color: "white" }}
                    >
                      <p>ข้อมูลส่วนตัว</p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="text-center">
                      <img src={IconProfile} alt="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="px-3" style={{ color: "white" }}>
                      <p className="m-0 text-md-start text-center py-2">
                        ชื่อ : มากศรี มีสุก
                      </p>
                      <p className="m-0 text-md-start text-center">
                        ที่อยู่ 123/456 ตำบล ช้างเผือก อำเภอ เมือง จังหวัด
                        เชียงใหม่
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="pt-5 pb-4">
                      <button
                        className={
                          "rounded-pill w-100 py-3 " + style.setColorBtn
                        }
                      >
                        Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="text-end  px-md-5">
              <p className="m-0" style={{ color: "white" }}>
                วันที่ 01/02/2023
              </p>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
