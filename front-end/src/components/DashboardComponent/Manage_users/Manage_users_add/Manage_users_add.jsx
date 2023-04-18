import React, { useState, useEffect } from "react";
import Boy from "../../../../assets/img/boy.png";
import { useNavigate } from "react-router-dom";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DayjsUtils from "@date-io/dayjs";
import { th } from "date-fns/locale";
import dayjs from "dayjs";
import {
  GetpreName,
  Get_permission,
  Insert_Edit_User_Add,
  FindByIdUser,
} from "../../../../service/api";
import moment from "moment";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function Manage_users_add() {
  var { id } = useParams();
  const navigate = useNavigate();
  // const days = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  // const months = [
  //   "มกราคม",
  //   "กุมภาพันธ์",
  //   "มีนาคม",
  //   "เมษายน",
  //   "พฤษภาคม",
  //   "มิถุนายน",
  //   "กรกฎาคม",
  //   "สิงหาคม",
  //   "กันยายน",
  //   "ตุลาคม",
  //   "พฤศจิกายน",
  //   "ธันวาคม",
  // ];
  // const locale = {
  //   localize: {
  //     day: (n) => days[n],
  //     month: (n) => months[n],
  //   },
  //   formatLong: {
  //     date: () => "dd/MM/yyyy",
  //   },
  // };

  const [preName, setpreName] = useState([]);
  const [G_permission, Getpermission] = useState([]);
  const [showImg, setShowImg] = useState();

  // for edit
  const [DataByID, setDataByID] = useState({
    user_active: "",
    user_birthday: "",
    user_email: "",
    user_firstname: "",
    user_id: "",
    user_idcard: "",
    user_img: "",
    user_lastname: "",
    user_password: "",
    user_permission: "",
    user_phone: "",
    user_position: "",
    user_prename: "",
    user_status: "",
    user_username: "",
    user_confirmpassword: "",
  });

  // insert new user
  const [idcard, setIdcard] = useState("");
  const [titalname, setTitalname] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [permition, setPermition] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [statusActive, setStatusActive] = useState(1);
  const [fileImg, setFileImg] = useState();

  // insert User Function

  const handleSubmitFormInsert = async (event) => {
    event.preventDefault();
    console.log("qwe");
    const format2 = "YYYY-MM-DD";
    const formathDate = moment(DataByID.user_birthday).format(format2);
    const formData = new FormData();
    formData.append("img", DataByID.user_img);
    formData.append("user_id", DataByID.user_id);
    formData.append("user_idcard", DataByID.user_idcard);
    formData.append("user_prename", DataByID.user_prename);
    formData.append("user_firstname", DataByID.user_firstname);
    formData.append("user_lastname", DataByID.user_lastname);
    formData.append("user_username", DataByID.user_username);
    formData.append("user_password", DataByID.user_password);
    formData.append("user_birthday", formathDate);
    formData.append("user_position", DataByID.user_position);
    formData.append("user_permission", DataByID.user_permission);
    formData.append("user_email", DataByID.user_email);
    formData.append("user_phone", DataByID.user_phone);
    formData.append("user_active", DataByID.user_active);
    // console.log(DataByID);
    Insert_Edit_User_Add(formData);
    // if (responsive.status == 1) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "ชื่อผู้ใช้งานซ้ำ!!",
    //   });
    // } else {
    //   Swal.fire({
    //     icon: "success",
    //     title: "บันทึกข้อมูลสำเร็จ",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   }).then(() => {
    //     navigate("/Dashboard/User");
    //   });
    // }
  };

  const handleSubmitFormEdit = async (event) => {
    event.preventDefault();
  };
  const DataPreName = async () => {
    let data = await GetpreName();
    let permition = await Get_permission();
    setpreName(data);
    Getpermission(permition.data);
  };
  function handleBacktoPage() {
    navigate("/Dashboard/User");
  }

  const FindDataById = async () => {
    if (id) {
      let data = await FindByIdUser(id);
      console.log(data);
      setDataByID(data[0]);
    }
  };

  useEffect(() => {
    DataPreName();
    FindDataById();
  }, []);

  if (id) {
    return (
      <>
        <div className="px-3 py-4">
          <div className="shadow-lg h-50 rounded-3">
            <nav>
              <div className="row w-100  pt-3 pb-4 m-0">
                <div className="col-md-12 my-auto">
                  <div className="text-start px-3">
                    <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                      เพิ่มข้อมูลผู้ใช้งาน
                    </h4>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmitFormInsert}>
                <div className="row px-3">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 px-4">
                        <input type="hidden" value={DataByID.user_id} />
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
                            required
                            defaultValue={DataByID.user_idcard}
                            placeholder="รหัสประจำตัวประชาชน"
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_idcard: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-4">
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
                                value={DataByID.user_prename}
                                onChange={(e) => {
                                  setDataByID({
                                    ...DataByID,
                                    user_prename: e.target.value,
                                  });
                                }}
                              >
                                <option value="">เลือก</option>
                                {preName.map(function (val, idx) {
                                  return (
                                    <option key={idx} value={val.prename_id}>
                                      {val.prename_name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                ชื่อ
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ชื่อ"
                                required
                                value={DataByID.user_firstname}
                                onChange={(e) => {
                                  setDataByID({
                                    ...DataByID,
                                    user_firstname: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            นามสกุล
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="นามสกุล"
                            required
                            value={DataByID.user_lastname}
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_lastname: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            วันเดือนปีเกิด
                          </label>
                          <div>
                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="th"
                            >
                              <DatePicker
                                className="form-control"
                                label="วัน/เดือน/ปี"
                                value={dayjs(DataByID.user_birthday)}
                                onChange={(e) => {
                                  setDataByID({
                                    ...DataByID,
                                    user_birthday: e.target.value,
                                  });
                                }}
                                slotProps={{ textField: { size: "small" } }}
                              />
                            </LocalizationProvider>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            ตำแหน่ง
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ตำแหน่ง"
                            required
                            value={DataByID.user_position}
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_position: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            เบอร์โทรศัพท์
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="เบอร์โทรศัพท์"
                            required
                            value={DataByID.user_phone}
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_phone: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            อีเมล
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={DataByID.user_email}
                            required
                            placeholder="อีเมล"
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_email: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      {DataByID.user_permission == 4 ? (
                        ""
                      ) : (
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              สิทธิ์การเข้าถึงข้อมูล
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={DataByID.user_permission}
                              required
                              onChange={(e) => {
                                setDataByID({
                                  ...DataByID,
                                  user_permission: e.target.value,
                                });
                              }}
                            >
                              <option value="">เลือก</option>
                              {G_permission.map((val, idx) => {
                                // console.log(val);
                                return (
                                  <option key={idx} value={val.permiss_id}>
                                    {val.permiss_name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      )}
                      {/* <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            สิทธิ์การเข้าถึงข้อมูล
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={DataByID.user_permission}
                            required
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_permission: e.target.value,
                              });
                            }}
                          >
                            <option value="">เลือก</option>
                            {G_permission.map((val, idx) => {
                              console.log(val);
                              return (
                                <option key={idx} value={val.permiss_id}>
                                  {val.permiss_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text-center">
                          {showImg ? (
                            <img
                              src={showImg}
                              alt=""
                              className="rounded-circle"
                              style={{ width: "170px", height: "170px" }}
                            />
                          ) : (
                            <img
                              src={DataByID.user_img}
                              alt=""
                              className="rounded-circle"
                              style={{ width: "170px", height: "170px" }}
                            />
                          )}
                          {/* <img
                            src={DataByID.user_img}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "170px", height: "170px" }}
                          /> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div style={{ paddingTop: "33px" }}>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_img: e.target.files[0],
                              });
                              setShowImg(
                                URL.createObjectURL(e.target.files[0])
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 pt-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            ชื่อผู้ใช้งาน
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อผู้ใช้งาน"
                            value={DataByID.user_username}
                            required
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_username: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            รหัสผ่าน
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="รหัสผ่าน"
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_password: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            ยืนยันรหัสผ่าน
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="ยืนยันรหัสผ่าน"
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_confirmpasswords: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            สถานะการใช้งาน
                          </label>
                          <select
                            className="form-select"
                            required
                            value={DataByID.user_active}
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_active: e.target.value,
                              });
                            }}
                          >
                            <option value="1">ใช้งาน</option>
                            <option value="0">ไม่ใช้งาน</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-5 pb-4">
                    <div className="text-end px-2">
                      <button
                        type="submit"
                        className="btn btn-outline-success mx-1"
                      >
                        บันทึก
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger mx-1"
                        onClick={() => {
                          handleBacktoPage();
                        }}
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-12 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    เพิ่มข้อมูลผู้ใช้งาน
                  </h4>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmitFormInsert}>
              <div className="row px-3">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6 px-4">
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
                          required
                          defaultValue={idcard ? idcard : idcard}
                          placeholder="รหัสประจำตัวประชาชน"
                          onChange={(e) => {
                            setIdcard(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-4">
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
                              value={
                                titalname ? titalname : DataByID.user_prename
                              }
                              onChange={(e) => {
                                setTitalname(e.target.value);
                              }}
                            >
                              <option value="">เลือก</option>
                              {preName.map(function (val, idx) {
                                return (
                                  <option key={idx} value={val.prename_id}>
                                    {val.prename_name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              ชื่อ
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ชื่อ"
                              required
                              defaultValue={
                                name ? name : DataByID.user_firstname
                              }
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          นามสกุล
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="นามสกุล"
                          required
                          defaultValue={lname ? lname : DataByID.user_lastname}
                          onChange={(e) => {
                            setLname(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          วันเดือนปีเกิด
                        </label>
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          adapterLocale="th"
                        >
                          <DatePicker
                            className="form-control"
                            label="วัน/เดือน/ปี"
                            value={dayjs(DataByID.user_birthday)}
                            onChange={(e) => {
                              setDataByID({
                                ...DataByID,
                                user_birthday: e.target.value,
                              });
                            }}
                            slotProps={{ textField: { size: "small" } }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          ตำแหน่ง
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ตำแหน่ง"
                          required
                          defaultValue=""
                          onChange={(e) => {
                            setPosition(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          เบอร์โทรศัพท์
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="เบอร์โทรศัพท์"
                          required
                          defaultValue=""
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          อีเมล
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          required
                          placeholder="อีเมล"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          สิทธิ์การเข้าถึงข้อมูล
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            setPermition(e.target.value);
                          }}
                        >
                          <option value={""}>เลือก</option>
                          {G_permission.map((val, idx) => {
                            return (
                              <option key={idx} value={val.permiss_id}>
                                {val.permiss_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-center">
                        <img
                          src={showImg}
                          alt=""
                          className="rounded-circle"
                          style={{ width: "170px", height: "170px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div style={{ paddingTop: "33px" }}>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          onChange={(e) => {
                            setFileImg(e.target.files[0]);
                            setShowImg(URL.createObjectURL(e.target.files[0]));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3 pt-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          ชื่อผู้ใช้งาน
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ชื่อผู้ใช้งาน"
                          required
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          รหัสผ่าน
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="รหัสผ่าน"
                          required
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          ยืนยันรหัสผ่าน
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="ยืนยันรหัสผ่าน"
                          required
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          สถานะการใช้งาน
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          required
                          onChange={(e) => {
                            setStatusActive(e.target.value);
                          }}
                        >
                          <option value={1}>ใช้งาน</option>
                          <option value={0}>ไม่ใช้งาน</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 pt-5 pb-4">
                  <div className="text-end px-2">
                    <button
                      type="submit"
                      className="btn btn-outline-success mx-1"
                    >
                      บันทึก
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger mx-1"
                      onClick={() => {
                        handleBacktoPage();
                      }}
                    >
                      ยกเลิก
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default Manage_users_add;
