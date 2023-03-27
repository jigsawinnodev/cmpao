import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_position.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GetAllPosition, Add_edit_position } from "../../../service/api";
function Manage_position() {
  const columns = [
    {
      name: "ลำดับ",
      selector: (row, index) => index + 1,
      width: "20%",
      cell: (row, index) => index + 1,
      sortable: true,
      center: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.name,
      width: "20%",
      cell: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.p_name,
      width: "20%",
      cell: (row) => row.p_name,
      sortable: true,
      center: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => row.p_active,
      width: "20%",
      cell: (row) => (row.p_active ? <div>ใช้งาน</div> : "-"),
      sortable: true,
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => row.p_id,
      sortable: true,
      cell: (row) => (
        <div>
          <button
            type="button"
            className="btn btn-warning mx-1"
            // onClick={() => EditPosition(row.id)}
            data-bs-toggle="modal"
            data-bs-target={"#exampleModal" + row.p_id}
          >
            <i className="bi bi-pencil-fill" style={{ color: "white" }}></i>
          </button>
          <div
            className="modal fade"
            id={"exampleModal" + row.p_id}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    แก้ไขตำแหน่ง
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div>
                    <div className="py-2 text-start">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ชื่อตำแหน่ง
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        defaultValue={row.p_name ? row.p_name : ""}
                      />
                    </div>
                    <div className="text-start py-2">
                      <label
                        htmlFor="exampleInputSelect"
                        className="form-label"
                      >
                        ประเภท
                      </label>
                      <select className="form-select" defaultValue={row.name}>
                        <option value="">เลือก</option>
                        {positionType.map((val, idx) => {
                          return (
                            <option key={idx} value={val.name}>
                              {val.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="text-start py-2">
                      <label
                        htmlFor="exampleInputSelect"
                        className="form-label"
                      >
                        สถานะ
                      </label>
                      <select
                        className="form-select"
                        defaultValue={row.p_active}
                      >
                        <option value={1}>ใช้งาน</option>
                        <option value={0}>ไม่ใช้งาน</option>
                      </select>
                    </div>
                    <div className="text-start py-2">
                      <label
                        htmlFor="exampleInputSelect"
                        className="form-label"
                      >
                        เเนบไฟล์
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      EditPosition(row.p_id);
                    }}
                  >
                    บันทึก
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={() => {
              DeletePosition(row.p_id);
            }}
          >
            <i className="bi bi-trash-fill" style={{ color: "white" }}></i>
          </button>
        </div>
      ),
      width: "20%",
    },
  ];

  const getDataPosition = async () => {
    const data = await GetAllPosition();
    setPositionData(data.data);
  };

  const [postionData, setPositionData] = useState([]);
  const [search, setSearch] = useState("");
  const [positionType, SetpositionType] = useState([]);

  // เพิ่มใบสมัคร
  const [namePosition, setNamePosition] = useState("");
  const [typePosition, setTypePosition] = useState("");
  const [statusPosition, setStatusPosition] = useState("1");
  const [filePdf, setFilePdf] = useState([]);

  const AddorEditPosition = (id = "") => {
    Add_edit_position(id, namePosition, typePosition, statusPosition, filePdf);
  };

  const GetType_Position = () => {
    axios
      .get("http://localhost:9500/api/GetType_position")
      .then((res) => {
        SetpositionType(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handleSearch = (rows) => {
    // console.log(rows);
    return rows.filter((row) => {
      if (
        row.name.toString().indexOf(search) > -1 ||
        row.p_name.toString().indexOf(search) > -1 ||
        row.p_active.toString().indexOf(search) > -1
      ) {
        return true;
      }
    });
  };

  useEffect(() => {
    getDataPosition();
    // GetData();
    GetType_Position();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-2">
              <div className="row w-100 my-auto">
                <div className="col-md-7">
                  <div className="text-end">
                    <h2 className="dashboard m-0" style={{ color: "#655DBB" }}>
                      จัดการข้อมูลตำเเหน่ง
                    </h2>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="float-end">
                    <button
                      className="btn btn-outline-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      เพิ่มใบสมัคร
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
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
                            <div>
                              <div className="py-2 text-start">
                                <label
                                  htmlFor="exampleInputEmail1"
                                  className="form-label"
                                >
                                  ชื่อตำแหน่ง
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={namePosition}
                                  onChange={(e) => {
                                    setNamePosition(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="text-start py-2">
                                <label
                                  htmlFor="exampleInputSelect"
                                  className="form-label"
                                >
                                  ประเภท
                                </label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  defaultValue={typePosition}
                                  onChange={(e) => {
                                    setTypePosition(e.target.value);
                                  }}
                                >
                                  <option>เลือก</option>
                                  {positionType.map((val, idx) => (
                                    <option key={idx} value={val.id}>
                                      {val.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="text-start py-2">
                                <label
                                  htmlFor="exampleInputSelect"
                                  className="form-label"
                                >
                                  สถานะ
                                </label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  defaultValue={statusPosition}
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                    setStatusPosition(e.target.value);
                                  }}
                                >
                                  <option value={"1"}>ใช้งาน</option>
                                  <option value={"0"}>ไม่ใช้งาน</option>
                                </select>
                              </div>
                              <div className="text-start py-2">
                                <label
                                  htmlFor="exampleInputSelect"
                                  className="form-label"
                                >
                                  เเนบไฟล์
                                </label>
                                <input
                                  multiple
                                  className="form-control"
                                  type="file"
                                  id="formFile"
                                  accept="application/pdf"
                                  onChange={(e) => {
                                    setFilePdf(e.target.files[0]);
                                  }}
                                />
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
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                AddorEditPosition();
                              }}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12 my-auto">
                    <div className="float-end py-1">
                      <div className="input-wrapper my-auto">
                        <button className="iconAddregister">
                          <i
                            className="bi bi-search"
                            style={{ color: "white" }}
                          ></i>
                        </button>
                        <input
                          placeholder="ค้นหา"
                          className="input"
                          name="text"
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data={handleSearch(postionData)}
                      pagination
                      responsive
                    />
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

export default Manage_position;
