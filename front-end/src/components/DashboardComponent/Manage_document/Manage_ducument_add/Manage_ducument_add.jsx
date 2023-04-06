import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import DataTable from "react-data-table-component";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Manage_ducument_add.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckboxTree from "react-checkbox-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Manage_ducument_add() {
  const nodes = [
    {
      value: "mars",
      label: "อบจ. เชียงใหม่",
      children: [
        { value: "phobos", label: "สำนักการศึกษา ศาสนา และวัฒนธรรม" },
        { value: "deimos", label: "กองพัสดุ" },
      ],
    },
  ];
  const MockData = [
    {
      id: "1",
      position: "พยาบาลวิชาชีพ",
      idPosition: "1",
      countUser: "3",
    },
  ];
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
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
  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      width: "130px",
      cell: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: "ตำเเหน่ง",
      selector: (row) => row.category,
      width: "150px",
      cell: (row) => row.category,
      sortable: true,
    },
    {
      name: "รหัสประจำตำเเหน่ง",
      selector: (row) => row.brand,
      width: "auto",
      cell: (row) => row.brand,
      sortable: true,
      center: true,
    },
    {
      name: "จำนวน",
      selector: (row) => row.description,
      width: "180px",
      sortable: true,
      center: true,
    },
    {
      name: "เอกสารเเนบ",
      selector: (row) => (
        <div className="">
          <a>
            <i className="bi bi-file-earmark-pdf-fill"></i>
          </a>
        </div>
      ),
      sortable: true,
      cell: (row) => (
        <div className="">
          <a>
            <i className="bi bi-file-earmark-pdf-fill"></i>
          </a>
        </div>
      ),
      width: "auto",
      center: true,
    },

    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          {/* <NavLink to={"apply_check/" + row.id}>
            <button type="button" className="btn btn-outline-secondary">
              Secondary
            </button>
          </NavLink> */}
          <button type="button" className="btn btn-warning mx-1">
            <i class="bi bi-pencil"></i>
          </button>
          <button type="button" className="btn btn-danger mx-1">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "15%",
    },
  ];
  const GetData = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
        // $("#example").DataTable();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearch = (rows) => {
    return rows.filter((row) => {
      // if (!search) return true;
      if (
        row.id.toString().toLowerCase().indexOf(search) > -1 ||
        row.category.toLowerCase().indexOf(search) > -1 ||
        row.brand.toLowerCase().indexOf(search) > -1 ||
        row.description.toLowerCase().indexOf(search) > -1 ||
        row.discountPercentage.toString().toLowerCase().indexOf(search) > -1 ||
        row.price.toString().toLowerCase().indexOf(search) > -1
      ) {
        return true;
      }
    });
  };
  function handleBacktoPage() {
    // history.push("Member");
    navigate("/Dashboard/Document");
  }

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-12 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    เพิ่มใบสมัคร
                  </h4>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row m-0">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ประเภท
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
                  <div className="col-md-4">
                    <label
                      htmlFor="exampleInputDataStart"
                      className="form-label"
                    >
                      วันที่เริ่ม
                    </label>
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      showIcon
                      showYearDropdown
                      showMonthDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={50}
                      locale={locale}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">วันที่สิ้นสุด</label>
                    <DatePicker
                      className="form-control"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
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
                <div className="py-3 px-3">
                  <div className="d-flex justify-content-between">
                    <div className="my-auto">
                      <h5 className="m-0">รายการตำแหน่งที่เปิดรับสมัคร</h5>
                    </div>
                    <div>
                      {/* <button
                        type="button"
                        className="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        เพิ่มใบสมัคร
                      </button> */}
                      <button
                        className="Btn_Add_user"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        เพิ่มใบสมัคร
                      </button>
                      <div
                        className="modal fade modal-lg"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                เพิ่มตำแหน่ง
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-md-12">
                                  <ul className="nav nav-tabs mb-3">
                                    <li className="nav-item">
                                      <a
                                        className="nav-link active"
                                        id="nav-tab1"
                                        data-bs-toggle="tab"
                                        href="#tab1-content"
                                        data-bs-target="#tab1-content"
                                        role="tab"
                                        aria-controls="tab1-content"
                                        aria-selected="false"
                                      >
                                        หน้าหลัก
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        id="nav-tab2"
                                        data-bs-toggle="tab"
                                        href="#tab2-content"
                                        data-bs-target="#tab2-content"
                                        role="tab"
                                        aria-controls="tab2-content"
                                        aria-selected="false"
                                      >
                                        หน่วยงาน
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="tab-content" id="nav-tabs-content">
                                <div
                                  className="tab-pane active"
                                  id="tab1-content"
                                  role="tabpanel"
                                  aria-labelledby="nav-tab1"
                                >
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInput"
                                              className="form-label"
                                            >
                                              ตำแหน่ง
                                            </label>
                                            <select
                                              className="form-select"
                                              aria-label="Default select example"
                                            >
                                              <option>เลือก</option>
                                              <option value={1}>One</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInputEmail1"
                                              className="form-label"
                                            >
                                              จำนวน
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputEmail1"
                                              aria-describedby="emailHelp"
                                              placeholder="จำนวน"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInput"
                                              className="form-label"
                                            >
                                              ค่าสมัคร
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputEmail1"
                                              aria-describedby="emailHelp"
                                              placeholder="ค่าสมัคร"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInput"
                                              className="form-label"
                                            >
                                              รหัสประจำตำแหน่ง
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="รหัสประจำตำแหน่ง"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInput"
                                              className="form-label"
                                            >
                                              เอกสารไฟล์แนบ
                                            </label>
                                            <input
                                              class="form-control"
                                              type="file"
                                              id="formFile"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 border-start">
                                      <div class="row">
                                        <div className="col-md-6">
                                          เอกสารที่ต้องแนบ
                                        </div>
                                        <div className="col-md-6">
                                          <div>
                                            <div className="text-end">
                                              <input
                                                className="form-check-input mx-2"
                                                type="checkbox"
                                                defaultValue
                                                id="flexCheckDefault"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefault"
                                              >
                                                เลือกทั้งหมด
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault1"
                                            >
                                              รูปถ่าย
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault2"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault2"
                                            >
                                              สำเนาทะเบียนบ้าน
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault3"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault3"
                                            >
                                              สำเนาบัตรประจำตัวประชาชน
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault4"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault4"
                                            >
                                              ใบรับรองแพทย์
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault5"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault5"
                                            >
                                              สำเนาหลักฐานเกี่ยวกับการเกณฑ์ทหาร
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault6"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault6"
                                            >
                                              สำเนาใบอนุญาตขับรถยนต์
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault7"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault7"
                                            >
                                              สำเนาเอกสารหลักฐานอื่นๆ
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="py-2">
                                            <input
                                              className="form-check-input mx-2"
                                              type="checkbox"
                                              defaultValue
                                              id="flexCheckDefault8"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexCheckDefault8"
                                            >
                                              สำเนาวุติการศึกษา
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane"
                                  id="tab2-content"
                                  role="tabpanel"
                                  aria-labelledby="nav-tab2"
                                >
                                  <div>
                                    <CheckboxTree
                                      nodes={nodes}
                                      checked={checked}
                                      expanded={expanded}
                                      onCheck={(checked) => setChecked(checked)}
                                      onExpand={(expanded) =>
                                        setExpanded(expanded)
                                      }
                                      icons={{
                                        check: (
                                          <i class="bi bi-check-square"></i>
                                        ),
                                        uncheck: <i class="bi bi-square"></i>,
                                        halfCheck: <i class="bi bi-square"></i>,
                                        collapseAll: <i class="bi bi-dot"></i>,
                                        leaf: "",
                                        expandOpen: <i class="bi bi-dot"></i>,
                                        expandClose: <i class="bi bi-dot"></i>,
                                        collapseAll: <i class="bi bi-dot"></i>,
                                        parentClose: "",
                                        parentOpen: "",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data={handleSearch(data)}
                      pagination
                      responsive
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="float-end py-1">
                      <button className="button_Regiser mx-1">บันทึก</button>
                      <NavLink to="/Dashboard/Document/">
                        <button className="button_Back mx-1">ย้อนกลับ</button>
                      </NavLink>
                      {/* <button type="button" className="btn btn-primary mx-1">
                        บันทึก
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        onClick={() => {
                          handleBacktoPage();
                        }}
                      >
                        ย้อนกลับ
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage_ducument_add;
