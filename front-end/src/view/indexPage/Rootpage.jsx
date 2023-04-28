import React, { useEffect, useState } from "react";
import "./indexPage.css";
import Icon from "../../assets/img/img_nav.png";
import Wave from "../../assets/img/bg-03.png";
import Bg from "../../assets/img/bg-04.png";
import Avatar from "../../assets/img/avatar.svg";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import Table from "react-bootstrap/Table";
import CountdownTimer from "./CountDown/CountdownTimer";
import {
  Get_person_NoSuccess,
  Get_person_All,
  Get_person_NoPayment,
  LoginUser,
  ShowDetailDataUser_Last,
  Show_DetailPositions,
} from "../../service/for_user";
import { useNavigate } from "react-router-dom";
function Rootpage() {
  const navigate = useNavigate();
  const [person, SetPerson] = useState([]);
  const [position, setPosition] = useState([]);
  const [dataForm, SetdataForm] = useState({
    username: "",
    password: "",
  });

  const HandleForm = async (e) => {
    e.preventDefault();
    const res = await LoginUser(dataForm);
    // console.log(res);
    if (res.status == "success") {
      localStorage.setItem("token", res.token);
      if (res.is_accept == null) {
        navigate("is_accept");
      } else {
        navigate("register");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Username หรือ Password ผิด กรุณากรอกใหม่",
      });
    }
  };

  const THREE_DAYS_IN_MS = 10 * 1000;
  // const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  // const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  const GetData = async () => {
    const res = await Get_person_NoSuccess();
    const p_all = await Get_person_All();
    const p_NoPayment = await Get_person_NoPayment();
    const detailUser = await ShowDetailDataUser_Last();
    const detailPosition = await Show_DetailPositions();
    // console.log(detailUser);
    SetPerson(detailUser);
    setPosition(detailPosition);
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div>
        <img className="wave" src={Wave} />
        <div className="container">
          {/* <div className="img"> */}
          <div className="row pt-1 my-auto  h-100">
            <div className="col-md-6 my-auto px-3 order-2 order-md-1 pb-3 pt-3">
              <div className="row gy-3">
                <div className="col-md-6 ">
                  <div
                    className="box shadow-lg d-flex justify-content-between h-100 rounded-3 py-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="right-side my-auto px-4">
                      <div className="box-topic d-flex">
                        ตำเเหน่งที่เปิดรับสมัคร
                      </div>
                      <h3 className="">50 ตำเเหน่ง</h3>
                      <div className="indicator">
                        <p
                          className="m-0 text-start"
                          style={{ fontSize: "14px" }}
                        >
                          อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-2 my-auto rounded mx-4"
                      style={{ backgroundColor: "#cce5ff" }}
                    >
                      <i
                        className="bi bi-person-fill-add cart my-auto text-center"
                        style={{ fontSize: "30px", color: "#66b0ff" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="box shadow-lg d-flex justify-content-between h-100 rounded py-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="right-side my-auto px-4">
                      <div className="box-topic">จำนวนผู้สมัครทั้งหมด</div>
                      <h3 className="">{person.count_applicant_all} คน</h3>
                      <div className="indicator">
                        <p
                          className="m-0 text-start"
                          style={{ fontSize: "14px" }}
                        >
                          อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-2 my-auto rounded mx-4"
                      style={{ backgroundColor: "#c0f2d8" }}
                    >
                      <i
                        className="bi bi-person-fill-add cart my-auto text-center"
                        style={{ fontSize: "30px", color: "#2bd47d" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="box shadow-lg d-flex justify-content-between h-100 rounded py-3 "
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="right-side my-auto ps-4">
                      <div className="box-topic" style={{ fontSize: "15px" }}>
                        จำนวนผู้ที่เอกสารไม่สมบูรณ์
                      </div>
                      <h3 className="">{person.count_warm} คน</h3>
                      <div className="indicator">
                        <p
                          className="m-0 text-start"
                          style={{ fontSize: "14px" }}
                        >
                          อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-2 my-auto rounded mx-4"
                      style={{ backgroundColor: "#ffe8b3" }}
                    >
                      <i
                        className="bi bi-person-fill-exclamation cart my-auto text-center"
                        style={{ fontSize: "30px", color: "#ffc233" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="box shadow-lg d-flex justify-content-between h-100 rounded py-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="right-side my-auto px-4">
                      <div className="box-topic">จำนวนผู้ที่ค้างชำระเงิน</div>
                      <h3 className="">{person.count_person_pay_no} คน</h3>
                      <div className="indicator">
                        <p
                          className="m-0 text-start"
                          style={{ fontSize: "14px" }}
                        >
                          อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-2 my-auto rounded mx-4"
                      style={{ backgroundColor: "#f7d4d7" }}
                    >
                      <i
                        className="bi bi-person-fill-x cart my-auto text-center"
                        style={{ fontSize: "30px", color: "#e05260" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="recent-sales box shadow rounded"
                    style={{ backgroundColor: "white" }}
                  >
                    {/* <div className="title">Recent Sales</div> */}
                    <div
                      className="sales-details px-3"
                      style={{ fontSize: "16px" }}
                    >
                      <h5 className="text-center py-4 d-flex justify-content-center my-auto">
                        ตำเเหน่งที่เปิดรับสมัคร
                        {moment(person.jc_end).format("DD/MM/YYYY") >=
                        moment().add("year", 543).format("DD/MM/YYYY") ? (
                          <p className="m-0">เปิดรับสมัคร</p>
                        ) : (
                          <p className="m-0 mx-1" style={{ color: "red" }}>
                            ปิดรับสมัคร
                          </p>
                        )}
                      </h5>
                      <div
                        className="table-responsive"
                        style={{ maxHeight: "240px" }}
                      >
                        <Table responsive hover style={{ fontSize: "16px" }}>
                          <thead style={{ backgroundColor: "#F6F1E9" }}>
                            <tr className="text-center">
                              <th>ตำเเหน่ง</th>
                              <th>จำนวนที่รับ</th>
                              <th>จำนวนผู้สมัคร</th>
                              {/* <th>ระยะเวลา</th> */}
                            </tr>
                          </thead>
                          <tbody className="overflow-auto">
                            {position.map((value, idx) => {
                              // console.log(value);
                              return (
                                <tr key={idx}>
                                  <td>{value.position_name}</td>
                                  <td className="text-center">
                                    {value.count_position
                                      ? value.count_position + " ตำเเหน่ง"
                                      : 0 + " ตำเเหน่ง"}
                                  </td>
                                  <td className="text-center">
                                    {value.count_apply + " ราย"}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                      <div className="py-2">
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center px-3 my-auto py-3 order-1 order-md-2 ">
              <div className="login-content mx-auto ">
                <form className="fromlogin" onSubmit={HandleForm}>
                  <img src={Icon} className="img-fluid py-2" />
                  <h5 className="title m-0">
                    องค์การบริหารส่วนจังหวัดเชียงใหม่
                  </h5>
                  <p>Chiang Mai Provincial Administrative Organization</p>
                  <div className="input-div one py-2">
                    <div className="d-flex">
                      <i
                        className="bi bi-person-fill my-auto mx-2"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            username: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="input-div pass py-2">
                    <div className="d-flex">
                      <i
                        className="bi bi-key-fill my-auto mx-2"
                        style={{ fontSize: "20px" }}
                      ></i>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <a href="#" className="float-end py-2 text-dark px-1">
                    Forgot Password?
                  </a>
                  <div className="mx-auto px-5">
                    <button type="submit" className="btnLogin">
                      เข้าสู่ระบบ
                    </button>
                  </div>
                  <div className="mx-auto">
                    หากท่านยังไม่มี username/password คลิก
                    <NavLink to={"Newuser"} className="text-decoration-none">
                      ลงทะเบียน
                    </NavLink>
                  </div>
                  <div className="pb-2">
                    คู่มือสำหรับผู้สมัครสอบ
                    <a href="" className="text-decoration-none" download>
                      คลิก
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <img src={Bg} /> */}
          {/* </div> */}
          {/* <div className="login-content mx-auto order-1 order-md-">
            <form className="fromlogin" onSubmit={HandleForm}>
              <img src={Icon} className="img-fluid py-2" />
              <h5 className="title m-0">องค์การบริหารส่วนจังหวัดเชียงใหม่</h5>
              <p>Chiang Mai Provincial Administrative Organization</p>
              <div className="input-div one py-2">
                <div className="d-flex">
                  <i
                    className="bi bi-person-fill my-auto mx-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                    onChange={(e) => {
                      SetdataForm({
                        ...dataForm,
                        username: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="input-div pass py-2">
                <div className="d-flex">
                  <i
                    className="bi bi-key-fill my-auto mx-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={(e) => {
                      SetdataForm({
                        ...dataForm,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <a href="#" className="float-end py-2 text-dark px-1">
                Forgot Password?
              </a>
              <div className="mx-auto px-5">
                <button type="submit" className="btnLogin">
                  เข้าสู่ระบบ
                </button>
              </div>
              <div className="mx-auto">
                หากท่านยังไม่มี username/password คลิก
                <NavLink to={"Newuser"} className="text-decoration-none">
                  ลงทะเบียน
                </NavLink>
              </div>
              <div className="pb-5">
                คู่มือสำหรับผู้สมัครสอบ
                <a href="" className="text-decoration-none" download>
                  คลิก
                </a>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Rootpage;
