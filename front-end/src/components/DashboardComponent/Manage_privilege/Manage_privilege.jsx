import React from "react";
import "./Manage_privilege.css";
function Manage_privilege() {
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-2">
              <div>
                <h3 className="dashboard">จัดการสิทธิ์</h3>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12 px-3">
                    <table className="table">
                      <thead
                        style={{ backgroundColor: "#eaecf4", color: "#6e707e" }}
                      >
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
