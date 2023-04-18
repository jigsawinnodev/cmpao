import React from "react";
import "./Manage_privilege.css";
function Manage_privilege() {
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100 pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการสิทธิ์
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  {/* <button className="btn btn-outline-primary">
                      เพิ่มข้อมูล
                    </button> */}
                  <button className="Btn_Add_user">เพิ่มข้อมูล</button>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12 px-3">
                    <table className="">
                      <thead
                        style={{ backgroundColor: "#eaecf4", color: "#6e707e" }}
                      >
                        <tr>
                          <th className="text-center">ลำดับ</th>
                          <th className="text-start">ชื่อเมนู</th>
                          <th className="text-center">ผู้บริหาร</th>
                          <th className="text-center">การเงิน</th>
                          <th className="text-center">บุคคล</th>
                          <th className="text-center">ผู้ดูแลระบบ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">1</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">หน้าหลัก</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">2</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการใบสมัคร</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">3</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการข้อมูลตำแหน่ง</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">4</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการข้อมูลหน่วยงาน</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">5</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการผู้สมัคร</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">6</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการผู้ใช้งาน</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">7</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการสิทธิ์</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">8</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">
                                จัดการประเภทของบุคลากรที่สมัคร
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">9</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการการชำระเงิน</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">10</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">จัดการตรวจสอบเอกสาร</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="text-center align-middle">11</td>
                          <td className="align-middle">
                            <div>
                              <p className="m-0">ค้นหาข้อมูล</p>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31 ">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <div className="checkbox-wrapper-31">
                                <input defaultChecked type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                  <circle
                                    className="background"
                                    cx="17.8"
                                    cy="17.8"
                                    r="17.8"
                                  />
                                  <circle
                                    className="stroke"
                                    cx="17.8"
                                    cy="17.8"
                                    r="14.37"
                                  />
                                  <polyline
                                    className="check"
                                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-end py-4">
                      <button className="button_Regiser mx-1">บันทึก</button>

                      <button className="button_Back">รีเซ็ต</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <nav>
        <div className="sidebar-button">
          <span className="dashboard">จัดการสิทธิ์</span>
        </div>
      </nav>
      <div className="home-content">
        <div className="px-3 pt-3 ">
          <div
            className="shadow rounded-2"
            style={{ backgroundColor: "white" }}
          >
            <table className="table">
              <thead style={{ backgroundColor: "#eaecf4", color: "#6e707e" }}>
                <tr>
                  <th scope="col" className="text-center">
                    ลำดับ
                  </th>
                  <th scope="col" className="text-start">
                    ชื่อเมนู
                  </th>
                  <th scope="col" className="text-center">
                    ผู้บริหาร
                  </th>
                  <th scope="col" className="text-center">
                    การเงิน
                  </th>
                  <th scope="col" className="text-center">
                    บุคคล
                  </th>
                  <th scope="col" className="text-center">
                    ผู้ดูแลระบบ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-center">
                    1
                  </th>
                  <td>
                    <div className="m-0">Mark</div>
                  </td>
                  <td>
                    <div className="text-center">
                      <div className="checkbox-wrapper-31">
                        <input defaultChecked type="checkbox" />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            className="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          />
                          <circle
                            className="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          />
                          <polyline
                            className="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <div className="checkbox-wrapper-31">
                        <input defaultChecked type="checkbox" />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            className="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          />
                          <circle
                            className="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          />
                          <polyline
                            className="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <div className="checkbox-wrapper-31">
                        <input defaultChecked type="checkbox" />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            className="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          />
                          <circle
                            className="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          />
                          <polyline
                            className="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <div className="checkbox-wrapper-31">
                        <input defaultChecked type="checkbox" />
                        <svg viewBox="0 0 35.6 35.6">
                          <circle
                            className="background"
                            cx="17.8"
                            cy="17.8"
                            r="17.8"
                          />
                          <circle
                            className="stroke"
                            cx="17.8"
                            cy="17.8"
                            r="14.37"
                          />
                          <polyline
                            className="check"
                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-end px-3 py-2">
              <button
                type="button"
                className="btn btn-primary mx-1"
                style={{ backgroundColor: "#0E66AE" }}
              >
                บันทึก
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#fc544b" }}
              >
                รีเซ็ต
              </button>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default Manage_privilege;
