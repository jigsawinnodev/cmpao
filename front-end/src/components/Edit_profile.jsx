import React, { useRef } from "react";
import IconImg from "../assets/img/admin.png";
import { NavLink } from "react-router-dom";
function Edit_profile() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  const inputFileRef = useRef();
  const onFileChangeCapture = (e) => {
    console.log(e.target.files[0]);
  };
  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  return (
    <>
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
          <div className="row m-0" style={{ fontSize: "15px" }}>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 text-end my-auto">
                  <label className="form-label py-3">ชื่อผู้ใช้งาน</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 text-end my-auto ">
                  <label className="form-label py-3">รหัสผ่าน</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 text-end">
                  <label className="form-label py-3">ยืนยันรหัสผ่าน</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 text-end">
                  <label className="form-label py-3">รหัสบัตรประชาชน</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ออกให้ ณ จังหวัด</label>
                </div>
                <div className="col-md-4 my-auto">
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
              <div className="row">
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">คำนำหน้าชื่อ</label>
                </div>
                <div className="col-md-4 my-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ชื่อ</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">นามสกุล</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">สัญชาติ</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">เชื้อชาติ</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ศาสนา</label>
                </div>
                <div className="col-md-4 my-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">หมู่โลหิต</label>
                </div>
                <div className="col-md-4 my-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">วัน/เดือน/ปีเกิด</label>
                </div>
                <div className="col-md-4 my-auto">datepicker</div>
              </div>
              <div className="row">
                <div className="col-md-3 my-auto text-center">
                  <label className="form-label py-3">สถานภาพทางครอบครัว</label>
                </div>
                <div className="col-md-9 my-auto">
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label">โสด</label>
                    </div>
                    <div className="form-check">
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
                    </div>
                  </div>
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ชื่อคู่สมรส</label>
                </div>
                <div className="col-md-10 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">บ้านเลขที่</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">หมู่ที่</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ตรอก/ซอย</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ถนน</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">จังหวัด</label>
                </div>
                <div className="col-md-4 my-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ตำบล/แขวง</label>
                </div>
                <div className="col-md-4 my-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">อำเภอ/แขวง</label>
                </div>
                <div className="col-md-4 my-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">รหัสไปรษณีย์</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">เบอร์โทรศัพท์</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">อีเมล</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ชื่อบิดา</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">อาชีพ</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">ชื่อมารดา</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 my-auto text-end">
                  <label className="form-label py-3">อาชีพ</label>
                </div>
                <div className="col-md-4 my-auto">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={IconImg}
                    alt=""
                    className="img-fluid"
                    width={128}
                    height={128}
                  />
                </div>
                <div className="col-md-12 text-center py-3">
                  <p style={{ color: "red" }}>(ขนาดไฟล์ไม่เกิน 2 MB)</p>
                </div>
                <div className="col-md-12 text-center">
                  <input
                    type="file"
                    ref={inputFileRef}
                    onChangeCapture={onFileChangeCapture}
                    style={{ display: "none" }}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={onBtnClick}
                  >
                    Select file
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center pt-5 pb-2">
              <button
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
        </div>
      </div>
    </>
  );
}

export default Edit_profile;
