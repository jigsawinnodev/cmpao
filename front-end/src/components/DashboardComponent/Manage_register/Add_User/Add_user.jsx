import React, { useState, useEffect } from "react";
import ImgProfile from "../../../../assets/img/img_profile.png";
import IconAdmin from "../../../../assets/img/admin.png";
import moment from "moment/moment";
import Style from "../../../FormWork/FormWork.module.css";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import {
  GetpreName,
  GetTbl_religion,
  GetBloodType,
  GetStatus_relationship,
} from "../../../../service/api";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Vertify_token, Getpostion_injob } from "../../../../service/for_user";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
var token = localStorage.getItem("token");
function Add_user() {
  var { id } = useParams();
  let navigate = useNavigate();
  const goBack = () => {
    navigate(`/register/DetailWork/${id}`);
  };
  const [dataVertify, setDataVertify] = useState({});
  const [position_injob, setPosition_injob] = useState([]);
  const Verifytoken = async () => {
    const token = localStorage.getItem("token");
    const resVerify = await Vertify_token(token);
    let data_Position_injob = await Getpostion_injob(id, token);
    console.log(data_Position_injob);

    setPosition_injob(data_Position_injob[0]);
    if (resVerify.status) {
      setDataVertify(resVerify.data);
    } else {
      navigate("/");
    }
  };
  const [openModal_1, setOpenModal_1] = useState(false);
  const [openModal_2, setOpenModal_2] = useState(false);
  const [openModal_3, setOpenModal_3] = useState(false);
  const [startDate, setStartDate] = useState();
  const [titlename, setTitlename] = useState([]);
  const FetDataFormApi = async () => {
    let resPrename = await GetpreName(token);
    console.log(resPrename);
    setTitlename(resPrename);
  };



  
  useEffect(() => {
    Verifytoken();
    FetDataFormApi();
  }, []);
  return (
    <>
      <div className="">
        <div
          className="px-md-0 my-2 shadow rounded"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="d-flex justify-content-center px-md-3 flex-column flex-md-row"
            style={{ backgroundColor: "white" }}
          >
            <h2 className="m-0 py-4 my-auto fw-bold px-md-2 text-center">
              เพิ่มผู้สมัคร
            </h2>
          </div>
          <div>
            <form action="">
              <div className="row m-0">
                <div className="col-md-8">
                  <div className="row m-0">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          คำนำหน้าชื่อ
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          required
                          value={dataVertify.m_prename}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_prename: e.target.value,
                            });
                          }}
                        >
                          <option value="">เลือก</option>
                          {titlename.map((val, idx) => {
                            return (
                              <option key={idx} value={val.prename_id}>
                                {val.prename_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ชื่อ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={dataVertify.m_firstname}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_firstname: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">นามสกุล</label>
                        <input
                          type="text"
                          className="form-control"
                          value={dataVertify.m_lastname}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_lastname: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">สัญชาติ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={dataVertify.m_nation}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_nation: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">เชื้อชาติ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={dataVertify.m_race}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_race: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ศาสนา</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={dataVertify.m_religion}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_religion: e.target.value,
                            });
                          }}
                        >
                          <option>เลือก</option>
                          {/* {religion.map((val, idx) => {
                            return (
                              <option key={idx} value={val.religion_id}>
                                {val.religion_name}
                              </option>
                            );
                          })} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">หมู่โลหิต</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={dataVertify.m_blood}
                          onChange={(e) => {
                            setDataVertify({
                              ...dataVertify,
                              m_blood: e.target.value,
                            });
                          }}
                        >
                          <option value="">เลือก</option>
                          {/* {bloodType.map((val, idx) => {
                            return (
                              <option key={idx} value={val.blood_id}>
                                {val.blood_name}
                              </option>
                            );
                          })} */}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p>
                        อายุนับถึงวันสุดท้ายในการรับสมัคร (อายุไม่ต่ำกว่า 18
                        ปีบริบูรณ์ และอายุไม่เกิน 60 ปี)
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="py-2">
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          adapterLocale="th"
                        >
                          <DatePicker
                            className="form-control"
                            label="วัน/เดือน/ปี"
                            inputFormat="dd-MM-yyyy"
                            value={dayjs(dataVertify.m_birthday)}
                            onChange={(newValue) => {
                              let newTime =
                                moment(newValue).format("YYYY-MM-DD");
                              // console.log(newValue);
                              setDataVertify({
                                ...dataVertify,
                                m_birthday: newTime,
                              });
                            }}
                            slotProps={{ textField: { size: "small" } }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="text-center ">
                        <p className="m-0">
                          {/* {dataVertify.m_birthday}
                          อายุ {moment().diff(dataVertify.m_birthday, "years")}
                          ปี เดือน{" "}
                          {moment().diff(dataVertify.m_birthday, "day")} วัน */}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 py-2 mb-3">
                      <div className="row">
                        <div className="col-md-3">
                          <p className="m-0">สถานภาพทางครอบครัว</p>
                        </div>
                        <div className="col-md-9">
                          <div className="row m-0">
                            {/* {Datarelationship.map((value, idx) => {
                              // console.log(value);
                              return (
                                <div className="col-md-3" key={idx}>
                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                      checked={
                                        dataVertify.m_relationship ==
                                        value.relationship_id
                                      }
                                      value={value.relationship_id}
                                      onChange={(e) => {
                                        // console.log(e.target.value);
                                        setDataVertify({
                                          ...dataVertify,
                                          m_relationship: e.target.value,
                                        });
                                      }}
                                    />
                                    <label
                                      className="form-check-label mx-2"
                                      htmlFor="flexRadioDefault1"
                                    >
                                      {value.relationship_name}
                                    </label>
                                  </div>
                                </div>
                              );
                            })} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ตำแหน่งที่สมัคร</label>
                        <span className="px-3">{position_injob.p_name}</span>
                      </div>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">อาชีพปัจจุบัน</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">อายุการทำงาน(ปี)</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">
                          อายุการทำงาน(เดือน)
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">สถานที่ทำงาน</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">กอง/แผนก</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="">
                        <div
                          className=" mx-auto"
                          style={{ height: "150px", width: "150px" }}
                        >
                          <img
                            src={IconAdmin}
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div style={{ marginTop: "54px" }}>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-md-12">
                  <div className="row m-0">
                    <div className="col-md-12">
                      <p className="pt-5 pt-md-0">ประวัติการศึกษา</p>
                    </div>
                    <div className="col-md-12 text-end">
                      {/* <span
                        className="btn btn-success mb-3"
                        id="insertEdu"
                        onClick={handleClickOpen}
                      >
                        เพิ่มข้อมูล
                      </span> */}
                      <span
                        className="Btn_Add_user my-2"
                        onClick={() => {
                          handleClickOpen();
                        }}
                      >
                        เพิ่มข้อมูล
                      </span>
                    </div>
                    <div className="col-md-12 table-responsive">
                      <table className="table table-bordered">
                        <thead className="text-center">
                          <tr>
                            <th scope="col">วุฒิที่ได้รับ </th>
                            <th scope="col">ชื่อสถานศึกษา</th>
                            <th scope="col">วันที่เริ่ม</th>
                            <th scope="col">วันที่จบการศึกษา</th>
                            <th scope="col">เครื่องมือ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>วิทยาลัยเทคนิคเชียงใหม่</td>
                            <td>ประกาศนียบัตรวิชาชีพชั้นสูง</td>
                            <td className="text-center">4 พฤษภาคม 2561</td>
                            <td className="text-center">4 พฤษภาคม 2563</td>
                            <td className="text-center">
                              <button type="button" className="btn btn-warning">
                                <i className="bi bi-pencil-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="pt-3 pt-md-0">ใบอนุญาตประกอบวิชาชีพ</p>
                    <div className="col-md-12 text-end">
                      {/* <span
                        className="btn btn-success mb-3"
                        id="insertEdu"
                        onClick={handleClickOpen2}
                      >
                        เพิ่มข้อมูล
                      </span> */}
                      <button className="Btn_Add_user my-2">เพิ่มข้อมูล</button>
                    </div>
                    <div className="col-md-12">
                      <table className="table table-bordered">
                        <thead className="text-center">
                          <tr>
                            <th scope="col">ครั้งที่ </th>
                            <th scope="col">ชื่อใบรับรอง</th>
                            <th scope="col">วันที่ให้ใบรับรอง</th>
                            <th scope="col">วันที่หมดอายุ</th>
                            <th scope="col">เครื่องมือ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center" scope="row">
                              1
                            </td>
                            <td> ประกาศนียบัตรวิชาชีพชั้นสูง</td>
                            <td className="text-center">4 พฤษภาคม 2561</td>
                            <td className="text-center">4 พฤษภาคม 2563</td>
                            <td className="text-center">
                              <button type="button" className="btn btn-warning">
                                <i className="bi bi-pencil-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="pt-3 pt-md-0">ประวัติการทำงาน</p>
                    <div className="col-md-12 text-end">
                      {/* <span
                        className="btn btn-success mb-3"
                        id="insertEdu"
                        onClick={handleClickOpen3}
                      >
                        เพิ่มข้อมูล
                      </span> */}
                      <button className="Btn_Add_user my-2">เพิ่มข้อมูล</button>
                    </div>
                    <div className="col-md-12">
                      <table className="table table-bordered">
                        <thead className="text-center">
                          <tr>
                            <th scope="col">สถานที่ทำงาน</th>
                            <th scope="col">ตำแหน่ง</th>
                            <th scope="col">เงินเดือนสุดท้ายก่อนออก</th>
                            <th scope="col">วันที่เริ่ม</th>
                            <th scope="col">วันที่สิ้นสุด</th>
                            <th scope="col">เครื่องมือ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>บริษัทกัมปนาท</td>
                            <td>โปรเเกรมเมอร์</td>
                            <td>14,000</td>
                            <td>5 พฤษภาคม 2561</td>
                            <td>4 พฤษภาคม 2563</td>
                            <td className="text-center">
                              <button type="button" className="btn btn-warning">
                                <i className="bi bi-pencil-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-12 pt-2">
                      <div className="mb-3">
                        <p className="m-0">ความรู้ความสามารถพิเศษ</p>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="8"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row ">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputEmail1"
                                  className="form-label"
                                >
                                  หมายเลขโทรศัพท์สถานที่ทำงาน
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="หมายเลขโทรศัพท์สถานที่ทำงาน"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    รหัสประจำตัวประชาชน
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="รหัสประจำตัวประชาชน"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ออกให้ ณ จังหวัด
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option>เลือก</option>
                                    <option value={1}>เชียงใหม่</option>
                                    <option value={2}>ลำพูน</option>
                                    <option value={3}>ลำปาง</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <p>ที่อยู่ปัจจุบันที่ติดต่อได้</p>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    บ้านเลขที่
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="บ้านเลขที่"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    หมู่ที่
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="หมู่ที่"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ตรอก/ซอย
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ตรอก/ซอย"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ถนน
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ถนน"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    จังหวัด
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={handleSelectProvince}
                                  >
                                    <option>เลือก</option>
                                    <option value={1}>เชียงใหม่</option>
                                    <option value={2}>ลำพูน</option>
                                    <option value={3}>ตาก</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    อำเภอ/แขวง
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option>เลือก</option>
                                    <option value={1}>เมือง</option>
                                    <option value={2}>สารภี</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ตำบล/แขวง
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option>เลือก</option>
                                    <option value={1}>ในเมือง</option>
                                    <option value={2}>ช้างเผือก</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    รหัสไปรษณีย์
                                  </label>
                                  <input
                                    type="text"
                                    disabled
                                    className="form-control"
                                    placeholder="รหัสไปรษณีย์"
                                  ></input>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    หมายเลขโทรศัพย์มือถือ(ที่สามารถติดต่อได้)
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                  ></input>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">ชื่อบิดา</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ชื่อบิดา"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">อาชีพ</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="อาชีพ"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    ชื่อมารดา
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ชื่อมารดา"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    อาชีพ
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="อาชีพ"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="float-end">
                    <button className={Style.buttonSubmitForm + " mx-1"}>
                      บันทึก
                    </button>
                    <button
                      className={Style.buttonSubmitForm1 + " mx-1"}
                      onClick={() => {
                        goBack();
                      }}
                    >
                      ย้อนกลับ
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

export default Add_user;
