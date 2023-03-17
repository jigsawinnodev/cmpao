import React from "react";
import Logo4 from "../../assets/img/icon_4.png";
import { Link, Routes, Route } from "react-router-dom";
import Style from "./EmptyWork.module.css";
function EmptyWork() {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="mt-4">
          <div className="row">
            <div className="col-md-6 my-auto p-0" style={{ color: "white" }}>
              <div className="text-center text-md-start pt-md-2">
                <h5 className="m-0  my-md-2 pb-2">ตำแหน่งงานว่างทั้งหมด</h5>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="">
                <div className="float-end px-md-5 my-md-2">
                  <div className={Style.group}>
                    <svg
                      className={Style.icon}
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                      </g>
                    </svg>
                    <input
                      placeholder="ค้นหา"
                      type="search"
                      className={Style.inputSearch}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p-0" style={{ color: "white" }}>
              <div style={{ border: "solid 1px black" }}>
                <div className="py-4">
                  <div className="row m-0">
                    <Link
                      to="DetailWork/1"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="DetailWork/2"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="DetailWork/3"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="DetailWork/4"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="DetailWork/5"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="DetailWork/6"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="DetailWork/7"
                      className="text-decoration-none p-0"
                      style={{ color: "white" }}
                    >
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-1 p-0 my-auto">
                            <div className="text-center text-md-end">
                              <img src={Logo4} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-md-8 my-auto col-12">
                            <div className="text-center text-md-start">
                              <p className="m-0">
                                รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
                              </p>
                            </div>
                          </div>
                          <div className="col-md-3 my-auto pt-2 ">
                            <div className="text-center">
                              <p className="m-0">
                                01/02/2023 :: ( 134 ผู้เข้าชม )
                              </p>
                            </div>
                          </div>
                          <div className="container px-1 px-md-3">
                            <hr
                              className="hr m-0 my-3"
                              style={{ height: "3px", background: "#1F7DA7" }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-4">
              <div className="float-end px-md-3 pt-2">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item ">
                      <a className="page-link" href="#">
                        หน้าเเรก
                      </a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ถัดไป
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyWork;
