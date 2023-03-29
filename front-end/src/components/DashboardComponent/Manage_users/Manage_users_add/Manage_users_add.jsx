import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Boy from "../../../../assets/img/boy.png";
import { useNavigate } from "react-router-dom";
import {
  GetpreName,
  Get_permission,
  Insert_Edit_U,
  FindByIdUser,
} from "../../../../service/api";
import moment from "moment";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
function Manage_users_add() {
  var { id } = useParams();
  const navigate = useNavigate();
  const days = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "dd/MM/yyyy",
    },
  };

  const [preName, setpreName] = useState([]);
  const [G_permission, Getpermission] = useState([]);
  const [showImg, setShowImg] = useState();
  const [DataByID, setDataByID] = useState({});

  // insert new user
  const [idcard, setIdcard] = useState("");
  const [titalname, setTitalname] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const DateDatatest = "29/03/2023";
  const [birthday, setBirthday] = useState(Date.now("15/03/2023"));
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
    const format2 = "YYYY-MM-DD";
    const formathDate = moment(birthday).format(format2);
    if (password == confirmPassword) {
      const formData = new FormData();
      formData.append("img", fileImg);
      formData.append("user_idcard", idcard);
      formData.append("user_prename", titalname);
      formData.append("user_firstname", name);
      formData.append("user_lastname", lname);
      formData.append("user_username", username);
      formData.append("user_password", password);
      formData.append("user_birthday", formathDate);
      formData.append("user_position", position);
      formData.append("user_permission", permition);
      formData.append("user_email", email);
      formData.append("user_phone", phone);
      formData.append("user_active", statusActive);
      let responsive = await Insert_Edit_U(formData);
      if (responsive.status == 1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "ชื่อผู้ใช้งานซ้ำ!!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "บันทึกข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/Dashboard/User");
        });
      }
      setIdcard("");
      setTitalname("");
      setName("");
      setLname("");
      setBirthday("");
      setPosition("");
      setPhone("");
      setEmail("");
      setPermition("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setStatusActive("");
    }
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
    if (id != "") {
      console.log(id);
      let data = await FindByIdUser(id);
      console.log(data.data[0].user_id);
      // console.log(data.data[0].birthday);
      // const ConvertData = data.data[0].birthday.split("/");
      // const y = Number(ConvertData[2]) + 543;
      // data.data[0].birthday = `${ConvertData[0]}/${ConvertData[1]}/${y}`;
      // setDataByID(data);
    }
  };
  useEffect(() => {
    DataPreName();
    FindDataById();
  }, []);

  return (
    <>
      {/* {JSON.stringify(moment(DataByID.user_birthday).format("X"))} */}
      {JSON.stringify(id)}
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
                          defaultValue={idcard ? idcard : DataByID.user_idcard}
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
                        <DatePicker
                          className="w-100 form-control"
                          selected={DataByID.user_birthday}
                          onChange={(date) => setBirthday(date)}
                          showIcon
                          showYearDropdown
                          showMonthDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={50}
                          locale={locale}
                          dateFormat="dd/MM/yyyy"
                        />
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
    </>
  );
}

export default Manage_users_add;
