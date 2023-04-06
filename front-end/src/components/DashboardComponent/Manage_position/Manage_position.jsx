import React, { useEffect, useState, useRef } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_position.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  GetAllPosition,
  Add_edit_position,
  Delete_position,
} from "../../../service/api";
import { Tooltip } from "bootstrap";
function Manage_position() {
  // var tooltipTriggerList = [].slice.call(
  //   document.querySelectorAll("[data-bs-toggle=modal]")
  // );
  // var tooltipTriggerList1 = [].slice.call(
  //   document.querySelectorAll("[data-bs-toggle=tooltip]")
  // );
  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new Tooltip(tooltipTriggerEl);
  // });
  // var tooltipList1 = tooltipTriggerList1.map(function (tooltipTriggerEl) {
  //   return new Tooltip(tooltipTriggerEl);
  // });
  const mockData = [
    {
      id: "1",
      type: "พนักงานราชการ",
      positionType: "เจ้าหน้าที่",
      status: "ใช้งาน",
    },
    {
      id: "2",
      type: "พนักงานราชการ",
      positionType: "เจ้าหน้าที่การเงิน",
      status: "ไม่ใช้งาน",
    },
    {
      id: "2",
      type: "พนักงานราชการ",
      positionType: "การเงิน",
      status: "ไม่ใช้งาน",
    },
    {
      id: "2",
      type: "พนักงานราชการ",
      positionType: "เจ้าหน้าที่",
      status: "ไม่ใช้งาน",
    },
    {
      id: "3",
      type: "พนักงานราชการ",
      positionType: "เจ้าหน้าที่",
      status: "ใช้งาน",
    },
    {
      id: "4",
      type: "พนักงานราชการ",
      positionType: "เจ้าหน้าที่",
      status: "ใช้งาน",
    },
  ];
  const columns = [
    {
      name: "ลำดับ",
      selector: (row, index) => row.id,
      width: "20%",
      cell: (row, index) => index + 1,
      sortable: true,
      center: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.type,
      width: "20%",
      cell: (row) => row.type,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.positionType,
      width: "20%",
      cell: (row) => row.positionType,
      sortable: true,
      center: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => row.status,
      width: "20%",
      // cell: (row) => (row.status ? <div>ใช้งาน</div> : "-"),
      cell: (row) => row.status,
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
            data-bs-toggle="modal"
            title="เเก้ไขข้อมูล"
            data-bs-placement="left"
            data-bs-target={"#exampleModal" + row.p_id}
          >
            <i class="bi bi-pencil"></i>
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
                <form
                  onSubmit={(e) => {
                    haddleEditSubmit(e, row.p_id);
                  }}
                >
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
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          defaultValue={row.p_name}
                          required
                          onChange={(e) => {
                            setE_NamePosition(e.target.value);
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
                          defaultValue={row.p_type}
                          required
                          onChange={(e) => {
                            setE_TypePosition(e.target.value);
                          }}
                        >
                          <option value={""}>เลือก</option>
                          {positionType.map((val, idx) => {
                            return (
                              <option key={idx} value={val.id}>
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
                          required
                          onChange={(e) => {
                            setE_StatusPosition(e.target.value);
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
                          className="form-control"
                          type="file"
                          required
                          accept="application/pdf"
                          onChange={(e) => {
                            setE_FilePdf(e.target.files[0]);
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
                      ยกเลิก
                    </button>
                    <button type="submit" className="btn btn-primary">
                      บันทึก
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger mx-1"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="ลบข้อมูล"
            onClick={() => {
              DeleteMember(row.p_id);
            }}
          >
            <i className="bi bi-trash" style={{ color: "white" }}></i>
          </button>
        </div>
      ),
      width: "20%",
    },
  ];

  const getDataPosition = async () => {
    const data = await GetAllPosition();
    setPositionData(data.data);
    // console.log(data.data);
  };

  const [postionData, setPositionData] = useState([]);
  const [search, setSearch] = useState("");
  const [positionType, SetpositionType] = useState([]);

  // เพิ่มใบสมัคร
  const [namePosition, setNamePosition] = useState("");
  const [typePosition, setTypePosition] = useState("");
  const [statusPosition, setStatusPosition] = useState("1");
  const [filePdf, setFilePdf] = useState();
  const ref = useRef();
  // เเก้ไข
  const [E_namePosition, setE_NamePosition] = useState();
  const [E_typePosition, setE_TypePosition] = useState("");
  const [E_statusPosition, setE_StatusPosition] = useState("");
  const [E_filePdf, setE_FilePdf] = useState();

  // modal dialog
  const [showModal, SetShowmodal] = useState(false);

  // const AddPosition = (id = "") => {
  //   const formData = new FormData();

  //   formData.append("file", filePdf);
  //   formData.append("p_name", namePosition);
  //   formData.append("p_id", id);
  //   formData.append("p_type", typePosition);
  //   formData.append("p_active", statusPosition);
  //   Add_edit_position(formData);
  //   Swal.fire({
  //     icon: "success",
  //     text: "ได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
  //   }).then(() => {
  //     setNamePosition("");
  //     setTypePosition("");
  //     setStatusPosition("1");
  //     setFilePdf("");
  //     ref.current.value = "";
  //   });
  // };
  const haddleEditSubmit = (event, id) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(E_namePosition);
    formData.append("file", E_filePdf);
    formData.append("p_name", E_namePosition);
    formData.append("p_id", id);
    formData.append("p_type", E_typePosition);
    formData.append("p_active", E_statusPosition);
    Add_edit_position(formData);
    setE_NamePosition("");
    setE_TypePosition("");
    setE_StatusPosition("");
    setE_FilePdf("");
    getDataPosition();
  };

  const handleSubmit = (event, id = "") => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", filePdf);
    formData.append("p_name", namePosition);
    formData.append("p_id", id);
    formData.append("p_type", typePosition);
    formData.append("p_active", statusPosition);
    Add_edit_position(formData);
    Swal.fire({
      icon: "success",
      text: "ได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
    }).then(() => {
      setNamePosition("");
      setTypePosition("");
      setStatusPosition("1");
      setFilePdf("");
      ref.current.value = "";
    });
    getDataPosition();
  };
  const DeleteMember = (id) => {
    Swal.fire({
      title: "ยืนยันการลบข้อมูล?",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Delete_position(id);
        Swal.fire({
          icon: "success",
          title: "ลบข้อมูลเรียบร้อย!",
        });
        getDataPosition();
      }
    });
  };

  // const editPosition = (event, id) => {
  //   event.preventdefault();
  //   const formData = new FormData();
  //   console.log(E_namePosition);
  //   formData.append("file", E_filePdf);
  //   formData.append("p_name", E_namePosition);
  //   formData.append("p_id", id);
  //   formData.append("p_type", E_typePosition);
  //   formData.append("p_active", E_statusPosition);
  //   Add_edit_position(formData);
  //   setE_NamePosition("");
  //   setE_TypePosition("");
  //   setE_StatusPosition("");
  //   setE_FilePdf("");
  // };

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
    // const [E_namePosition, setE_NamePosition] = useState("");
    // const [E_typePosition, setE_TypePosition] = useState("");
    // const [E_statusPosition, setE_StatusPosition] = useState("");
    // const [E_filePdf, setE_FilePdf] = useState();
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
                    {/* <button
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
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <form
                        onSubmit={handleSubmit}
                        // encType="multipart/form-data"
                      >
                        <div className="modal-dialog modal-lg">
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
                                    value={namePosition}
                                    required
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
                                    value={typePosition}
                                    required
                                    onChange={(e) => {
                                      setTypePosition(e.target.value);
                                    }}
                                  >
                                    <option value={""}>เลือก</option>
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
                                    value={statusPosition}
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
                                    className="form-control"
                                    type="file"
                                    accept="application/pdf"
                                    ref={ref}
                                    required
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
                                ยกเลิก
                              </button>
                              <button type="submit" className="btn btn-primary">
                                บันทึกข้อมูล
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
                  {/* <div className="col-md-12 my-auto">
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
                  </div> */}
                  <div className="col-md-12">
                    <div className="input-wrapper px-3 py-1 w-100 float-end">
                      <button className="icon">
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
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      // data={handleSearch(postionData)}
                      data={mockData}
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
