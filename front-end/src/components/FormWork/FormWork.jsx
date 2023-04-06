import React, { useRef, useState, useEffect } from "react";
import ImgProfile from "../../assets/img/img_profile.png";
import IconAdmin from "../../../src/assets/img/admin.png";
import moment from "moment/moment";
import Style from "./FormWork.module.css";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { GetpreName, GetTbl_religion, GetBloodType } from "../../service/api";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
function FormWork() {
  let { id } = useParams();
  let navigate = useNavigate();
  const goBack = () => {
    navigate(`/register/DetailWork/${id}`);
  };
  const dateFormat = "DD/MM/YYYY";
  const [openModal_1, setOpenModal_1] = useState(false);
  const [openModal_2, setOpenModal_2] = useState(false);
  const [openModal_3, setOpenModal_3] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [calDate, setCalDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [titlename, setTitlename] = useState([]);
  const [religion, setReligion] = useState([]);
  const [bloodType, setbloodType] = useState([]);
  const [date, setDate] = useState({
    d: "",
    m: "",
    y: "",
  });

  const handleClickOpen = () => {
    setOpenModal_1(true);
  };
  const handleClickOpen2 = () => {
    setOpenModal_2(true);
  };
  const handleClickOpen3 = () => {
    setOpenModal_3(true);
  };

  const handleClose = () => {
    setOpenModal_1(false);
  };
  const closeModal = () => {
    setOpenModal_2(false);
  };
  const closeModal2 = () => {
    setOpenModal_3(false);
  };
  const handleChangeDate = (e) => {
    const BirdDay = e;
    const toData = new Date();
    const diff = new Date(toData - BirdDay);
    const ageyear = diff.getUTCFullYear() - 1970;
    const ageMonth = diff.getUTCMonth();
    const ageDay = diff.getUTCDate() - 1;
    console.log("ปี" + ageyear + "เดือน" + ageMonth, "วัน", ageDay);
    setDate({
      d: ageDay,
      m: ageMonth,
      y: ageyear,
    });
  };
  const fetData = async () => {
    let datatitleName = await GetpreName();
    let data_religion = await GetTbl_religion();
    let data_Bloodtype = await GetBloodType();
    console.log(data_Bloodtype);
    setbloodType(data_Bloodtype);
    setTitlename(datatitleName);
    setReligion(data_religion);
  };

  useEffect(() => {
    fetData();
  }, []);
  return (
    <>
      {/* {id} */}
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
              เเบบฟอร์มสมัครงาน
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
                        >
                          <option>เลือก</option>
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
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">นามสกุล</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">สัญชาติ</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">เชื้อชาติ</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ศาสนา</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>เลือก</option>
                          {religion.map((val, idx) => {
                            return (
                              <option key={idx} value={val.religion_id}>
                                {val.religion_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ศาสนา</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>เลือก</option>
                          {bloodType.map((val, idx) => {
                            return (
                              <option key={idx} value={val.blood_id}>
                                {val.blood_name}
                              </option>
                            );
                          })}
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
                            value={calDate}
                            onChange={(newValue) => {
                              setCalDate(newValue);
                            }}
                            slotProps={{ textField: { size: "small" } }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="text-center ">
                        <p className="m-0">อายุ 0 ปี 0 เดือน 0 วัน</p>
                      </div>
                    </div>
                    <div className="col-md-12 py-2 mb-3">
                      <div className="row">
                        <div className="col-md-3">
                          <p className="m-0">สถานภาพทางครอบครัว</p>
                        </div>
                        <div className="col-md-9">
                          <div className="row m-0">
                            <div className="col-md-3">
                              <div>
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label mx-2"
                                  htmlFor="flexRadioDefault1"
                                >
                                  โสด
                                </label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label mx-2"
                                  htmlFor="flexRadioDefault1"
                                >
                                  สมรส
                                </label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label mx-2"
                                  htmlFor="flexRadioDefault1"
                                >
                                  หย่า
                                </label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div>
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label mx-2"
                                  htmlFor="flexRadioDefault1"
                                >
                                  หม้าย
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          ชื่อคู่สมรส(กรณีสมรส)
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ตำแหน่งที่สมัคร</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>เลือก</option>
                        </select>
                      </div>
                    </div>
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
                      <p>ประวัติการศึกษา</p>
                    </div>
                    <div className="col-md-12 text-end">
                      <span
                        className="btn btn-success mb-3"
                        id="insertEdu"
                        onClick={handleClickOpen}
                      >
                        เพิ่มข้อมูล
                      </span>

                      <Dialog
                        fullWidth
                        open={openModal_1}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <form>
                          <DialogTitle
                            id="alert-dialog-title"
                            style={{
                              textAlign: "center",
                              borderBottom: "1px solid #dee2e6",
                            }}
                          >
                            เพิ่มประวัติการศึกษา
                          </DialogTitle>

                          <DialogContent>
                            <div className="pt-2">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วุฒิที่ได้รับ
                                        </label>
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                          required
                                        >
                                          <option value="">เลือก</option>
                                          <option value="1">One</option>
                                          <option value="2">Two</option>
                                          <option value="3">Three</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          ชื่อสถานศึกษา
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          สาขาวิชา
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="สาขาวิชา"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          คะแนนเฉลี่ยตลอดหลักสูตร
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="คะแนนเฉลี่ยตลอดหลักสูตร"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วันที่เริ่ม
                                        </label>
                                        <div>
                                          <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                            adapterLocale="th"
                                          >
                                            <DatePicker
                                              className="form-control"
                                              label="วัน/เดือน/ปี"
                                              value={startDate}
                                              onChange={(newValue) => {
                                                setStartDate(newValue);
                                              }}
                                              inputFormat="dd-MM-yyyy"
                                              slotProps={{
                                                textField: { size: "small" },
                                              }}
                                            />
                                          </LocalizationProvider>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วันที่จบการศึกษา
                                        </label>
                                        <LocalizationProvider
                                          dateAdapter={AdapterDayjs}
                                          adapterLocale="th"
                                        >
                                          <DatePicker
                                            className="form-control"
                                            label="วัน/เดือน/ปี"
                                            inputFormat="dd-MM-yyyy"
                                            onChange={(newValue) => {
                                              console.log(newValue);
                                            }}
                                            slotProps={{
                                              textField: { size: "small" },
                                            }}
                                          />
                                        </LocalizationProvider>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                          <DialogActions className="w-100 border-top">
                            <button
                              // type="submit"
                              className="btn btn-outline-success mx-auto"
                            >
                              บันทึก
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary mx-auto"
                              onClick={handleClose}
                            >
                              ยกเลิก
                            </button>
                          </DialogActions>
                        </form>
                      </Dialog>
                    </div>
                    <div className="col-md-12">
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>ใบอนุญาตประกอบวิชาชีพ</p>
                    <div className="col-md-12 text-end">
                      <span
                        className="btn btn-success mb-3"
                        id="insertEdu"
                        onClick={handleClickOpen2}
                      >
                        เพิ่มข้อมูล
                      </span>
                      <Dialog
                        fullWidth
                        open={openModal_2}
                        onClose={closeModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <form>
                          <DialogTitle
                            id="alert-dialog-title"
                            style={{
                              textAlign: "center",
                              borderBottom: "1px solid #dee2e6",
                            }}
                          >
                            เพิ่มประวัติการศึกษา
                          </DialogTitle>

                          <DialogContent>
                            <div className="pt-2">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          ชื่อใบประกอบวิชาชีพ
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ชื่อใบประกอบวิชาชีพ"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          เลขที่
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="เลขที่"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          ครั้งที่ 1
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ครั้งที่ 1"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วันที่เริ่ม
                                        </label>
                                        <div>
                                          <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                            adapterLocale="th"
                                          >
                                            <DatePicker
                                              className="form-control"
                                              label="วัน/เดือน/ปี"
                                              value={startDate}
                                              onChange={(newValue) => {
                                                setStartDate(newValue);
                                              }}
                                              inputFormat="dd-MM-yyyy"
                                              slotProps={{
                                                textField: { size: "small" },
                                              }}
                                            />
                                          </LocalizationProvider>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วันที่จบการศึกษา
                                        </label>
                                        <LocalizationProvider
                                          dateAdapter={AdapterDayjs}
                                          adapterLocale="th"
                                        >
                                          <DatePicker
                                            className="form-control"
                                            label="วัน/เดือน/ปี"
                                            inputFormat="dd-MM-yyyy"
                                            onChange={(newValue) => {
                                              console.log(newValue);
                                            }}
                                            slotProps={{
                                              textField: { size: "small" },
                                            }}
                                          />
                                        </LocalizationProvider>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                          <DialogActions className="w-100 border-top">
                            <button
                              type="submit"
                              className="btn btn-outline-success mx-auto"
                            >
                              บันทึก
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary mx-auto"
                              onClick={closeModal}
                            >
                              ยกเลิก
                            </button>
                          </DialogActions>
                        </form>
                      </Dialog>
                    </div>
                    <div className="col-md-12">
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>ประวัติการทำงาน</p>
                    <div className="col-md-12 text-end">
                      <span
                        className="btn btn-success mb-3"
                        id="insertEdu"
                        onClick={handleClickOpen3}
                      >
                        เพิ่มข้อมูล
                      </span>
                      <Dialog
                        fullWidth
                        maxWidth="md"
                        open={openModal_3}
                        onClose={closeModal2}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <form>
                          <DialogTitle
                            id="alert-dialog-title"
                            style={{
                              textAlign: "center",
                              borderBottom: "1px solid #dee2e6",
                            }}
                          >
                            เพิ่มประวัติการทำงาน
                          </DialogTitle>

                          <DialogContent>
                            <div className="pt-2">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          สถานที่ทำงาน
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="สถานที่ทำงาน"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          ตำแหน่ง
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ตำแหน่ง/ลักษณะงาน"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          เงินเดือนสุดท้ายก่อนออก
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="เงินเดือนสุดท้ายก่อนออก"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วันที่เริ่ม
                                        </label>
                                        <div>
                                          <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                            adapterLocale="th"
                                          >
                                            <DatePicker
                                              className="form-control"
                                              label="วัน/เดือน/ปี"
                                              value={startDate}
                                              onChange={(newValue) => {
                                                setStartDate(newValue);
                                              }}
                                              inputFormat="dd-MM-yyyy"
                                              slotProps={{
                                                textField: { size: "small" },
                                              }}
                                            />
                                          </LocalizationProvider>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          วันที่จบการศึกษา
                                        </label>
                                        <LocalizationProvider
                                          dateAdapter={AdapterDayjs}
                                          adapterLocale="th"
                                        >
                                          <DatePicker
                                            className="form-control"
                                            label="วัน/เดือน/ปี"
                                            inputFormat="dd-MM-yyyy"
                                            onChange={(newValue) => {
                                              console.log(newValue);
                                            }}
                                            slotProps={{
                                              textField: { size: "small" },
                                            }}
                                          />
                                        </LocalizationProvider>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div>
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          เหตุผลที่ออก
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="เหตุผลที่ออก"
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                          <DialogActions className="w-100 border-top">
                            <button
                              type="submit"
                              className="btn btn-outline-success mx-auto"
                            >
                              บันทึก
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary mx-auto"
                              onClick={closeModal2}
                            >
                              ยกเลิก
                            </button>
                          </DialogActions>
                        </form>
                      </Dialog>
                    </div>
                    <div className="col-md-12">
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
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
                      <div className="row m-0">
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
                                    <option>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
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
                                  >
                                    <option>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
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
                                    <option>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
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
                                    <option>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
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

export default FormWork;
