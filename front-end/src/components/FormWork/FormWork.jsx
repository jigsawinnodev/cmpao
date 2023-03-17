import React, { useRef, useState } from "react";
import ImgProfile from "../../assets/img/img_profile.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import Style from "./FormWork.module.css";
function FormWork() {
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState({
    d: "",
    m: "",
    y: "",
  });

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

  return (
    <>
      <div className="px-md-5">
        <div
          className="container-fluid mt-4 px-md-2 py-md-2 shadow rounded"
          style={{ backgroundColor: "white" }}
        >
          <div className="pb-5">
            <div className="text-center pt-2">
              <h3>ใบสมัครสรรหาเเละเลือกสรรบุคคลทั่วไป</h3>
              <h3>เพื่อจ้างเป็นพนักงานจ้างองค์การบริหารส่วนจังหวัดออนไลน์</h3>
            </div>
            <div className="row px-4">
              <div className="col-md-12 mx-auto">
                <div className="row">
                  <div className="col-md-6 col-12 text-center">
                    <input
                      className="form-check-input mx-md-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      style={{ float: "none" }}
                    />
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckDefault"
                    >
                      ประเภทพนักงานจ้างทั่วไป
                    </label>
                  </div>
                  <div className="col-md-6 col-12 text-center">
                    <input
                      className="form-check-input mx-md-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      style={{ float: "none" }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      ประเภทพนักงานจ้างตามภารกิจ
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-8 p-0 col-12 my-auto">
                <div className="container">
                  <hr className="hr" style={{ border: "1px dashed black" }} />
                </div>
              </div>
              <div className="col-md-1 my-auto p-0 col-6">
                <p className="text-center m-0">เลขประจำตัว</p>
              </div>
              <div className="col-md-3 col-6">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="เลขประจำตัว"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></input>
                </div>
              </div>
              <div className="col-md-9  ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2 my-auto px-0 py-md-2 col-12 py-1">
                      <p className="m-0">1. ชื่อ-นามสกุล</p>
                    </div>
                    <div className="col-md-10 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 my-auto px-0 col-12 py-md-2 py-1">
                      <p className="m-0">สัญชาติ</p>
                    </div>
                    <div className="col-md-2 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 my-auto py-md-2 px-0 py-1">
                      <p className="m-0 text-md-center text-start">เชื้อชาติ</p>
                    </div>
                    <div className="col-md-2 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 my-auto py-1 px-0 py-md-2 ">
                      <p className="m-0 text-md-center text-start">ศาสนา</p>
                    </div>
                    <div className="col-md-2 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 my-auto py-md-2 py-1 px-0">
                      <p className="m-0 text-md-center text-start ">
                        หมู่โลหิต
                      </p>
                    </div>
                    <div className="col-md-2 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-12 p-0 py-2">
                      <p className="m-0">
                        2. อายุนับถึงวันสุดท้ายในการรับสมัคร (อายุไม่ต่ำกว่า 18
                        ปี บริบูรณ์ เเละอายุไม่เกิน 60 ปี)
                      </p>
                    </div>
                    <div className="col-md-2 my-auto px-0 py-md-2 py-1">
                      <p className="m-0">วัน / เดือน / ปี</p>
                    </div>
                    <div className="col-md-4 my-auto py-2">
                      <DatePicker
                        selected={startDate}
                        onChange={(e) => handleChangeDate(e)}
                      />
                    </div>
                    <div className="col-md-6 py-2 my-auto ">
                      <div>
                        <p className="m-0">
                          {date.y ? data.y : "0"} ปี {date.m ? date.m : "0"}{" "}
                          เดือน {date.d ? date.d : "0"} วัน
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 px-0 my-auto py-1 py-md-2">
                      <p className="m-0">3. สถานภาพทางครอบครัว</p>
                    </div>
                    <div className="col-md-9 p-0 my-auto py-2">
                      <div className="d-flex flex-column flex-md-row">
                        <div className="form-check mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            โสด
                          </label>
                        </div>
                        <div className="form-check mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            สมรส
                          </label>
                        </div>
                        <div className="form-check mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            หย่า
                          </label>
                        </div>
                        <div className="form-check mx-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault4"
                          >
                            หม้าย
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 px-0 my-auto py-1 py-md-2">
                      <p className="m-0">4. วุฒิการศึกษา</p>
                    </div>
                    <div className="col-md-4 px-0 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 px-0 my-auto py-1 py-md-2">
                      <p className="m-0 text-start text-md-center">
                        สาขาหรือวิชาเอก
                      </p>
                    </div>
                    <div className="col-md-4 px-0 my-auto py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-4 px-0 my-auto py-1 py-md-2">
                      <p className="m-0">โดยได้รับอนุมัติจากสถานศึกษาชื่อ</p>
                    </div>
                    <div className="col-md-8 p-0 py-2 my-auto">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-4 p-0 py-1 py-md-2 my-auto">
                      <p className="m-0">5. ตำเเหน่งที่สมัคร ตำเเหน่ง</p>
                    </div>
                    <div className="col-md-8 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 p-0 py-1 py-md-2 my-auto">
                      <p className="m-0">6. อาชีพปัจจุบัน</p>
                    </div>
                    <div className="col-md-2 p-0 py-2 my-auto">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 p-0 py-1 py-md-2 my-auto ">
                      <p className="m-0 text-start text-md-center">
                        อายุการทำงาน
                      </p>
                    </div>
                    <div className="col-md-2 p-0 py-2 my-auto">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 p-0 py-1 py-md-2 my-auto">
                      <p className="m-0 text-start text-md-center">ปี</p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 p-0 py-1 py-md-2 my-auto">
                      <p className="m-0 text-start text-md-center">เดือน</p>
                    </div>
                    <div className="col-md-3 p-0 pt-3 pb-1 py-md-2 my-auto">
                      <p className="m-0">สถานที่ที่งาน กรม/บริษัท</p>
                    </div>
                    <div className="col-md-3 p-0 py-2 my-auto">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 p-0 py-1 py-md-2 my-auto">
                      <p className="m-0 text-start text-md-center">กอง/แผนก</p>
                    </div>
                    <div className="col-md-4 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-4 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">หมายเลขโทรศํพย์สถานที่ทำงาน</p>
                    </div>
                    <div className="col-md-8 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-4 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">7. บัตรประจำตัวประชาชนเลขที่</p>
                    </div>
                    <div className="col-md-3 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-3 py-1 py-md-2 my-auto px-0 px-md-3">
                      <p className="m-0 text-start text-md-center">
                        ออกให้ ณ จังหวัด
                      </p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>กรุณาเลือก</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                    </div>
                    <div className="col-md-4 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">
                        8. ที่อยู่ปัจจุบันที่ติดต่อได้ บ้านเลขที่
                      </p>
                    </div>
                    <div className="col-md-4 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-1 py-1 py-md-2 my-auto px-0 px-md-3">
                      <p className="m-0 text-start text-md-center">หมู่ที่</p>
                    </div>
                    <div className="col-md-3 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">ตรอก/ซอย</p>
                    </div>
                    <div className="col-md-2 p-0 py-1 py-md-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto p-0">
                      <p className="m-0 text-start text-md-center">ถนน</p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0 text-start text-md-center">
                        ตำบล/เเขวง
                      </p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">อำเภอ/เขต</p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto p-0">
                      <p className="m-0 text-start text-md-center">จังหวัด</p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0 px-md-3">
                      <p className="m-0 text-start text-md-center">
                        รหัสไปรษณีย์
                      </p>
                    </div>
                    <div className="col-md-2 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">9. ชื่อบิดา</p>
                    </div>
                    <div className="col-md-4 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0 text-start text-md-center">อาชีพ</p>
                    </div>
                    <div className="col-md-4 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0">ชื่อมารดา</p>
                    </div>
                    <div className="col-md-4 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                    <div className="col-md-2 py-1 py-md-2 my-auto px-0">
                      <p className="m-0 text-start text-md-center">อาชีพ</p>
                    </div>
                    <div className="col-md-4 p-0 py-2">
                      <input type="text" className="w-100 form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pt-3">
                <div className="text-center">
                  <img src={ImgProfile} alt="" className="img-fluid" />
                  <div className="py-2">
                    <h5>เเนบรูปถ่ายขนาด 1 นิ้ว</h5>
                  </div>
                  <div className="container">
                    <div className="mb-3">
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
          </div>
        </div>
        <div className="py-2 text-end px-md-3">
          <button
            type="button"
            className="btn  m-1 px-5 py-3"
            style={{ backgroundColor: "#0A374A", color: "white" }}
          >
            ลงทะเบียน
          </button>
          <button
            type="button"
            className="btn m-1 px-5 py-3"
            style={{ backgroundColor: "#5E7A86", color: "white" }}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </>
  );
}

export default FormWork;
