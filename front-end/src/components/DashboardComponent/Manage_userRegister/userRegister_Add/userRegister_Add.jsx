import React, { useState, useEffect } from "react";
import Boy from "../../../../assets/img/boy.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DayjsUtils from "@date-io/dayjs";
import { th } from "date-fns/locale";
import dayjs from "dayjs";
import Swal from "sweetalert2";

import {
  GetpreName,
  GetBloodType,
  GetStatus_relationship,
  GetTbl_country,
  GetTbl_district,
  GetTbl_subdistrict,
  CreateMember,
  GetTbl_religion,
  Get_memberby_id,
} from "../../../../service/api";
function UserRegister_Add() {
  let { id } = useParams();
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
      date: () => "mm/dd/yyyy",
    },
  };
  function handleBacktoPage() {
    // history.push("Member");
    navigate("/Dashboard/Member");
  }
  // call_api
  const [preName, SetpreName] = useState([]);
  const [bloodtype, setBloodtype] = useState([]);
  const [relationship, Setrelationship] = useState([]);
  const [country, setCountry] = useState([]);
  const [district, setDistrict] = useState([]);
  const [Subdistrict, setSubDistrict] = useState([]);
  const [get_religion, set_religion] = useState([]);
  //use ตัวเเปร

  const [DataForm, SetDataForm] = useState({});

  const [S_id, set_S_id] = useState("");
  const [S_idCard, setIdCard] = useState(""); //บัตรประชาชน
  const [S_titlename, setTitlename] = useState(""); //คำนำหน้าชื่อ
  const [S_name, setName] = useState(""); // ชื่อ
  const [S_lname, setLname] = useState(""); // นามสกุล
  const [S_birthday, Setbirthday] = useState(""); // วันเกิด
  const [S_bloodtype, setBloodtypeS] = useState(""); // หมู่โลหิต
  const [S_ethnicity, setEthnicityS] = useState(""); // เชื้อชาติ
  const [S_nationality, setNationalityS] = useState(""); // สัญชาติ
  const [S_religion, setReligionS] = useState(""); //ศาสนา
  const [S_family_status, setFamilyStatusS] = useState(""); //สถานภาพทางครอบครัว
  const [S_Name_spouse, setName_spouse] = useState(""); // ชื่อคู่สมรส(กรณีสมรส) house_number
  const [S_house_number, setHouse_number] = useState(""); // บ้านเลขที่
  const [S_village, setVillage] = useState(""); // หมู่ที่
  const [S_alleyway, setAlleyway] = useState(""); //ซอยตรอก
  const [S_road, setRoad] = useState(""); //ถนน
  const [S_province, setProvinceS] = useState(""); // จังหวัด
  const [S_district, setDistrictS] = useState(""); // อำเภอ
  const [S_Sub_district, setSub_DistrictS] = useState(""); // ตำบล
  const [S_postal_code, setPostalCode] = useState(""); //  รหัสไปรษณีย์
  const [S_phone, setPhone] = useState(""); //เบอร์โทรศํพ
  const [S_email, setEmail] = useState(""); //email
  const [S_Job_Father, setJobFather] = useState(""); // อาชีพพ่อ
  const [S_name_Father, set_name_Father] = useState(""); //ชื่อพ่อ
  const [S_Job_Mather, setJobMather] = useState(""); // อาชีพเเม่
  const [S_name_Mather, set_name_Mather] = useState(""); //ชื่อเเม่
  const [S_imgUser, set_imgUser] = useState(); // รูปผู้ใช้
  const [S_nameUser, setNameUser] = useState(""); // ชื่อผู้ใช้งาน
  const [S_passwordUser, setpasswordUser] = useState(""); // รหัสผ่าน
  const [S_ConpasswordUser, setConpasswordUser] = useState(""); // ยืนยันรหัสผ่าน
  const [S_activeUser, setActiveUser] = useState(1); //สถานนะการใช้งาน
  // filter
  const [filtterDistrict, setFiltterDistrict] = useState([]);
  const [filtterSub_district, setSub_district] = useState([]);

  const [newPassword, SetNewPassword] = useState("");
  const [newConfirmPassword, SetNewConfirmPassword] = useState("");

  const HandleFormData = async (e) => {
    e.preventDefault();
    if (newPassword && newConfirmPassword != "") {
      if (newPassword == newConfirmPassword) {
        const format2 = "yyyy-MM-DD";
        const formathDate = moment(S_birthday).add("year", 543).format(format2);
        const formData = new FormData();
        formData.append("m_idcard", S_idCard); //รหัสบัตรประชาชน
        formData.append("m_prename", S_titlename); //คำนำหน้า
        formData.append("m_firstname", S_name); //ชื่อ
        formData.append("m_lastname", S_lname); //สกุล
        formData.append("m_id", S_id); //id
        formData.append("img", S_imgUser); //img
        formData.append("m_birthday", formathDate); // วันเกิด
        formData.append("m_blood", S_bloodtype); //เลือด
        formData.append("m_race", S_ethnicity); //เชื้อชาท
        formData.append("m_nation", S_nationality); //สัญชาท
        formData.append("m_religion", S_religion); //ศาสนา
        formData.append("m_relationship", S_family_status); //สถานนะครอบครัว
        formData.append("m_spouse", S_Name_spouse); //ชื่อคู่สมรส
        formData.append("m_house_no", S_house_number); //บ้านเลขที่
        formData.append("m_moo", S_village); //หมู่ที่
        formData.append("m_alley", S_alleyway); //ซอต / ตอก
        formData.append("m_road", S_road); //ถนน
        formData.append("m_province", S_province); //จังหวัด
        formData.append("m_district", S_district); //อำเภอ
        formData.append("m_subdistrict", S_Sub_district); //ตำบล
        formData.append("m_zipcode", S_postal_code); //รหัสไปร
        formData.append("m_phone", S_phone); //เบอร์
        formData.append("m_email", S_email); //email
        formData.append("m_fathername", S_name_Father); //ชื่อพ่อ
        formData.append("m_father_occupation", S_Job_Father); //งานพ่อ
        formData.append("m_mothername", S_name_Mather); //ชื่อเเม่
        formData.append("m_mother_occupation", S_Job_Father); //งานเเม่
        formData.append("m_username", S_nameUser); //username
        formData.append("m_password", newPassword); //password
        formData.append("m_active", S_activeUser); //m_active
        const res = await CreateMember(formData);
        console.log(res.status);
        if (res.status == "success") {
          Swal.fire("บันทึกข้อมูลสำเร็จ", "", "success").then(() => {
            navigate("/Dashboard/Member");
          });
        }
      }
    } else {
      const format2 = "yyyy-MM-DD";
      const formathDate = moment(S_birthday).add("year", 543).format(format2);
      const formData = new FormData();
      formData.append("m_idcard", S_idCard); //รหัสบัตรประชาชน
      formData.append("m_prename", S_titlename); //คำนำหน้า
      formData.append("m_firstname", S_name); //ชื่อ
      formData.append("m_lastname", S_lname); //สกุล
      formData.append("m_id", S_id); //id
      formData.append("img", S_imgUser); //img
      formData.append("m_birthday", formathDate); // วันเกิด
      formData.append("m_blood", S_bloodtype); //เลือด
      formData.append("m_race", S_ethnicity); //เชื้อชาท
      formData.append("m_nation", S_nationality); //สัญชาท
      formData.append("m_religion", S_religion); //ศาสนา
      formData.append("m_relationship", S_family_status); //สถานนะครอบครัว
      formData.append("m_spouse", S_Name_spouse); //ชื่อคู่สมรส
      formData.append("m_house_no", S_house_number); //บ้านเลขที่
      formData.append("m_moo", S_village); //หมู่ที่
      formData.append("m_alley", S_alleyway); //ซอต / ตอก
      formData.append("m_road", S_road); //ถนน
      formData.append("m_province", S_province); //จังหวัด
      formData.append("m_district", S_district); //อำเภอ
      formData.append("m_subdistrict", S_Sub_district); //ตำบล
      formData.append("m_zipcode", S_postal_code); //รหัสไปร
      formData.append("m_phone", S_phone); //เบอร์
      formData.append("m_email", S_email); //email
      formData.append("m_fathername", S_name_Father); //ชื่อพ่อ
      formData.append("m_father_occupation", S_Job_Father); //งานพ่อ
      formData.append("m_mothername", S_name_Mather); //ชื่อเเม่
      formData.append("m_mother_occupation", S_Job_Father); //งานเเม่
      formData.append("m_username", S_nameUser); //username
      formData.append("m_password", S_passwordUser); //password
      formData.append("m_active", S_activeUser); //m_active
      const res = await CreateMember(formData);
      console.log(res.status);
      if (res.status == "success") {
        Swal.fire("บันทึกข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/Dashboard/Member");
        });
      }
    }
  };

  const handleSelectProvince = (e) => {
    const getValue = e.target.value;
    setProvinceS(getValue);
    if (getValue != "") {
      const Data = district.filter((value) => value.province_id == getValue);
      setFiltterDistrict(Data);
    }
  };
  const handleSelectDistrict = (e) => {
    const getDistrict = e.target.value;
    setDistrictS(getDistrict);
    // console.log(Subdistrict);
    if (getDistrict != "") {
      const Data = Subdistrict.filter(
        (value) => value.district_id == getDistrict
      );
      setSub_district(Data);
    }
  };

  const handleSelectSubDistrict = (e) => {
    const getSubDistrict = e.target.value;
    console.log(getSubDistrict);
    setSub_DistrictS(getSubDistrict);
    if (getSubDistrict != "") {
      const Data = Subdistrict.find((value) => value.id == getSubDistrict);
      setPostalCode(Data.zipcode);
    }
  };

  const GetDataID = async (id) => {
    const res = await Get_memberby_id(id);
    const district = await GetTbl_district();
    const subDistrict = await GetTbl_subdistrict();
    // setDistrict(district); // อำเภอ
    // setSubDistrict(subDistrict); // ตำบล

    set_S_id(res[0].m_id);
    setIdCard(res[0].m_idcard); //บัตรประชาชน
    setTitlename(res[0].m_prename); //คำนำหน้าชื่อ
    setName(res[0].m_firstname); // ชื่อ
    setLname(res[0].m_lastname); // นามสกุล
    Setbirthday(res[0].m_birthday); // วันเกิด
    setBloodtypeS(res[0].m_blood); // หมู่โลหิต
    setEthnicityS(res[0].m_race); // เชื้อชาติ
    setNationalityS(res[0].m_nation); // สัญชาติ
    setReligionS(res[0].m_religion); //ศาสนา
    setFamilyStatusS(res[0].m_relationship); //สถานภาพทางครอบครัว
    setName_spouse(res[0].m_spouse); // ชื่อคู่สมรส(กรณีสมรส) house_number
    setHouse_number(res[0].m_house_no); // บ้านเลขที่
    setVillage(res[0].m_moo); // หมู่ที่
    setAlleyway(res[0].m_alley); //ซอยตรอก
    setRoad(res[0].m_road); //ถนน

    setProvinceS(res[0].m_province); // จังหวัด
    const Data = district.filter(
      (value) => value.province_id == res[0].m_province
    );
    setFiltterDistrict(Data);

    setDistrictS(res[0].m_district); // อำเภอ
    const Data1 = subDistrict.filter(
      (value) => value.district_id == res[0].m_district
    );
    // console.log(Data1);
    setSub_district(Data1);

    setSub_DistrictS(res[0].m_subdistrict);

    setPostalCode(res[0].m_zipcode); //  รหัสไปรษณีย์

    setPhone(res[0].m_phone); //เบอร์โทรศํพ
    setEmail(res[0].m_email); //email
    setJobFather(res[0].m_father_occupation); // อาชีพพ่อ
    set_name_Father(res[0].m_fathername); //ชื่อพ่อ
    setJobMather(res[0].m_mother_occupation); // อาชีพเเม่
    set_name_Mather(res[0].m_mothername); //ชื่อเเม่
    set_imgUser(res[0].m_img); // รูปผู้ใช้
    setNameUser(res[0].m_username); // ชื่อผู้ใช้งาน
    setpasswordUser(res[0].m_password); // รหัสผ่าน
    setActiveUser(res[0].m_active); //สถานนะการใช้งาน

    console.log(res);
  };
  const GetDataFromApi = async () => {
    const preName = await GetpreName();
    const BloodType = await GetBloodType();
    const relationship = await GetStatus_relationship();
    const country = await GetTbl_country();
    const district = await GetTbl_district();
    const subDistrict = await GetTbl_subdistrict();
    const religion = await GetTbl_religion();

    SetpreName(preName); // คำนำหน้า
    setBloodtype(BloodType); //เลือด
    Setrelationship(relationship); //ความสัมพัน
    setCountry(country); // จังหวัด
    setDistrict(district); // อำเภอ
    setSubDistrict(subDistrict); // ตำบล
    set_religion(religion);
  };

  useEffect(() => {
    GetDataFromApi();
    if (id) {
      GetDataID(id);
    }
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
                      เพิ่มข้อมูลผู้สมัคร
                    </h4>
                  </div>
                </div>
              </div>
            </nav>
            <form onSubmit={HandleFormData}>
              <div className="row">
                <div className="col-md-8">
                  <div className="row px-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="hidden"
                          value={S_id}
                          onChange={(e) => {
                            set_S_id(e.target.value);
                          }}
                        />
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
                          value={S_idCard}
                          onChange={(e) => {
                            setIdCard(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-4">
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
                              value={S_titlename}
                              onChange={(e) => {
                                setTitlename(e.target.value);
                              }}
                            >
                              <option defaultValue="">เลือก</option>
                              {preName.map((val, idx) => {
                                return (
                                  <option value={val.prename_id} key={idx}>
                                    {val.prename_name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-md-8">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputName"
                                className="form-label"
                              >
                                ชื่อ
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="ชื่อ"
                                value={S_name}
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
                            name="lname"
                            value={S_lname}
                            onChange={(e) => {
                              setLname(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
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
                            value={dayjs(S_birthday)}
                            onChange={(newDate) => {
                              Setbirthday(newDate);
                            }}
                            slotProps={{
                              textField: { size: "small" },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            หมู่โลหิต
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="Bloodtype"
                            value={S_bloodtype}
                            onChange={(e) => {
                              setBloodtypeS(e.target.value);
                            }}
                          >
                            <option>เลือก</option>
                            {bloodtype.map((value, index) => {
                              return (
                                <option key={index} value={value.blood_id}>
                                  {value.blood_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            เชื้อชาติ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="เชื้อชาติ"
                            value={S_ethnicity}
                            onChange={(e) => {
                              setEthnicityS(e.target.value);
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
                            สัญชาติ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="สัญชาติ"
                            name="nationality"
                            value={S_nationality}
                            onChange={(e) => {
                              setNationalityS(e.target.value);
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
                            ศาสนา
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={S_religion}
                            onChange={(e) => {
                              setReligionS(e.target.value);
                            }}
                          >
                            <option>เลือก</option>
                            {get_religion.map((value, index) => {
                              // console.log(value);
                              return (
                                <option key={index} value={value.religion_id}>
                                  {value.religion_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="d-flex">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              สถานภาพทางครอบครัว
                            </label>
                            {relationship.map((value, index) => {
                              // console.log(value);
                              return (
                                <div className="form-check mx-3" key={index}>
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value={S_family_status}
                                    onChange={(e) => {
                                      setFamilyStatusS(e.target.value);
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={"flexRadioDefault" + index}
                                  >
                                    {value.relationship_name}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            ชื่อคู่สมรส(กรณีสมรส)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อคู่สมรส(กรณีสมรส)"
                            name="Name_spouse"
                            value={S_Name_spouse}
                            onChange={(e) => {
                              setName_spouse(e.target.value);
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
                            บ้านเลขที่
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="บ้านเลขที่"
                            name="house_number"
                            value={S_house_number}
                            onChange={(e) => {
                              setHouse_number(e.target.value);
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
                            หมู่ที่
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="หมู่ที่"
                            name="village"
                            value={S_village}
                            onChange={(e) => {
                              setVillage(e.target.value);
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
                            ตรอก/ซอย
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ตรอก/ซอย"
                            name="alleyway"
                            value={S_alleyway}
                            onChange={(e) => {
                              setAlleyway(e.target.value);
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
                            ถนน
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ถนน"
                            value={S_road}
                            onChange={(e) => {
                              setRoad(e.target.value);
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
                            จังหวัด
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={S_province}
                            onChange={handleSelectProvince}
                          >
                            <option>เลือก</option>
                            {country.map((value, index) => {
                              // console.log(value);
                              return (
                                <option key={index} value={value.id}>
                                  {value.province_th}
                                </option>
                              );
                            })}
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
                            name="district"
                            value={S_district}
                            onChange={handleSelectDistrict}
                          >
                            <option>เลือก</option>
                            {filtterDistrict.map((value, index) => {
                              // console.log(value);
                              return (
                                <option key={index} value={value.id}>
                                  {value.district_th}
                                </option>
                              );
                            })}
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
                            name="Subdistrict"
                            value={S_Sub_district}
                            onChange={handleSelectSubDistrict}
                          >
                            <option>เลือก</option>
                            {filtterSub_district.map((value, idx) => {
                              // console.log(value);
                              return (
                                <option key={idx} value={value.id}>
                                  {value.subdistrict_th}
                                </option>
                              );
                            })}
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
                            disabled
                            type="text"
                            className="form-control"
                            placeholder="รหัสไปรษณีย์"
                            name="postal_code"
                            value={S_postal_code}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
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
                            name="phone"
                            value={S_phone}
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
                            placeholder="อีเมล"
                            name="email"
                            value={S_email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6"></div>

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
                            name="jobFather"
                            value={S_Job_Father}
                            onChange={(e) => {
                              setJobFather(e.target.value);
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
                            ชื่อบิดา
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อบิดา"
                            name="name_Father"
                            value={S_name_Father}
                            onChange={(e) => {
                              set_name_Father(e.target.value);
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
                            อาชีพ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="อาชีพ"
                            name="jobMather"
                            value={S_Job_Mather}
                            onChange={(e) => {
                              setJobMather(e.target.value);
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
                            ชื่อมารดา
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อมารดา"
                            name="name_Mather"
                            value={S_name_Mather}
                            onChange={(e) => {
                              set_name_Mather(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row m-0">
                    <div className="col-md-12">
                      <div className="text-center">
                        {S_imgUser ? (
                          <img
                            src={S_imgUser}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "170px", height: "170px" }}
                          />
                        ) : (
                          <img
                            src={Boy}
                            alt=""
                            className="rounded-circle"
                            style={{ width: "170px", height: "170px" }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-md-12" style={{ paddingTop: "33px" }}>
                      <div className="">
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          accept="image/png, image/jpeg"
                          onChange={(e) => {
                            set_imgUser(e.target.files[0]);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pt-3">
                      <div className="mb-3">
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
                          value={S_nameUser}
                          onChange={(e) => {
                            setNameUser(e.target.value);
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
                          value={newPassword}
                          onChange={(e) => {
                            SetNewPassword(e.target.value);
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
                          value={newConfirmPassword}
                          onChange={(e) => {
                            SetNewConfirmPassword(e.target.value);
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
                          สถานนะการใช้งาน
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={S_activeUser}
                          onChange={(e) => {
                            setActiveUser(e.target.value);
                          }}
                        >
                          <option value={1}>ใช้งาน</option>
                          <option value={0}>ไม่ใช้งาน</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4 text-end px-4">
                  <button
                    type="submit"
                    className="btn btn-outline-primary mx-1"
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
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="px-3 py-4">
          <div className="shadow-lg h-50 rounded-3">
            <nav>
              <div className="row w-100  pt-3 pb-4 m-0">
                <div className="col-md-12 my-auto">
                  <div className="text-start px-3">
                    <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                      เพิ่มข้อมูลผู้สมัคร
                    </h4>
                  </div>
                </div>
              </div>
            </nav>
            <form onSubmit={HandleFormData}>
              <div className="row">
                <div className="col-md-8">
                  <div className="row px-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="hidden"
                          value={S_id}
                          onChange={(e) => {
                            set_S_id(e.target.value);
                          }}
                        />
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
                          value={S_idCard}
                          onChange={(e) => {
                            setIdCard(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-4">
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
                              value={S_titlename}
                              onChange={(e) => {
                                setTitlename(e.target.value);
                              }}
                            >
                              <option defaultValue="">เลือก</option>
                              {preName.map((val, idx) => {
                                return (
                                  <option value={val.prename_id} key={idx}>
                                    {val.prename_name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-md-8">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputName"
                                className="form-label"
                              >
                                ชื่อ
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="ชื่อ"
                                value={S_name}
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
                            name="lname"
                            value={S_lname}
                            onChange={(e) => {
                              setLname(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
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
                            value={dayjs(S_birthday)}
                            onChange={(newDate) => {
                              Setbirthday(newDate);
                            }}
                            slotProps={{
                              textField: { size: "small" },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            หมู่โลหิต
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="Bloodtype"
                            value={S_bloodtype}
                            onChange={(e) => {
                              setBloodtypeS(e.target.value);
                            }}
                          >
                            <option>เลือก</option>
                            {bloodtype.map((value, index) => {
                              return (
                                <option key={index} value={value.blood_id}>
                                  {value.blood_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            เชื้อชาติ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="เชื้อชาติ"
                            value={S_ethnicity}
                            onChange={(e) => {
                              setEthnicityS(e.target.value);
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
                            สัญชาติ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="สัญชาติ"
                            name="nationality"
                            value={S_nationality}
                            onChange={(e) => {
                              setNationalityS(e.target.value);
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
                            ศาสนา
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={S_religion}
                            onChange={(e) => {
                              setReligionS(e.target.value);
                            }}
                          >
                            <option>เลือก</option>
                            {get_religion.map((value, index) => {
                              // console.log(value);
                              return (
                                <option key={index} value={value.religion_id}>
                                  {value.religion_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="d-flex">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              สถานภาพทางครอบครัว
                            </label>
                            {relationship.map((value, index) => {
                              return (
                                <div className="form-check mx-3" key={index}>
                                  <input
                                    className={"form-check-input"}
                                    id={`flexRadioDefault${index}`}
                                    type="radio"
                                    name={`flexRadioDefault`}
                                    value={value.relationship_id}
                                    onChange={(e) => {
                                      setFamilyStatusS(e.target.value);
                                    }}
                                  />
                                  <label
                                    className={`form-check-label ${index}`}
                                    htmlFor={`flexRadioDefault${index}`}
                                  >
                                    {value.relationship_name}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            ชื่อคู่สมรส(กรณีสมรส)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อคู่สมรส(กรณีสมรส)"
                            name="Name_spouse"
                            value={S_Name_spouse}
                            onChange={(e) => {
                              setName_spouse(e.target.value);
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
                            บ้านเลขที่
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="บ้านเลขที่"
                            name="house_number"
                            value={S_house_number}
                            onChange={(e) => {
                              setHouse_number(e.target.value);
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
                            หมู่ที่
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="หมู่ที่"
                            name="village"
                            value={S_village}
                            onChange={(e) => {
                              setVillage(e.target.value);
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
                            ตรอก/ซอย
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ตรอก/ซอย"
                            name="alleyway"
                            value={S_alleyway}
                            onChange={(e) => {
                              setAlleyway(e.target.value);
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
                            ถนน
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ถนน"
                            value={S_road}
                            onChange={(e) => {
                              setRoad(e.target.value);
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
                            จังหวัด
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            value={S_province}
                            onChange={handleSelectProvince}
                          >
                            <option>เลือก</option>
                            {country.map((value, index) => {
                              // console.log(value);
                              return (
                                <option key={index} value={value.id}>
                                  {value.province_th}
                                </option>
                              );
                            })}
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
                            name="district"
                            value={S_district}
                            onChange={handleSelectDistrict}
                          >
                            <option>เลือก</option>
                            {filtterDistrict.map((value, index) => {
                              console.log(value);
                              return (
                                <option key={index} value={value.id}>
                                  {value.district_th}
                                </option>
                              );
                            })}
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
                            name="Subdistrict"
                            value={S_Sub_district}
                            onChange={handleSelectSubDistrict}
                          >
                            <option>เลือก</option>
                            {filtterSub_district.map((value, idx) => {
                              // console.log(value);
                              return (
                                <option key={idx} value={value.id}>
                                  {value.subdistrict_th}
                                </option>
                              );
                            })}
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
                            disabled
                            type="text"
                            className="form-control"
                            placeholder="รหัสไปรษณีย์"
                            name="postal_code"
                            value={S_postal_code}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
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
                            name="phone"
                            value={S_phone}
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
                            placeholder="อีเมล"
                            name="email"
                            value={S_email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6"></div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            ชื่อบิดา
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อบิดา"
                            name="name_Father"
                            value={S_name_Father}
                            onChange={(e) => {
                              set_name_Father(e.target.value);
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
                            อาชีพ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="อาชีพ"
                            name="jobFather"
                            value={S_Job_Father}
                            onChange={(e) => {
                              setJobFather(e.target.value);
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
                            ชื่อมารดา
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ชื่อมารดา"
                            name="name_Mather"
                            value={S_name_Mather}
                            onChange={(e) => {
                              set_name_Mather(e.target.value);
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
                            อาชีพ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="อาชีพ"
                            name="jobMather"
                            value={S_Job_Mather}
                            onChange={(e) => {
                              setJobMather(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row m-0">
                    <div className="col-md-12">
                      <div className="text-center">
                        <img
                          src={Boy}
                          alt=""
                          className="rounded-circle"
                          style={{ width: "170px", height: "170px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12" style={{ paddingTop: "33px" }}>
                      <div className="">
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          accept="image/png, image/jpeg"
                          onChange={(e) => {
                            set_imgUser(e.target.files[0]);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pt-3">
                      <div className="mb-3">
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
                          value={S_nameUser}
                          onChange={(e) => {
                            setNameUser(e.target.value);
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
                          value={S_passwordUser}
                          onChange={(e) => {
                            setpasswordUser(e.target.value);
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
                          value={S_ConpasswordUser}
                          onChange={(e) => {
                            setConpasswordUser(e.target.value);
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
                          สถานนะการใช้งาน
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={S_activeUser}
                          onChange={(e) => {
                            setActiveUser(e.target.value);
                          }}
                        >
                          <option value={1}>ใช้งาน</option>
                          <option value={0}>ไม่ใช้งาน</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4 text-center px-4">
                  <button
                    type="submit"
                    className="btn btn-outline-primary mx-1"
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
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default UserRegister_Add;
