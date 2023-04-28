import React, { useRef, useEffect, useState } from "react";
import IconImg from "../assets/img/admin.png";
import { NavLink } from "react-router-dom";
import {
  GetTbl_country,
  GetpreName,
  GetBloodType,
  GetTbl_religion,
  GetStatus_relationship,
  GetTbl_district,
  GetTbl_subdistrict,
} from "../service/api";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DayjsUtils from "@date-io/dayjs";
import { th } from "date-fns/locale";
import dayjs from "dayjs";
import { Vertify_token, UpdateDetail_user } from "../service/for_user";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
const initialState = {
  m_id: "",
  m_username: "",
  m_password: "",
  m_ConfirmPassword: "",
  m_idCard: "",
  m_idCard_Province: "",
  m_titlename: "",
  m_name: "",
  m_lastname: "",
  m_national: "",
  m_ethnicity: "",
  m_religion: "",
  m_blood: "",
  m_birthday: "",
  m_relationship: "",
  m_spouse: "",
  m_houseOn: "",
  m_moo: "",
  m_Alley: "", //ซอย
  m_road: "",
  m_province: "",
  m_district: "",
  m_subdistrict: "",
  m_zipcode: "",
  m_phone: "",
  m_email: "",
  m_nameFather: "",
  m_jobFather: "",
  m_nameMather: "",
  m_jobMather: "",
  m_img: "",
};
function Edit_profile() {
  const navigate = useNavigate();

  const [NewPassword, SetNewPassword] = useState({
    newPass: "",
    newConfirm: "",
  });

  const [DataForm, SetDataForm] = useState(initialState);
  // const [dataVertify, setDataVertify] = useState({});
  const Verifytoken = async () => {
    const token = localStorage.getItem("token");
    const resVerify = await Vertify_token(token);
    console.log(resVerify.data);
    if (resVerify.status) {
      SetDataForm({
        m_id: resVerify.data.m_id,
        m_username: resVerify.data.m_username,
        m_password: resVerify.data.m_password,
        m_idCard: resVerify.data.m_idcard,
        m_idCard_Province: resVerify.data.m_idcard_province,
        m_titlename: resVerify.data.m_prename,
        m_name: resVerify.data.m_firstname,
        m_lastname: resVerify.data.m_lastname,
        m_national: resVerify.data.m_nation,
        m_ethnicity: resVerify.data.m_race,
        m_religion: resVerify.data.m_religion,
        m_blood: resVerify.data.m_blood,
        m_birthday: resVerify.data.m_birthday,
        m_relationship: resVerify.data.m_relationship,
        m_spouse: resVerify.data.m_spouse,
        m_houseOn: resVerify.data.m_house_no,
        m_moo: resVerify.data.m_moo,
        m_Alley: resVerify.data.m_alley,
        m_road: resVerify.data.m_road,
        m_phone: resVerify.data.m_phone,
        m_email: resVerify.data.m_email,
        m_province: resVerify.data.m_province,
        m_district: resVerify.data.m_district,
        m_zipcode: resVerify.data.m_zipcode,
        m_subdistrict: resVerify.data.m_subdistrict,
        m_nameFather: resVerify.data.m_fathername,
        m_jobFather: resVerify.data.m_father_occupation,
        m_nameMather: resVerify.data.m_mothername,
        m_jobMather: resVerify.data.m_mother_occupation,
        m_img: resVerify.data.m_img,
      });
      SetDataFun(resVerify.data);
    } else {
      navigate("/");
    }
  };

  const SetDataFun = async (dataState) => {
    const district = await GetTbl_district();
    const Data = district.filter(
      (value) => value.province_id == dataState.m_province
    );
    SetDistrict(Data);

    const subistrictData = await GetTbl_subdistrict();
    const Data1 = subistrictData.filter(
      (value) => value.district_id == dataState.m_district
    );
    SetSubDistrict(Data1);

    const subdistrictData = await GetTbl_subdistrict();
    const Data2 = subdistrictData.find(
      (value) => value.id == dataState.m_subdistrict
    );
  };

  const inputFileRef = useRef();
  const onFileChangeCapture = (e) => {
    // console.log(e.target.files[0]);
    SetDataForm({
      ...DataForm,
      m_img: e.target.files[0],
    });
  };
  const onBtnClick = () => {
    inputFileRef.current.click();
  };

  const [Get_Country, setGet_Country] = useState([]);
  const [Get_Prename, setGet_Prename] = useState([]);
  const [Get_Blood, setGet_Blood] = useState([]);

  const [Get_Religion, setGet_Religion] = useState([]);
  const [Get_Relationship, setGet_Relationship] = useState([]);

  const [Get_Province, setGet_Province] = useState([]);
  const [District, SetDistrict] = useState([]);
  const [SubDistrict, SetSubDistrict] = useState([]);
  const [showImg, setShowImg] = useState();

  const handleSelectProvince = async (e) => {
    const getValue = e.target.value;
    console.log(getValue);
    SetDataForm({
      ...DataForm,
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
    // console.log(getDistrict);
    SetDataForm({
      ...DataForm,
      m_district: getDistrict,
    });
    if (getDistrict != "") {
      SetSubDistrict([]);
      const subistrictData = await GetTbl_subdistrict();
      const Data = subistrictData.filter(
        (value) => value.district_id == getDistrict
      );
      console.log(Data);
      SetSubDistrict(Data);
    }
  };

  const handleSelectSubDistrict = async (e) => {
    const subdistrictValue = e.target.value;
    const subdistrictData = await GetTbl_subdistrict();
    const Data = subdistrictData.find((value) => value.id == e.target.value);
    SetDataForm({
      ...DataForm,
      m_subdistrict: subdistrictValue,
      m_zipcode: Data.zipcode,
    });
    // }
  };

  const HandleSubmitForm = async (e) => {
    e.preventDefault();
    const format2 = "yyyy-MM-DD";
    const formathDate = moment(DataForm.m_birthday)
      .add("year", 543)
      .format(format2);
    const formData = new FormData();
    formData.append("img", DataForm.m_img);
    formData.append("m_id", DataForm.m_id);
    formData.append("m_username", DataForm.m_username);
    formData.append("m_password", DataForm.m_password);
    formData.append("m_idCard", DataForm.m_idCard);
    formData.append("m_idCard_Province", DataForm.m_idCard_Province);
    formData.append("m_titlename", DataForm.m_titlename);
    formData.append("m_name", DataForm.m_name);
    formData.append("m_lastname", DataForm.m_lastname);
    formData.append("m_nation", DataForm.m_national);
    formData.append("m_race", DataForm.m_ethnicity);
    formData.append("m_religion", DataForm.m_religion);
    formData.append("m_blood", DataForm.m_blood);
    formData.append("m_birthday", formathDate);
    formData.append("m_relationship", DataForm.m_relationship);
    formData.append("m_spouse", DataForm.m_spouse);
    formData.append("m_house_no", DataForm.m_houseOn);
    formData.append("m_moo", DataForm.m_moo);
    formData.append("m_alley", DataForm.m_Alley);
    formData.append("m_road", DataForm.m_road);
    formData.append("m_phone", DataForm.m_phone);
    formData.append("m_email", DataForm.m_email);
    formData.append("m_province", DataForm.m_province);
    formData.append("m_district", DataForm.m_district);
    formData.append("m_subdistrict", DataForm.m_subdistrict);
    formData.append("m_zipcode", DataForm.m_zipcode);
    formData.append("m_fathername", DataForm.m_nameFather);
    formData.append("m_father_occupation", DataForm.m_jobFather);
    formData.append("m_mothername", DataForm.m_nameMather);
    formData.append("m_mother_occupation", DataForm.m_jobMather);

    const token = localStorage.getItem("token");
    const res = await UpdateDetail_user(formData, DataForm.m_id, token);
    console.log(res);
    if (res.status == "success") {
      Swal.fire("บันทึกข้อมูลสำเร็จ", "", "success").then(() => {
        navigate("/register/");
      });
    }
  };

  const FetData = async () => {
    const country = await GetTbl_country();
    const preName = await GetpreName();
    const blood = await GetBloodType();
    const religion = await GetTbl_religion();
    const relationship = await GetStatus_relationship();
    const district = await GetTbl_district();

    setGet_Relationship(relationship);
    setGet_Religion(religion);
    setGet_Blood(blood);
    setGet_Country(country);
    setGet_Province(country);
    setGet_Prename(preName);
  };
  useEffect(() => {
    FetData();
    Verifytoken();
  }, []);
  return (
    <>
      {/* {JSON.stringify(DataForm)} */}
      <div className="">
        <div
          className="container-fluid px-md-0 my-2 shadow rounded"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="d-flex justify-content-center px-md-3 flex-column flex-md-row"
            style={{ backgroundColor: "white" }}
          >
            <h5 className="m-0 py-4 fw-bold px-md-2 text-center">
              แก้ไขข้อมูลส่วนตัว
            </h5>
          </div>
          <form onSubmit={HandleSubmitForm}>
            <div className="row m-0" style={{ fontSize: "15px" }}>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-2 text-end my-auto">
                    <label className="form-label py-3">ชื่อผู้ใช้งาน</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_username ? DataForm.m_username : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_username: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 text-end my-auto ">
                    <label className="form-label py-3">รหัสผ่าน</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => {
                        SetNewPassword({
                          ...NewPassword,
                          newPass: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 text-end">
                    <label className="form-label py-3">ยืนยันรหัสผ่าน</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => {
                        SetNewPassword({
                          ...NewPassword,
                          newConfirm: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 text-end">
                    <label className="form-label py-3">รหัสบัตรประชาชน</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_idCard ? DataForm.m_idCard : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_idCard: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ออกให้ ณ จังหวัด</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={
                        DataForm.m_idCard_Province
                          ? DataForm.m_idCard_Province
                          : ""
                      }
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_idCard_Province: e.target.value,
                        });
                      }}
                    >
                      <option value="">เลือก</option>
                      {Get_Country.map((value, idx) => {
                        return (
                          <option value={value.id} key={idx}>
                            {value.province_th}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">คำนำหน้าชื่อ</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={DataForm.m_titlename ? DataForm.m_titlename : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_titlename: e.target.value,
                        });
                      }}
                    >
                      <option value="">เลือก</option>
                      {Get_Prename.map((value, idx) => {
                        return (
                          <option value={value.prename_id} key={idx}>
                            {value.prename_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ชื่อ</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_name ? DataForm.m_name : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">นามสกุล</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_lastname ? DataForm.m_lastname : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_lastname: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">สัญชาติ</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_national ? DataForm.m_national : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_national: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">เชื้อชาติ</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_ethnicity ? DataForm.m_ethnicity : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_ethnicity: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ศาสนา</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={DataForm.m_religion ? DataForm.m_religion : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_religion: e.target.value,
                        });
                      }}
                    >
                      <option value="">เลือก</option>
                      {Get_Religion.map((value, idx) => {
                        return (
                          <option value={value.religion_id} key={idx}>
                            {value.religion_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">หมู่โลหิต</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={DataForm.m_blood ? DataForm.m_blood : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_blood: e.target.value,
                        });
                      }}
                    >
                      <option value="">เลือก</option>
                      {Get_Blood.map((value, idx) => {
                        return (
                          <option value={value.blood_id} key={idx}>
                            {value.blood_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">วัน/เดือน/ปีเกิด</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale="th"
                    >
                      <DatePicker
                        className="form-control"
                        label="วัน/เดือน/ปี"
                        value={dayjs(DataForm.m_birthday)}
                        onChange={(NewDate) => {
                          const format2 = "yyyy-MM-DD";
                          const formathDate = moment(NewDate)
                            .add("year", 543)
                            .format(format2);
                          SetDataForm({
                            ...DataForm,
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
                <div className="row">
                  <div className="col-md-3 my-auto text-center">
                    <label className="form-label py-3">
                      สถานภาพทางครอบครัว
                    </label>
                  </div>
                  <div className="col-md-9 my-auto">
                    <div className="d-flex justify-content-between">
                      {Get_Relationship.map((value, idx) => {
                        // console.log(value);
                        return (
                          <div className="form-check" key={idx}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value={
                                value.relationship_id
                                  ? value.relationship_id
                                  : ""
                              }
                              onChange={(e) => {
                                SetDataForm({
                                  ...DataForm,
                                  m_relationship: e.target.value,
                                });
                              }}
                            />
                            <label className="form-check-label">
                              {value.relationship_name}
                            </label>
                          </div>
                        );
                      })}

                      {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label">สมรส</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label">หย่า</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label">หม้าย</label>
                    </div> */}
                    </div>
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ชื่อคู่สมรส</label>
                  </div>
                  <div className="col-md-10 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_spouse ? DataForm.m_spouse : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_spouse: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">บ้านเลขที่</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_houseOn ? DataForm.m_houseOn : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_houseOn: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">หมู่ที่</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_moo ? DataForm.m_moo : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_moo: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ตรอก/ซอย</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_Alley ? DataForm.m_Alley : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_Alley: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ถนน</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_road ? DataForm.m_road : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_road: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">จังหวัด</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={DataForm.m_province ? DataForm.m_province : ""}
                      onChange={handleSelectProvince}
                    >
                      <option value="">เลือก</option>
                      {Get_Province.map((value, idx) => {
                        return (
                          <option value={value.id} key={idx}>
                            {value.province_th}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ตำบล/แขวง</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      required
                      value={DataForm.m_district ? DataForm.m_district : ""}
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
                    {/* <select
                    className="form-select"
                    aria-label="Default select example"
                    value={DataForm.m_district}
                    onChange={handleSelectDistrict}
                  >
                    <option>เลือก</option>
                    {District.map((value, idx) => {
                      // console.log(value);
                      return (
                        <option value={value.province_id} key={idx}>
                          {value.district_th}
                        </option>
                      );
                    })}
                  </select> */}
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">อำเภอ/แขวง</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={
                        DataForm.m_subdistrict ? DataForm.m_subdistrict : ""
                      }
                      onChange={handleSelectSubDistrict}
                    >
                      <option value="">เลือก</option>
                      {SubDistrict.map((value, idx) => {
                        // console.log(value);
                        return (
                          <option value={value.id} key={idx}>
                            {value.subdistrict_th}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">รหัสไปรษณีย์</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      value={
                        DataForm.m_zipcode != null ? DataForm.m_zipcode : ""
                      }
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">เบอร์โทรศัพท์</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_phone != null ? DataForm.m_phone : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">อีเมล</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={DataForm.m_email != null ? DataForm.m_email : ""}
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ชื่อบิดา</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={
                        DataForm.m_nameFather != null
                          ? DataForm.m_nameFather
                          : ""
                      }
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_nameFather: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">อาชีพ</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={
                        DataForm.m_jobFather != null ? DataForm.m_jobFather : ""
                      }
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_jobFather: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">ชื่อมารดา</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={
                        DataForm.m_nameMather != null
                          ? DataForm.m_nameMather
                          : ""
                      }
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_nameMather: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-md-2 my-auto text-end">
                    <label className="form-label py-3">อาชีพ</label>
                  </div>
                  <div className="col-md-4 my-auto">
                    <input
                      type="text"
                      className="form-control"
                      value={
                        DataForm.m_jobMather != null ? DataForm.m_jobMather : ""
                      }
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_jobMather: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12 text-center">
                    {showImg ? (
                      <img
                        src={showImg}
                        alt=""
                        className="img-fluid"
                        width={128}
                        height={128}
                      />
                    ) : (
                      <img
                        src={DataForm.m_img}
                        alt=""
                        className="img-fluid"
                        width={128}
                        height={128}
                      />
                    )}
                  </div>
                  <div className="col-md-12 text-center py-3">
                    <p style={{ color: "red" }}>(ขนาดไฟล์ไม่เกิน 2 MB)</p>
                  </div>
                  <div className="col-md-12 text-center">
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      accept="image/png,image/jpeg"
                      onChange={(e) => {
                        SetDataForm({
                          ...DataForm,
                          m_img: e.target.files[0],
                        });
                        setShowImg(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                    {/* <input
                      type="file"
                      ref={inputFileRef}
                      accept="image/png,image/jpeg"
                      onChange={onFileChangeCapture}
                      style={{ display: "none" }}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      onClick={onBtnClick}
                    >
                      Select file
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center pt-5 pb-2">
                <button
                  type="submit"
                  className="mx-1 btn btn-outline-primary"
                  style={{ width: "100px" }}
                >
                  บันทึก
                </button>
                <NavLink to="/register/">
                  <button
                    className="mx-1 btn btn-outline-danger "
                    style={{ width: "100px" }}
                  >
                    ย้อนกลับ
                  </button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit_profile;
