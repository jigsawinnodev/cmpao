import React, { useEffect, useState, useRef, useCallback } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_position.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  GetAllPosition,
  Add_edit_position,
  Delete_position,
  GetFilePositionsById,
  GetType_position,
} from "../../../service/api";
import Dropzone from "react-dropzone";
var token = localStorage.getItem("token");
function Manage_position() {
  // modal

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
  //   accept: "pdf",
  //   multiple: false,
  //   onDrop: (acceptedFiles) => {
  //     console.log(acceptedFiles);
  //   },
  // });
  const DeleteStateArrayFile = (e, id) => {
    e.preventDefault();
    setE_FilePdf((preventState) => {
      return preventState.filter((e) => e.id != id);
    });
  };
  const DeleteStateArrayFileEdit = (e, id) => {
    e.preventDefault();
    setE_FilePdf((preventState) => {
      return preventState.filter((e) => e.fp_id != id);
    });
  };

  const [show, setShow] = useState(false);
  const [ShowModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const handleClose = () => {
    setE_id("");
    setE_p_name("");
    setE_type("");
    setE_status("");
    setE_FilePdf([]);
    ShowModalEdit(false);
    setShow(false);
  };
  const handleCloseModalAdd = () => setShowModalAdd(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  // เเก้ไข
  const [E_p_name, setE_p_name] = useState(""); //ชื่อตำเเหน่ง
  const [E_id, setE_id] = useState(""); // id
  const [E_type, setE_type] = useState("");
  const [E_status, setE_status] = useState("");
  const [E_filePdf, setE_FilePdf] = useState([]);
  const [images, setImages] = useState([]);
  const E_inputFile = useRef(null);

  const SetDataForEdit = async (data) => {
    let res = await GetFilePositionsById(data.p_id, token);
    setE_id(data.p_id);
    setE_p_name(data.p_name);
    setE_type(data.p_type);
    setE_status(data.p_active);
    setE_FilePdf(res);
    setShowModalEdit(true);
  };

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
      // center: true,
    },
    {
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.p_name,
      width: "20%",
      cell: (row) => row.p_name,
      sortable: true,
      // center: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => row.p_active,
      width: "20%",
      cell: (row) => {
        if (row.p_active == "1") {
          return (
            <div className="fw-bold" style={{ color: "green" }}>
              ใช้งาน
            </div>
          );
        } else {
          return (
            <div className="fw-bold" style={{ color: "red" }}>
              ไม่ใช้งาน
            </div>
          );
        }
      },
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
            title="เเก้ไขข้อมูล"
            onClick={() => SetDataForEdit(row)}
          >
            <i className="bi bi-pencil"></i>
          </button>

          <Modal show={ShowModalEdit} size="lg" onHide={handleCloseModalEdit}>
            <form
              onSubmit={(e) => {
                haddleEditSubmit(e);
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>แก้ไขตำแหน่ง</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="hidden" value={E_id} />
                <div>
                  <div className="py-2 text-start">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      ชื่อตำแหน่ง
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      defaultValue={E_p_name}
                      required
                      onChange={(e) => {
                        setE_p_name(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-start py-2">
                    <label htmlFor="exampleInputSelect" className="form-label">
                      ประเภท
                    </label>
                    <select
                      className="form-select"
                      value={E_type}
                      required
                      onChange={(e) => {
                        setE_type(e.target.value);
                      }}
                    >
                      <option>เลือก</option>
                      {positionType.map((val, idx) => {
                        // console.log(val);
                        return (
                          <option key={idx} value={val.id}>
                            {val.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="text-start py-2">
                    <label htmlFor="exampleInputSelect" className="form-label">
                      สถานะ
                    </label>
                    <select
                      className="form-select"
                      value={E_status}
                      required
                      onChange={(e) => {
                        setE_status(e.target.value);
                      }}
                    >
                      <option value={1}>ใช้งาน</option>
                      <option value={0}>ไม่ใช้งาน</option>
                    </select>
                  </div>
                  <div className="text-start py-2">
                    <label htmlFor="exampleInputSelect" className="form-label ">
                      เเนบไฟล์
                    </label>
                    <Dropzone
                      className=""
                      onDrop={(acceptedFiles) => {
                        setE_FilePdf([
                          ...E_filePdf,
                          {
                            id: Date.now().toString(),
                            file: acceptedFiles[0],
                          },
                        ]);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>

                    <div>
                      <label>ไฟล์</label>

                      {E_filePdf.map((value, idx) => {
                        console.log(value);
                        let BaseUrl = "http://localhost:9500/public/pdf/";
                        return (
                          <div
                            className="d-flex justify-content-between my-1 px-4"
                            key={idx}
                          >
                            <a
                              className="my-auto text-decoration-none text-dark"
                              target="_blank"
                              href={BaseUrl + value.fp_name}
                            >
                              <div className="d-flex">
                                {idx + 1 + "."}
                                {value.fp_name ? (
                                  <div className="mx-2">{value.fp_name}</div>
                                ) : (
                                  <div className="mx-2">{value.file.name}</div>
                                )}
                              </div>
                            </a>
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={(e) => {
                                DeleteStateArrayFileEdit(e, value.fp_id);
                              }}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="col-md-12 text-center">
                  <Button type="submit" className="button_Add_Regiser mx-1">
                    บันทึก
                  </Button>
                  <Button
                    className="button_Back mx-1"
                    onClick={handleCloseModalEdit}
                  >
                    ยกเลิก
                  </Button>
                </div>
              </Modal.Footer>
            </form>
          </Modal>
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
    const data = await GetAllPosition(token);
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
  const ref = useRef();
  // modal dialog

  const haddleEditSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let index = 0; index < E_filePdf.length; index++) {
      if (E_filePdf[index].file) {
        formData.append("file", E_filePdf[index].file);
      } else {
        formData.append("file", E_filePdf[index].fp_name);
      }
    }
    formData.append("p_name", E_p_name);
    formData.append("p_id", E_id);
    formData.append("p_type", E_type);
    formData.append("p_active", E_status);
    let res = Add_edit_position(formData, token);
    setShowModalEdit(false);
    Swal.fire({
      icon: "success",
      title: "เเก้ไขข้อมูลสำเร็จ",
      timer: 1500,
    }).then(() => {
      setE_p_name("");
      setE_id("");
      setE_type("");
      setE_status("");
      setE_FilePdf([]);
      getDataPosition();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let index = 0; index < filePdf.length; index++) {
      formData.append("file", filePdf[index].file);
    }
    formData.append("p_name", namePosition);
    formData.append("p_type", typePosition);
    formData.append("p_active", statusPosition);
    Add_edit_position(formData, token);
    setShowModalAdd(false);
    Swal.fire({
      icon: "success",
      text: "ได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
    }).then(() => {
      setNamePosition("");
      setTypePosition("");
      setStatusPosition("1");
      setFilePdf([]);
      getDataPosition();
    });
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
        Delete_position(id, token);
        Swal.fire({
          icon: "success",
          title: "ลบข้อมูลเรียบร้อย!",
        });
        getDataPosition();
      }
    });
  };

  const GetType_Position = async () => {
    let resData = await GetType_position(token);
    SetpositionType(resData);
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
    // console.log(E_filePdf);
    GetType_Position();
  }, []);
  return (
    <>
      {/* {JSON.stringify(E_filePdf)} */}
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="d-flex justify-content-between pt-3">
              <div className="my-auto">
                <div className="px-3 py-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการข้อมูลตำเเหน่ง
                  </h4>
                </div>
              </div>
              <div className="float-end px-3 my-auto">
                <button
                  className="Btn_Add_user"
                  // data-bs-toggle="modal"
                  // data-bs-target="#exampleModal"
                  onClick={() => {
                    setShowModalAdd(true);
                  }}
                >
                  เพิ่มใบสมัคร
                </button>
                <Modal
                  show={showModalAdd}
                  size="lg"
                  onHide={handleCloseModalAdd}
                >
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>เพิ่มตำแหน่ง</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input type="hidden" value={E_id} />
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
                            defaultValue={namePosition}
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
                            <option>เลือก</option>
                            {positionType.map((val, idx) => {
                              // console.log(val);
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
                            value={statusPosition}
                            required
                            onChange={(e) => {
                              setStatusPosition(e.target.value);
                            }}
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

                          <Dropzone
                            onDrop={(acceptedFiles) => {
                              // console.log(acceptedFiles);
                              setFilePdf([
                                ...filePdf,
                                {
                                  id: Date.now().toString(),
                                  file: acceptedFiles[0],
                                },
                              ]);
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <section>
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <p>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </p>
                                </div>
                              </section>
                            )}
                          </Dropzone>
                          <aside>
                            <h4>ไฟล์</h4>
                            <ul>
                              {filePdf.map((value, idx) => {
                                console.log(value);
                                return (
                                  <div
                                    className="d-flex justify-content-between my-1 px-4"
                                    key={idx}
                                  >
                                    <a
                                      className="my-auto text-decoration-none text-dark"
                                      target="_blank"
                                      // href={value.file[0].name}
                                    >
                                      <div className="d-flex">
                                        {idx + 1 + "."}
                                        <div className="mx-2">
                                          {value.file.name}
                                        </div>
                                      </div>
                                    </a>
                                    <button
                                      className="btn btn-danger"
                                      onClick={(e) => {
                                        DeleteStateArrayFile(e, value.id);
                                      }}
                                    >
                                      <i className="bi bi-trash"></i>
                                    </button>
                                  </div>
                                );
                              })}
                            </ul>
                          </aside>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <div className="col-md-12 text-center">
                        <Button
                          type="submit"
                          className="button_Add_Regiser mx-1"
                        >
                          บันทึก
                        </Button>
                        <Button
                          className="button_Back mx-1"
                          onClick={handleCloseModalAdd}
                        >
                          ยกเลิก
                        </Button>
                      </div>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
            </div>
          </nav>

          <div className="">
            <div className="px-3">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-wrapper py-1 w-100 float-end">
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
                      data={handleSearch(postionData)}
                      // data={mockData}
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
