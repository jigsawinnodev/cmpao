import React from "react";
import Logo4 from "../../assets/img/icon_4.png";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Style from "./EmptyWork.module.css";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
function EmptyWork() {
  return (
    <>
      <div className="">
        <div
          className="px-md-0 my-2 shadow rounded"
          style={{ backgroundColor: "white" }}
        >
          <div className="my-auto py-0 pt-md-3">
            <p
              className="text-end px-md-3 m-0 fw-bold px-3 py-3 px-md-0 py-md-0"
              style={{ fontSize: "15px" }}
            >
              วันที่ {moment().add(543, "year").format("LL")}
            </p>
          </div>
          <div>
            <h3 className="m-0 px-3 py-md-3 fw-bold text-center my-auto">
              ตำแหน่งงานว่างทั้งหมด
            </h3>
          </div>

          <div className="px-3 py-2">
            <ul className="list-group ">
              <NavLink to={"DetailWork/1"} className="text-decoration-none">
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "25px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 22 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 4 เม.ย. 2566 (ประเภท ข้าราชการ)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 134 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>
              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกพนักงานจ้างทั่วไปองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 15 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 120 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>
              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกพนักงานคอมพิวเตอร์องค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 22 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 275 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>
              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกพนักงานเขียนโปรแกรมองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 22 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 376 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>
              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกพนักงานสถิติองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 6 เม.ย. 2566 - 30 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 286 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>
              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกช่างไฟฟ้าองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 30 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 486 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>

              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกช่างอิเล็กทรอนิกสองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 30 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 486 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>

              <NavLink className="text-decoration-none" to={"DetailWork/2"}>
                <li className="list-group-item py-2">
                  <div className="row m-0">
                    <div className="col-md-1 text-center my-auto">
                      <i
                        className="bi bi-megaphone-fill"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                    <div className="col-md-7 my-auto text-center text-md-start">
                      <p className="m-0 ">
                        รับสมัครสอบคัดเลือกช่างกลโรงงานองค์การบริหารส่วนจังหวัด
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "#009e22", fontSize: "14px" }}
                      >
                        ตั้งแต่วันที่ 4 เม.ย. 2566 - 30 เม.ย. 2566
                      </p>
                      <p
                        className="m-0 fw-bold"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        อัพเดทวันที่ 5 เม.ย. 2566 (ประเภท พนักงานจ้างทั่วไป)
                      </p>
                    </div>
                    <div className="col-md-4 text-center my-auto">
                      <p className="m-0">
                        {moment().add(543, "year").format("LL")} ( 389 ผู้เข้าชม
                        )
                      </p>
                    </div>
                  </div>
                </li>
              </NavLink>
            </ul>
            <div className="row m-0">
              <div className="col-md-12">
                <div className="py-3">
                  <nav aria-label="Page navigation">
                    <ul className="pagination float-end">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyWork;
