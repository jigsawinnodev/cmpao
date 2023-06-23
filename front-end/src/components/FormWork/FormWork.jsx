import React, { useRef, useState, useEffect } from "react";
import ImgProfile from "../../assets/img/img_profile.png";
import IconAdmin from "../../../src/assets/img/admin.png";
import moment from "moment/min/moment-with-locales";
// import moment from "moment";
import "moment/locale/th";
moment.locale("th");
import Style from "./FormWork.module.css";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import {
  GetpreName,
  GetTbl_religion,
  GetBloodType,
  GetStatus_relationship,
  GetTbl_district,
  GetTbl_subdistrict,
} from "../../service/api";
import {
  Get_Education,
  Register_Job,
  GetJob_BYID,
} from "../../service/for_user";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Vertify_token, Getpostion_injob } from "../../service/for_user";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { tr } from "date-fns/locale";
import { GetTbl_country } from "../../service/api";
var token = localStorage.getItem("token");
const emptyEdu = {
  education: "",
  id: "",
  nameEducation: "",
  detailEducation: "",
  numberAvg: "",
  dateStart: null,
  dateEnd: null,
};
const emptyJob = {
  name: "",
  id: "",
  numberOn: "",
  round: "",
  dateStart: null,
  dateEnd: null,
};
const historyJob = {
  locationJob: "",
  position_injob: "",
  money_LastJob: "",
  date_start: null,
  date_end: null,
  reason: "",
};
function FormWork() {
  var { id } = useParams();
  let navigate = useNavigate();
  const goBack = () => {
    navigate(`/register/DetailWork/${id}`);
  };
  const [dataVertify, setDataVertify] = useState({});
  const [position_injob, setPosition_injob] = useState([]);
  const [dataEducation, setDataEducation] = useState([]);
  const Verifytoken = async () => {
    const token = localStorage.getItem("token");
    const resVerify = await Vertify_token(token);
    const Education = await Get_Education(token);
    setDataEducation(Education);
    if (resVerify.status) {
      setDataVertify(resVerify.data);
    } else {
      navigate("/");
    }
  };

  const [stateInsert, setstateInsert] = useState({
    titlename: "",
    m_firstname: "",
    m_lastname: "",
    m_nation: "",
    m_race: "",
    m_religion: "",
    m_blood: "",
    m_birthday: null,
    m_relationship: "",
    m_hometown: "",
    m_domicile: "",
    job: "",
    job_Y: "",
    job_M: "",
    job_positionAddress: "",
    job_positionDetail: "",
    job_ratemoney: "",
    job_phone: "",
    job_position: "",
    card_id: "",
    card_date: "",
    house_no: "",
    moo: "",
    soy: "",
    road: "",
    phone: "",
    nameFather: "",
    JobFather: "",
    FatherNation: "",
    nameMather: "",
    JobMather: "",
    MatherNation: "",
    img: "",
    skill: "",
  });

  const [stateEdu, setStateEdu] = useState(emptyEdu);
  const [editEdu, setEditEdu] = useState(emptyEdu);
  const [allListEdu, setAllListEdu] = useState([]);

  const [stateJob, setStateJob] = useState(emptyJob);
  const [editJob, setEditJob] = useState(emptyJob);
  const [allListJob, setAllListJob] = useState([]);

  const [stateHistoryJob, setStateHistoryJob] = useState(historyJob);
  const [editHistoryJob, setEditHistoryJob] = useState(historyJob);
  const [allListHistoryJob, setAllListHistoryJob] = useState([]);

  function onEduSubmit(event) {
    event.preventDefault();
    setAllListEdu((prevAllEdu) => {
      const newEdu = { ...stateEdu };
      newEdu.id = Date.now().toString();
      return [newEdu, ...prevAllEdu];
    });

    // Clear add form
    setOpenModal_1(false);
    setStateEdu(emptyEdu);
  }
  function onEditEduSubmit(event) {
    event.preventDefault();
    setAllListEdu((prevAllEdu) => {
      return prevAllEdu.map((note) => {
        if (note.id !== editEdu.id) return note;
        return editEdu;
      });
    });

    // Clear edit form

    setEditEdu(emptyEdu);
    setOpenModal_EditEdu(false);
  }
  function onEduDelete(EduID) {
    setAllListEdu((prevAllNotes) => {
      return prevAllNotes.filter((theNote) => theNote.id !== EduID);
    });
  }

  function onJobSubmit(event) {
    event.preventDefault();
    setAllListJob((prevAllJob) => {
      const newJob = { ...stateJob };
      newJob.id = Date.now().toString();
      return [newJob, ...prevAllJob];
    });

    // Clear add form
    setOpenModal_2(false);
    setStateJob(emptyJob);
  }
  function onEditJobSubmit(event) {
    event.preventDefault();
    setAllListJob((prevAllEdu) => {
      return prevAllEdu.map((note) => {
        if (note.id !== editJob.id) return note;
        return editJob;
      });
    });

    // Clear edit form

    setEditJob(emptyJob);
    setOpenModal_EditJob(false);
  }
  function onJoBDelete(id) {
    setAllListJob((prevAllNotes) => {
      return prevAllNotes.filter((theNote) => theNote.id !== id);
    });
  }

  function onHistoryJobSubmit(event) {
    event.preventDefault();
    setAllListHistoryJob((prevAllJob) => {
      const newHistoryJob = { ...stateHistoryJob };
      newHistoryJob.id = Date.now().toString();
      return [newHistoryJob, ...prevAllJob];
    });

    // Clear add form
    setOpenModal_3(false);
    setStateHistoryJob(historyJob);
  }

  const [education, setEducation] = useState([]);
  const [professional, setProfessional] = useState([]);
  const [skill, setSkill] = useState("");

  const [phone, setPhone] = useState("");

  const dateFormat = "DD/MM/YYYY";
  const [openModal_1, setOpenModal_1] = useState(false);
  const [openModal_2, setOpenModal_2] = useState(false);
  const [openModal_3, setOpenModal_3] = useState(false);
  const handleCloseModal2 = () => {
    setOpenModal_2(false);
  };
  const handleCloseModal3 = () => {
    setOpenModal_3(false);
  };

  const [Datarelationship, setDatarelationship] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [calDate, setCalDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [titlename, setTitlename] = useState([]);
  const [religion, setReligion] = useState([]);
  const [bloodType, setbloodType] = useState([]);

  const handleClickOpen = () => {
    setOpenModal_1(true);
  };

  const handleClose = () => {
    setOpenModal_1(false);
  };

  const [OpenModal_EditEdu, setOpenModal_EditEdu] = useState(false);
  const [OpenModal_EditJob, setOpenModal_EditJob] = useState(false);
  const ModalEditEdu = () => {
    setOpenModal_EditEdu(true);
  };
  const handleCloseModalEditJob = () => {
    setOpenModal_EditJob(false);
  };

  const handleModalEdu = (data) => {
    setEditEdu({
      id: data.id,
      education: data.education,
      nameEducation: data.nameEducation,
      detailEducation: data.detailEducation,
      numberAvg: data.numberAvg,
      dateStart: data.dateStart,
      dateEnd: data.dateEnd,
    });
    setOpenModal_EditEdu(true);
  };
  const handleModalJob = (data) => {
    setEditJob({
      id: data.id,
      name: data.name,
      numberOn: data.numberOn,
      round: data.round,
      dateEnd: data.dateEnd,
      dateStart: data.dateStart,
    });
    setOpenModal_EditJob(true);
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
  const [Conty, setConty] = useState([]);
  const [dataJob, setDataJob] = useState({});
  const fetData = async () => {
    let datatitleName = await GetpreName(token);
    let data_religion = await GetTbl_religion(token);
    let data_Bloodtype = await GetBloodType(token);
    let data_Contry = await GetTbl_country(token);
    let data_district = await GetTbl_district(token);
    let data_subdistrict = await GetTbl_subdistrict(token);
    let data_Job = await GetJob_BYID(token, id);
    // console.log(data_Job[0]);
    // console.log(data_Contry);
    setDataJob(data_Job[0]);
    console.log(data_Job[0]);
    let relationship = await GetStatus_relationship(token);

    setCountry(data_Contry);
    // setCountry_Job(data_Contry);
    // setDistrict_Job(data_district);
    setDistrict(data_district);
    // setSubDistrict_Job(data_subdistrict);
    setSubDistrict(data_subdistrict);
    setDatarelationship(relationship);
    setbloodType(data_Bloodtype);
    setTitlename(datatitleName);
    setReligion(data_religion);
  };
  // const [province, setProvince] = useState("");
  // const [district, setDistrict] = useState("");
  // const [subdistrict, setSubdistrict] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState([]);
  const [district, setDistrict] = useState([]);
  const [Subdistrict, setSubDistrict] = useState([]);

  const [country_Job, setCountry_Job] = useState([]);
  const [district_Job, setDistrict_Job] = useState([]);
  const [Subdistrict_Job, setSubDistrict_Job] = useState([]);

  const [S_province, setProvinceS] = useState(""); // จังหวัด
  const [S_district, setDistrictS] = useState(""); // อำเภอ
  const [S_Sub_district, setSub_DistrictS] = useState(""); // ตำบล

  const [S_Job_province, setProvinceS_Job] = useState(""); // จังหวัด
  const [S_Job_district, setDistrictS_Job] = useState(""); // อำเภอ
  // const [S_Job_Sub_district, setSub_DistrictS_Job] = useState(""); // ตำบล

  const [filtterDistrict, setFiltterDistrict] = useState([]);
  const [filtterSub_district, setSub_district] = useState([]);

  const [filtterDistrict_Job, setFiltterDistrict_Job] = useState([]);
  const [filtterSub_district_Job, setSub_district_Job] = useState([]);

  const handleSelectProvinceJob = (e) => {
    const getValue = e.target.value;
    setProvinceS_Job(getValue);
    if (getValue != "") {
      const Data = district.filter((value) => value.province_id == getValue);
      // console.log(Data);
      setFiltterDistrict_Job(Data);
    }
  };

  // const handleSelectDistrictJob = (e) => {
  //   const getDistrict = e.target.value;
  //   setDistrictS_Job(getDistrict);
  //   // console.log(Subdistrict);
  //   if (getDistrict != "") {
  //     const Data = Subdistrict.filter(
  //       (value) => value.district_id == getDistrict
  //     );
  //     setSub_district_Job(Data);
  //   }
  // };

  const handleSelectProvince = (e) => {
    const getValue = e.target.value;
    setProvinceS(getValue);
    console.log(getValue);
    if (getValue != "") {
      const Data = district.filter((value) => value.province_id == getValue);
      // console.log(Data);
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
      setZipcode(Data.zipcode);
    }
  };

  const HandleSubmitToApi = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", stateInsert.img);
    formData.append("m_id", dataVertify.m_id);
    formData.append("m_idcard", stateInsert.card_id);
    formData.append("m_relationship", stateInsert.m_relationship);
    formData.append("m_prename", stateInsert.titlename);
    formData.append("m_firstname", stateInsert.m_firstname);
    formData.append("m_lastname", stateInsert.m_lastname);
    formData.append("m_race", stateInsert.m_race);
    formData.append("m_nation", stateInsert.m_nation);
    formData.append("m_religion", stateInsert.m_religion);
    formData.append("m_blood", stateInsert.m_blood);
    formData.append("m_domicile", stateInsert.m_domicile);
    formData.append("m_hometown", stateInsert.m_hometown);
    formData.append("m_birthday", stateInsert.m_birthday);
    formData.append("m_idcard_province", S_Job_province);
    formData.append("m_idcard_district", S_Job_district);
    formData.append("m_idcard_issuance_date", stateInsert.card_date);
    formData.append("m_house_no", stateInsert.house_no);
    formData.append("m_moo", stateInsert.moo);
    formData.append("m_alley", stateInsert.soy);
    formData.append("m_road", stateInsert.road);
    formData.append("m_subdistrict", S_Sub_district);
    formData.append("m_district", S_district);
    formData.append("m_province", S_province);
    formData.append("m_zipcode", zipcode);
    formData.append("m_phone", stateInsert.phone);
    formData.append("m_fathername", stateInsert.nameFather);
    formData.append("m_father_nationality", stateInsert.FatherNation);

    formData.append("m_father_occupation", stateInsert.JobFather);
    formData.append("m_mother_nationality", stateInsert.MatherNation);
    formData.append("m_mothername", stateInsert.nameMather);
    formData.append("m_mother_occupation", stateInsert.JobMather);
    for (let index = 0; index < allListEdu.length; index++) {
      formData.append(`edu[${index}]}`, allListEdu[index].education);
      formData.append(`edu[${index}]}`, allListEdu[index].detailEducation);
      formData.append(`edu[${index}]}`, allListEdu[index].numberAvg);
      formData.append(`edu[${index}]}`, allListEdu[index].dateStart);
      formData.append(`edu[${index}]}`, allListEdu[index].dateEnd);
    }
    formData.append("app_current_job", stateInsert.job);
    formData.append("app_current_year", stateInsert.job_Y);
    formData.append("app_current_month", stateInsert.job_M);
    formData.append("app_current_office", stateInsert.job_positionAddress);
    formData.append("app_current_department", stateInsert.job_positionDetail);
    formData.append("app_current_phone", stateInsert.job_phone);
    formData.append("app_current_position", stateInsert.job_position);
    formData.append("app_current_salary", stateInsert.job_ratemoney);
    formData.append("app_user", dataVertify.m_id);
    formData.append("job_id", dataJob.job_id);
    formData.append("app_position", dataJob.job_position);
    formData.append("app_ability", stateInsert.skill);
    formData.append("jc_id", dataJob.jc_id);
    // formData.append("app_position");
    // formData.append("app_img", stateInsert.img);

    // formData.append('app_ability' , )
    // formData.append("app_position", id);

    let res = await Register_Job(token, formData);
    console.log(res);
  };

  useEffect(() => {
    Verifytoken();
    fetData();
  }, []);
  return (
    <>
      {/* {JSON.stringify(dataJob.job_position)} */}
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
            <form onSubmit={HandleSubmitToApi}>
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
                          value={stateInsert.titlename}
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              titlename: e.target.value,
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
                          value={stateInsert.m_firstname}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
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
                          value={stateInsert.m_lastname}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
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
                          value={stateInsert.m_nation}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
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
                          value={stateInsert.m_race}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
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
                          value={stateInsert.m_religion}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              m_religion: e.target.value,
                            });
                          }}
                        >
                          <option value={""}>เลือก</option>
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
                        <label className="form-label">หมู่โลหิต</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={stateInsert.m_blood}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              m_blood: e.target.value,
                            });
                          }}
                        >
                          <option value="">เลือก</option>
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
                            required
                            value={dayjs(stateInsert.m_birthday)}
                            onChange={(newValue) => {
                              setstateInsert({
                                ...stateInsert,
                                m_birthday: newValue,
                              });
                            }}
                            slotProps={{
                              textField: { size: "small", required: true },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div className="col-md-12 py-2 mb-3">
                      <div className="row">
                        <div className="col-md-3">
                          <p className="m-0">สถานภาพทางครอบครัว</p>
                        </div>
                        <div className="col-md-9">
                          <div className="row m-0">
                            {Datarelationship.map((value, idx) => {
                              return (
                                <div className="col-md-3" key={idx}>
                                  <div>
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                      required
                                      // checked={
                                      //   dataVertify.m_relationship ==
                                      //   value.relationship_id
                                      // }
                                      value={value.relationship_id}
                                      onChange={(e) => {
                                        setstateInsert({
                                          ...stateInsert,
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
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">อาชีพปัจจุบัน</label>
                        <input
                          type="text"
                          className="form-control"
                          value={stateInsert.job}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">อายุการทำงาน(ปี)</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={stateInsert.job_Y}
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job_Y: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">
                          อายุการทำงาน(เดือน)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={stateInsert.job_M}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job_M: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">สถานที่ทำงาน</label>
                        <input
                          type="text"
                          className="form-control"
                          value={stateInsert.job_positionAddress}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job_positionAddress: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">กอง/แผนก</label>
                        <input
                          type="text"
                          className="form-control"
                          value={stateInsert.job_positionDetail}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job_positionDetail: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">อัตราเงินเดือน</label>
                        <input
                          type="text"
                          className="form-control"
                          value={stateInsert.job_ratemoney}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job_ratemoney: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">ตำแหน่ง</label>
                        <input
                          type="text"
                          className="form-control"
                          value={stateInsert.job_position}
                          required
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              job_position: e.target.value,
                            });
                          }}
                        />
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
                          required
                          accept="image/png, image/jpeg"
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              img: e.target.files[0],
                            });
                          }}
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
                      <p className="fw-bold">
                        กรณีทุนเล่าเรียนหลวง ทุนรัฐบาล
                        หรือทุนองค์ปกครองส่วนท้องถิ่น
                        ในสาขาวิชาที่คณะกรรมการกลางข้าราชการหรือพนักงานส่วนท้องถิ่น
                        (ก.จ ก.ท และ ก.อบต.)
                      </p>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วุฒิการศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">ชื่อสถานศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">ประเทศ</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วัน/เดือน/ปี</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="fw-bold">
                        กรณีสำเร็จการศึกษาตามหลักสูตรที่คณะกรรมการกลางข้าราชการหรือพนักงานส่วนท้องถิ่น
                        (ก.จ ก.ท และ ก.อบต.)
                      </p>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วุฒิการศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">ชื่อสถานศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วัน/เดือน/ปี</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="fw-bold">
                        กรณีสำเร็จการศึกษาในวุฒิที่ ก.จ. ก.ท หรือ ก.อบต.
                      </p>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วุฒิการศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">ชื่อสถานศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วัน/เดือน/ปี</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="fw-bold">กรณีมีผลงานสอบแข่งขัน</p>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วุฒิการศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">ชื่อสถานศึกษา</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label">วัน/เดือน/ปี</label>
                            <input
                              type="text"
                              className="form-control"
                              // value={stateInsert.job_positionAddress}
                              // required
                              // onChange={(e) => {
                              //   setstateInsert({
                              //     ...stateInsert,
                              //     job_positionAddress: e.target.value,
                              //   });
                              // }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 my-auto">
                      <p className="pt-5 pt-md-0 m-0">ประวัติการศึกษา</p>
                    </div>
                    <div className="col-md-6 text-end">
                      <span
                        className="Btn_Add_user my-2"
                        onClick={() => {
                          handleClickOpen();
                        }}
                      >
                        เพิ่มข้อมูล
                      </span>

                      <Modal show={openModal_1} onHide={handleClose} size="md">
                        <form onSubmit={onEduSubmit}>
                          <Modal.Header closeButton>
                            <Modal.Title>เพิ่มประวัติการศึกษา</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="pt-2">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-12">
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
                                          name="education"
                                          value={stateEdu.education}
                                          onChange={(e) => {
                                            setStateEdu({
                                              ...stateEdu,
                                              education: e.target.value,
                                            });
                                          }}
                                        >
                                          <option value="">เลือก</option>
                                          {dataEducation.map((value, idx) => {
                                            return (
                                              <option
                                                value={value.edu_id}
                                                name={value.edu_level}
                                                key={idx}
                                              >
                                                {value.edu_level}
                                              </option>
                                            );
                                          })}
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
                                          name="nameEducation"
                                          value={stateEdu.nameEducation}
                                          onChange={(e) => {
                                            setStateEdu({
                                              ...stateEdu,
                                              nameEducation: e.target.value,
                                            });
                                          }}
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
                                          name="detailEducation"
                                          value={stateEdu.detailEducation}
                                          onChange={(e) => {
                                            setStateEdu({
                                              ...stateEdu,
                                              detailEducation: e.target.value,
                                            });
                                          }}
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
                                          name="numberAvg"
                                          value={stateEdu.numberAvg}
                                          onChange={(e) => {
                                            setStateEdu({
                                              ...stateEdu,
                                              numberAvg: e.target.value,
                                            });
                                          }}
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
                                              name="dateStart"
                                              value={stateEdu.dateStart}
                                              onChange={(newValue) => {
                                                setStateEdu({
                                                  ...stateEdu,
                                                  dateStart: newValue,
                                                });
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
                                            name="dateEnd"
                                            value={stateEdu.dateEnd}
                                            onChange={(newValue) => {
                                              setStateEdu({
                                                ...stateEdu,
                                                dateEnd: newValue,
                                              });
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
                          </Modal.Body>
                          <Modal.Footer className="justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-outline-success mx-1"
                            >
                              บันทึก
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary mx-1"
                              onClick={handleClose}
                            >
                              ยกเลิก
                            </button>
                          </Modal.Footer>
                        </form>
                      </Modal>
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
                          {allListEdu
                            ? allListEdu.map((edu, idx_edu) => {
                                console.log(edu);
                                return (
                                  <tr key={idx_edu}>
                                    <td className="text-center">
                                      {dataEducation.map((value, idx) => {
                                        if (value.edu_id == edu.education) {
                                          return value.edu_level;
                                        }
                                      })}
                                    </td>
                                    <td>{edu.nameEducation}</td>
                                    <td className="text-center">
                                      {edu.dateStart.add(543, "y").format("LL")}
                                    </td>
                                    <td className="text-center">
                                      {edu.dateEnd.add(543, "y").format("LL")}
                                    </td>
                                    <td className="text-center">
                                      <button
                                        className="btn btn-warning mx-1"
                                        onClick={() => {
                                          handleModalEdu(edu);
                                        }}
                                      >
                                        <i className="bi bi-gear"></i>
                                      </button>
                                      <Modal
                                        show={OpenModal_EditEdu}
                                        onHide={handleClose}
                                        size="md"
                                      >
                                        <form onSubmit={onEditEduSubmit}>
                                          <Modal.Header closeButton>
                                            <Modal.Title>
                                              เพิ่มประวัติการศึกษา
                                            </Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <div className="pt-2">
                                              <div className="row">
                                                <div className="col-md-12">
                                                  <div className="row">
                                                    <div className="col-md-12">
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
                                                          name="education"
                                                          value={
                                                            editEdu.education
                                                          }
                                                          onChange={(e) => {
                                                            setEditEdu({
                                                              ...editEdu,
                                                              education:
                                                                e.target.value,
                                                            });
                                                          }}
                                                        >
                                                          <option value="">
                                                            เลือก
                                                          </option>
                                                          {dataEducation.map(
                                                            (value, idx) => {
                                                              return (
                                                                <option
                                                                  value={
                                                                    value.edu_id
                                                                  }
                                                                  name={
                                                                    value.edu_level
                                                                  }
                                                                  key={idx}
                                                                >
                                                                  {
                                                                    value.edu_level
                                                                  }
                                                                </option>
                                                              );
                                                            }
                                                          )}
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
                                                          name="nameEducation"
                                                          value={
                                                            editEdu.nameEducation
                                                          }
                                                          onChange={(e) => {
                                                            setEditEdu({
                                                              ...editEdu,
                                                              nameEducation:
                                                                e.target.value,
                                                            });
                                                          }}
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
                                                          name="detailEducation"
                                                          value={
                                                            editEdu.detailEducation
                                                          }
                                                          onChange={(e) => {
                                                            setEditEdu({
                                                              ...editEdu,
                                                              detailEducation:
                                                                e.target.value,
                                                            });
                                                          }}
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
                                                          name="numberAvg"
                                                          value={
                                                            editEdu.numberAvg
                                                          }
                                                          onChange={(e) => {
                                                            setEditEdu({
                                                              ...editEdu,
                                                              numberAvg:
                                                                e.target.value,
                                                            });
                                                          }}
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
                                                            dateAdapter={
                                                              AdapterDayjs
                                                            }
                                                            adapterLocale="th"
                                                          >
                                                            <DatePicker
                                                              className="form-control"
                                                              label="วัน/เดือน/ปี"
                                                              name="dateStart"
                                                              value={
                                                                editEdu.dateStart
                                                              }
                                                              onChange={(
                                                                newValue
                                                              ) => {
                                                                setEditEdu({
                                                                  ...editEdu,
                                                                  dateStart:
                                                                    newValue,
                                                                });
                                                              }}
                                                              inputFormat="dd-MM-yyyy"
                                                              slotProps={{
                                                                textField: {
                                                                  size: "small",
                                                                },
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
                                                          dateAdapter={
                                                            AdapterDayjs
                                                          }
                                                          adapterLocale="th"
                                                        >
                                                          <DatePicker
                                                            className="form-control"
                                                            label="วัน/เดือน/ปี"
                                                            inputFormat="dd-MM-yyyy"
                                                            name="dateEnd"
                                                            value={
                                                              editEdu.dateEnd
                                                            }
                                                            onChange={(
                                                              newValue
                                                            ) => {
                                                              setEditEdu({
                                                                ...editEdu,
                                                                dateEnd:
                                                                  newValue,
                                                              });
                                                            }}
                                                            slotProps={{
                                                              textField: {
                                                                size: "small",
                                                              },
                                                            }}
                                                          />
                                                        </LocalizationProvider>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </Modal.Body>
                                          <Modal.Footer className="justify-content-center">
                                            <button
                                              type="submit"
                                              className="btn btn-outline-success mx-1"
                                            >
                                              บันทึก
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-outline-secondary mx-1"
                                              onClick={() => {
                                                setOpenModal_EditEdu(false);
                                              }}
                                            >
                                              ยกเลิก
                                            </button>
                                          </Modal.Footer>
                                        </form>
                                      </Modal>
                                      <button
                                        className="btn btn-danger mx-1"
                                        onClick={() => {
                                          onEduDelete(edu.id);
                                        }}
                                      >
                                        <i className="bi bi-trash"></i>
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6 my-auto">
                      <p className="pt-3 pt-md-0 m-0 ">ใบอนุญาตประกอบวิชาชีพ</p>
                    </div>
                    <div className="col-md-6 text-end">
                      <button
                        className="Btn_Add_user my-2"
                        onClick={() => {
                          setOpenModal_2(true);
                        }}
                      >
                        เพิ่มข้อมูล
                      </button>
                      <Modal show={openModal_2} onHide={handleCloseModal2}>
                        <form onSubmit={onJobSubmit}>
                          <Modal.Header closeButton>
                            <Modal.Title>
                              เพิ่มใบอนุญาตประกอบวิชาชีพ
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
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
                                          value={stateJob.name}
                                          onChange={(e) => {
                                            setStateJob({
                                              ...stateJob,
                                              name: e.target.value,
                                            });
                                          }}
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
                                          value={stateJob.numberOn}
                                          onChange={(e) => {
                                            setStateJob({
                                              ...stateJob,
                                              numberOn: e.target.value,
                                            });
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="text-start mb-3">
                                        <label
                                          htmlFor="exampleInputEmail1"
                                          className="form-label"
                                        >
                                          ครั้งที่
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ครั้งที่"
                                          required
                                          value={stateJob.round}
                                          onChange={(e) => {
                                            setStateJob({
                                              ...stateJob,
                                              round: e.target.value,
                                            });
                                          }}
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
                                              value={stateJob.dateStart}
                                              onChange={(newValue) => {
                                                setStateJob({
                                                  ...stateJob,
                                                  dateStart: newValue,
                                                });
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
                                            value={stateJob.dateEnd}
                                            onChange={(newValue) => {
                                              setStateJob({
                                                ...stateJob,
                                                dateEnd: newValue,
                                              });
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
                          </Modal.Body>
                          <Modal.Footer className="justify-content-center">
                            <Button variant="primary" type="submit">
                              บันทึก
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={handleCloseModal2}
                            >
                              ยกเลิก
                            </Button>
                          </Modal.Footer>
                        </form>
                      </Modal>
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
                          {allListJob
                            ? allListJob.map((value, idx_AllJob) => {
                                console.log(value);
                                return (
                                  <tr key={idx_AllJob}>
                                    <td className="text-center">
                                      {value.round}
                                    </td>
                                    <td>{value.name}</td>
                                    <td className="text-center">
                                      {value.dateStart
                                        .add(543, "y")
                                        .format("LL")}
                                    </td>
                                    <td className="text-center">
                                      {value.dateEnd.add(543, "y").format("LL")}
                                    </td>
                                    <td className="text-center">
                                      <button
                                        className="btn btn-warning mx-1"
                                        onClick={() => {
                                          handleModalJob(value);
                                        }}
                                      >
                                        <i className="bi bi-gear"></i>
                                      </button>
                                      <Modal
                                        show={OpenModal_EditJob}
                                        onHide={handleCloseModalEditJob}
                                      >
                                        <form onSubmit={onEditJobSubmit}>
                                          <Modal.Header closeButton>
                                            <Modal.Title>
                                              เเก้ไขใบอนุญาตประกอบวิชาชีพ
                                            </Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
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
                                                          value={editJob.name}
                                                          onChange={(e) => {
                                                            setEditJob({
                                                              ...editJob,
                                                              name: e.target
                                                                .value,
                                                            });
                                                          }}
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
                                                          value={
                                                            editJob.numberOn
                                                          }
                                                          onChange={(e) => {
                                                            setEditJob({
                                                              ...editJob,
                                                              numberOn:
                                                                e.target.value,
                                                            });
                                                          }}
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                      <div className="text-start mb-3">
                                                        <label
                                                          htmlFor="exampleInputEmail1"
                                                          className="form-label"
                                                        >
                                                          ครั้งที่
                                                        </label>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="ครั้งที่"
                                                          required
                                                          value={editJob.round}
                                                          onChange={(e) => {
                                                            setEditJob({
                                                              ...editJob,
                                                              round:
                                                                e.target.value,
                                                            });
                                                          }}
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
                                                            dateAdapter={
                                                              AdapterDayjs
                                                            }
                                                            adapterLocale="th"
                                                          >
                                                            <DatePicker
                                                              className="form-control"
                                                              label="วัน/เดือน/ปี"
                                                              value={
                                                                editJob.dateStart
                                                              }
                                                              onChange={(
                                                                newValue
                                                              ) => {
                                                                setEditJob({
                                                                  ...editJob,
                                                                  dateStart:
                                                                    newValue,
                                                                });
                                                              }}
                                                              inputFormat="dd-MM-yyyy"
                                                              slotProps={{
                                                                textField: {
                                                                  size: "small",
                                                                },
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
                                                          dateAdapter={
                                                            AdapterDayjs
                                                          }
                                                          adapterLocale="th"
                                                        >
                                                          <DatePicker
                                                            className="form-control"
                                                            label="วัน/เดือน/ปี"
                                                            inputFormat="dd-MM-yyyy"
                                                            value={
                                                              editJob.dateEnd
                                                            }
                                                            onChange={(
                                                              newValue
                                                            ) => {
                                                              setEditJob({
                                                                ...editJob,
                                                                dateEnd:
                                                                  newValue,
                                                              });
                                                            }}
                                                            slotProps={{
                                                              textField: {
                                                                size: "small",
                                                              },
                                                            }}
                                                          />
                                                        </LocalizationProvider>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </Modal.Body>
                                          <Modal.Footer className="justify-content-center">
                                            <Button
                                              variant="primary"
                                              type="submit"
                                            >
                                              เพิ่มข้อมูล
                                            </Button>
                                            <Button
                                              variant="secondary"
                                              onClick={handleClose}
                                            >
                                              ยกเลิก
                                            </Button>
                                          </Modal.Footer>
                                        </form>
                                      </Modal>

                                      <button
                                        className="btn btn-danger mx-1"
                                        onClick={() => {
                                          onJoBDelete(value.id);
                                        }}
                                      >
                                        <i className="bi bi-trash"></i>
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6 my-auto">
                      <p className="pt-3 pt-md-0 m-0">ประวัติการทำงาน</p>
                    </div>
                    <div className="col-md-6 text-end">
                      <button
                        className="Btn_Add_user my-2"
                        onClick={() => {
                          setOpenModal_3(true);
                        }}
                      >
                        เพิ่มข้อมูล
                      </button>
                      <Modal show={openModal_3} onHide={handleCloseModal3}>
                        <form onSubmit={onHistoryJobSubmit}>
                          <Modal.Header closeButton>
                            <Modal.Title>เพิ่มประวัติการทำงาน</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
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
                                          required
                                          value={
                                            setAllListHistoryJob.locationJob
                                          }
                                          onChange={(e) => {
                                            setStateHistoryJob({
                                              ...stateHistoryJob,
                                              locationJob: e.target.value,
                                            });
                                          }}
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
                                          value={
                                            setAllListHistoryJob.position_injob
                                          }
                                          onChange={(e) => {
                                            setStateHistoryJob({
                                              ...stateHistoryJob,
                                              position_injob: e.target.value,
                                            });
                                          }}
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
                                          value={stateHistoryJob.money_LastJob}
                                          onChange={(e) => {
                                            setStateHistoryJob({
                                              ...stateHistoryJob,
                                              money_LastJob: e.target.value,
                                            });
                                          }}
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
                                              value={
                                                setAllListHistoryJob.dateStart
                                              }
                                              required
                                              onChange={(newValue) => {
                                                setStateHistoryJob({
                                                  ...stateHistoryJob,
                                                  date_start: newValue,
                                                });
                                              }}
                                              inputFormat="dd-MM-yyyy"
                                              slotProps={{
                                                textField: {
                                                  size: "small",
                                                  required: true,
                                                },
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
                                            required
                                            value={stateHistoryJob.date_end}
                                            onChange={(newValue) => {
                                              setStateHistoryJob({
                                                ...stateHistoryJob,
                                                date_end: newValue,
                                              });
                                            }}
                                            slotProps={{
                                              textField: {
                                                size: "small",
                                                required: true,
                                              },
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
                                          value={stateHistoryJob.reason}
                                          onChange={(e) => {
                                            setStateHistoryJob({
                                              ...stateHistoryJob,
                                              reason: e.target.value,
                                            });
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer className="justify-content-center">
                            <Button variant="primary" type="submit">
                              เพิ่มข้อมูล
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={handleCloseModal3}
                            >
                              ยกเลิก
                            </Button>
                          </Modal.Footer>
                        </form>
                      </Modal>
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
                          {allListHistoryJob
                            ? allListHistoryJob.map((value, idx_HistoryJob) => {
                                console.log(value);
                                return (
                                  <tr key={idx_HistoryJob}>
                                    <td>{value.locationJob}</td>
                                    <td className="text-center">
                                      {value.position_injob}
                                    </td>
                                    <td>{value.money_LastJob}</td>
                                    <td className="text-center">
                                      {value.date_start
                                        .add(543, "y")
                                        .format("LL")}
                                    </td>
                                    <td className="text-center">
                                      {value.date_end
                                        .add(543, "y")
                                        .format("LL")}
                                    </td>
                                    <td className="text-center">
                                      <button className="btn btn-warning mx-1">
                                        <i className="bi bi-gear"></i>
                                      </button>
                                      <button className="btn btn-danger mx-1">
                                        <i className="bi bi-trash"></i>
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
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
                          value={stateInsert.skill}
                          onChange={(e) => {
                            setstateInsert({
                              ...stateInsert,
                              skill: e.target.value,
                            });
                          }}
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
                                  required
                                  onChange={(e) => {
                                    setstateInsert({
                                      ...stateInsert,
                                      job_phone: e.target.value,
                                    });
                                  }}
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
                                    required
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        card_id: e.target.value,
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
                                    ออกให้ ณ จังหวัด
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={S_Job_province}
                                    required
                                    onChange={handleSelectProvinceJob}
                                  >
                                    <option>เลือก</option>
                                    {country
                                      ? country.map((value, idx) => {
                                          // console.log(value);
                                          return (
                                            <option value={value.id} key={idx}>
                                              {value.province_th}
                                            </option>
                                          );
                                        })
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    อำเภอ
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={S_Job_district}
                                    required
                                    onChange={(e) => {
                                      setDistrictS_Job(e.target.value);
                                    }}
                                  >
                                    <option>เลือก</option>
                                    {filtterDistrict_Job
                                      ? filtterDistrict_Job.map(
                                          (value, idx) => {
                                            // console.log(value);
                                            return (
                                              <option
                                                value={value.id}
                                                key={idx}
                                              >
                                                {value.district_th}
                                              </option>
                                            );
                                          }
                                        )
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    วันที่ออกบัตร
                                  </label>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                    adapterLocale="th"
                                  >
                                    <DatePicker
                                      className="form-control"
                                      label="วัน/เดือน/ปี"
                                      inputFormat="dd-MM-yyyy"
                                      required
                                      value={dayjs(stateInsert.card_date)}
                                      onChange={(newValue) => {
                                        setstateInsert({
                                          ...stateInsert,
                                          card_date: newValue,
                                        });
                                      }}
                                      slotProps={{
                                        textField: {
                                          size: "small",
                                          required: true,
                                        },
                                      }}
                                    />
                                  </LocalizationProvider>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <p>สถานที่เกิด</p>
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
                                    value={stateInsert.m_hometown}
                                    required
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        m_hometown: e.target.value,
                                      });
                                    }}
                                  >
                                    <option>เลือก</option>
                                    {country
                                      ? country.map((value, idx) => {
                                          // console.log(value);
                                          return (
                                            <option value={value.id} key={idx}>
                                              {value.province_th}
                                            </option>
                                          );
                                        })
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ภูมิลำเนา
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={stateInsert.m_domicile}
                                    required
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        m_domicile: e.target.value,
                                      });
                                    }}
                                  >
                                    <option>เลือก</option>
                                    {country
                                      ? country.map((value, idx) => {
                                          // console.log(value);
                                          return (
                                            <option value={value.id} key={idx}>
                                              {value.province_th}
                                            </option>
                                          );
                                        })
                                      : null}
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
                                    value={stateInsert.house_no}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        house_no: e.target.value,
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
                                    หมู่ที่
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="หมู่ที่"
                                    required
                                    value={stateInsert.moo}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        moo: e.target.value,
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
                                    ตรอก/ซอย
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ตรอก/ซอย"
                                    value={stateInsert.soy}
                                    required
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        soy: e.target.value,
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
                                    ถนน
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ถนน"
                                    value={stateInsert.road}
                                    required
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        road: e.target.value,
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
                                    จังหวัด
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    required
                                    value={S_province}
                                    onChange={handleSelectProvince}
                                  >
                                    <option value={""}>เลือก</option>
                                    {country
                                      ? country.map((value, idx) => {
                                          // console.log(value);
                                          return (
                                            <option value={value.id} key={idx}>
                                              {value.province_th}
                                            </option>
                                          );
                                        })
                                      : null}
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
                                    onChange={handleSelectDistrict}
                                    value={S_district}
                                    required
                                  >
                                    <option value={""}>เลือก</option>
                                    {filtterDistrict
                                      ? filtterDistrict.map((value, idx) => {
                                          // console.log(value);
                                          return (
                                            <option key={idx} value={value.id}>
                                              {value.district_th}
                                            </option>
                                          );
                                        })
                                      : null}
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
                                    onChange={handleSelectSubDistrict}
                                    value={S_Sub_district}
                                    required
                                  >
                                    <option value={""}>เลือก</option>
                                    {filtterSub_district
                                      ? filtterSub_district.map(
                                          (value, idx) => {
                                            return (
                                              <option value={value.id}>
                                                {value.subdistrict_th}
                                              </option>
                                            );
                                          }
                                        )
                                      : null}
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
                                    value={zipcode}
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
                                    value={stateInsert.phone}
                                    required
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        phone: e.target.value,
                                      });
                                    }}
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
                                    value={stateInsert.nameFather}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        nameFather: e.target.value,
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
                                    placeholder="ชื่อบิดา"
                                    value={stateInsert.FatherNation}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        FatherNation: e.target.value,
                                      });
                                    }}
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
                                    value={stateInsert.JobFather}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        JobFather: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6"></div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    ชื่อมารดา
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ชื่อมารดา"
                                    value={stateInsert.nameMather}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        nameMather: e.target.value,
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
                                    placeholder="ชื่อมารดา"
                                    value={stateInsert.MatherNation}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        MatherNation: e.target.value,
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
                                    อาชีพ
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="อาชีพ"
                                    value={stateInsert.JobMather}
                                    onChange={(e) => {
                                      setstateInsert({
                                        ...stateInsert,
                                        JobMather: e.target.value,
                                      });
                                    }}
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
                  <div className="text-center">
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
