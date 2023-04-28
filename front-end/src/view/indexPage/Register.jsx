import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./indexPage.css";
import Icon from "../../assets/img/img_nav.png";
import Wave from "../../assets/img/bg-03.png";
import Bg from "../../assets/img/bg-04.png";
import Avatar from "../../assets/img/avatar.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DayjsUtils from "@date-io/dayjs";
import { th } from "date-fns/locale";
import dayjs from "dayjs";
import moment from "moment";
import Swal from "sweetalert2";
import {
  GetTbl_country,
  GetTbl_district,
  GetTbl_subdistrict,
} from "../../service/api";
import { RegisterNewUser } from "../../service/for_user";
import { redirect, useNavigate } from "react-router-dom";
const initialState = {
  m_username: "",
  m_password: "",
  m_idcard: "",
  m_email: "",
  m_phone: "",
  m_firstname: "",
  m_lastname: "",
  m_house_no: "",
  m_moo: "",
  m_province: "",
  m_district: "",
  m_subdis: "",
  m_zipcode: "",
  m_birthday: "",
  m_confirm_password: "",
  agreement: "",
};
function Register() {
  const navigate = useNavigate();
  const [Country, SetCountry] = useState([]);
  const [District, SetDistrict] = useState([]);
  const [SubDistrict, SetSubDistrict] = useState([]);
  const [dataForm, SetdataForm] = useState(initialState);
  const FetData = async () => {
    const country = await GetTbl_country();
    SetCountry(country);
  };

  const handleSelectProvince = async (e) => {
    const getValue = e.target.value;
    console.log(getValue);
    SetdataForm({
      ...dataForm,
      m_province: getValue,
    });
    if (getValue != "") {
      SetDistrict([]);
      const district = await GetTbl_district();
      const Data = district.filter((value) => value.province_id == getValue);
      SetDistrict(Data);
    }
  };
  const handleSelectDistrict = async (e) => {
    const getDistrict = e.target.value;
    SetdataForm({
      ...dataForm,
      m_district: getDistrict,
    });
    if (getDistrict != "") {
      SetSubDistrict([]);
      const subistrict = await GetTbl_subdistrict();
      const Data = subistrict.filter(
        (value) => value.district_id == getDistrict
      );
      SetSubDistrict(Data);
    }
  };

  const handleSelectSubDistrict = async (e) => {
    const subdistrictValue = e.target.value;
    const subdistrictData = await GetTbl_subdistrict();
    console.log(subdistrictValue);

    // if (subdistrictValue != "") {
    const Data = subdistrictData.find((value) => value.id == e.target.value);
    SetdataForm({
      ...dataForm,
      m_subdis: subdistrictValue,
      m_zipcode: Data.zipcode,
    });
    // }
  };

  const HandleFormData = async (e) => {
    e.preventDefault();
    if (dataForm.agreement) {
      if (dataForm.m_password == dataForm.m_confirm_password) {
        console.log("teststeset");
        const res = await RegisterNewUser(dataForm);
        console.log(res.status);
        if (res.status == "username_already") {
          Swal.fire({
            icon: "error",
            title: "Username*สำหรับการเข้าสู่ระบบมีผู้ใช้งานเเล้ว",
            text: "",
          });
        }
        if (res.status == "success") {
          Swal.fire("บันทึกข้อมูลสำเร็จ", "", "success").then(() => {
            navigate("/");
            SetdataForm(initialState);
          });
        }
      }
    }
  };
  useEffect(() => {
    FetData();
  }, []);
  return (
    <>
      <div>
        {/* {JSON.stringify(SubDistrict)} */}
        <img className="wave" src={Wave} />
        <div
          className="container_idx"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="img">
            <img src={Bg} />
          </div>
          <div className="login-content mx-auto">
            {/* <form className="fromRegister"> */}
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
              <form onSubmit={HandleFormData} className="fromRegister">
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_username: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_firstname: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_lastname: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="password"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_password: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_idcard: e.target.value,
                          });
                        }}
                      />
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
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="th"
                      >
                        <DatePicker
                          className="form-control"
                          label="วัน/เดือน/ปี"
                          onChange={(newDate) => {
                            const format2 = "yyyy-MM-DD";
                            const formathDate = moment(newDate)
                              .add("year", 543)
                              .format(format2);
                            SetdataForm({
                              ...dataForm,
                              m_birthday: formathDate,
                            });
                          }}
                          slotProps={{
                            textField: { size: "small", required: true },
                          }}
                        />
                      </LocalizationProvider>
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
                      <input
                        type="password"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_confirm_password: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_house_no: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_moo: e.target.value,
                          });
                        }}
                      />
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_email: e.target.value,
                          });
                        }}
                      />
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
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        required
                        onChange={handleSelectProvince}
                      >
                        <option value="">เลือก</option>
                        {Country.map((value, idx) => {
                          return (
                            <option value={value.id} key={idx}>
                              {value.province_th}
                            </option>
                          );
                        })}
                      </select>
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
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        required
                        onChange={handleSelectDistrict}
                      >
                        <option value="">เลือก</option>
                        {District.map((value, idx) => {
                          return (
                            <option value={value.id} key={idx}>
                              {value.district_th}
                            </option>
                          );
                        })}
                      </select>
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            m_phone: e.target.value,
                          });
                        }}
                      />
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
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        required
                        onChange={handleSelectSubDistrict}
                      >
                        <option value="">เลือก</option>
                        {SubDistrict.map((value, idx) => {
                          return (
                            <option value={value.id} key={idx}>
                              {value.subdistrict_th}
                            </option>
                          );
                        })}
                      </select>
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
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={dataForm.m_zipcode}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <input
                        className="form-check-input mx-1"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        onChange={(e) => {
                          SetdataForm({
                            ...dataForm,
                            agreement: e.target.checked,
                          });
                        }}
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
                      type="submit"
                      className="btn btn-outline-primary btnRegister"
                    >
                      ลงทะเบียน
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
