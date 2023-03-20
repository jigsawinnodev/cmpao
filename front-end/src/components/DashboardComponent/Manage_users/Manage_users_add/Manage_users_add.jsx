import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Boy from "../../../../assets/img/boy.png";
import { useNavigate } from "react-router-dom";
function Manage_users_add() {
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
    navigate("/Dashboard/User");
  }
  const [selectBirthday, SetBirthday] = useState("");
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
            <div className="row px-3">
              <div className="col-md-8">
                <div className="row m-0">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        รหัสประจำตัวประชาชน
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="รหัสประจำตัวประชาชน"
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
                          >
                            <option>เลือก</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
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
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="ชื่อ"
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="นามสกุล"
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
                        selected={selectBirthday}
                        className="w-100 form-control"
                        onChange={(date) => SetBirthday(date)}
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ตำแหน่ง"
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="เบอร์โทรศัพท์"
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="อีเมล"
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
                      >
                        <option selected>เลือก</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
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
                        src={Boy}
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ชื่อผู้ใช้งาน"
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="รหัสผ่าน"
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
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ยืนยันรหัสผ่าน"
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
                      >
                        <option>ไม่ใช้งาน</option>
                        <option value={1}>One</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 pt-5 pb-4">
                <div className="text-end px-2">
                  <button type="button" class="btn btn-outline-success mx-1">
                    บันทึก
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger mx-1"
                    onClick={() => {
                      handleBacktoPage();
                    }}
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Manage_users_add;
