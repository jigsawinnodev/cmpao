import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
import { createContext } from "react";
import {
  GetType_position,
  Insert_position,
  Delete_type_position,
} from "../../../service/api";
import ModalAlert from "./component/ModalAlert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NameContext = createContext();
var token = localStorage.getItem("token");
function Manage_typeUserRegister() {
  const [DataTypePosition, setDataTypePosition] = useState([]);
  const [Edit_name, setEdit_name] = useState("");
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [DataForm, setDataForm] = useState({
    id: "",
    name: "",
  });

  const handleFormEdit = (e) => {
    e.preventDefault();
    Insert_position(
      {
        name: DataForm.name,
        id: DataForm.id,
      },
      token
    );
    setShow(false);
    setShowInsert(false);
    setDataForm({
      id: "",
      name: "",
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setDataForm({
      name: data.name,
      id: data.id,
    });
    setShow(true);
  };
  const columns = [
    {
      name: "ลำดับ",
      selector: (row, index) => index + 1,
      width: "10%",
      cell: (row, index) => index + 1,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.name,
      width: "40%",
      cell: (row) => row.name,
      sortable: true,
    },

    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <button
            type="button"
            className="btn btn-warning mx-1"
            onClick={() => {
              handleShow(row);
            }}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={() => {
              DeleteTypePosition(row.id);
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
          <Modal show={show} onHide={handleClose} size="lg">
            <form onSubmit={handleFormEdit}>
              <Modal.Header closeButton>
                <Modal.Title>แก้ไขตำแหน่ง</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="hidden" value={DataForm.id} />
                <div>
                  <div className="mb-3 text-start">
                    <label className="form-label">ชื่อตำแหน่ง</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInSert"
                      aria-describedby="emailHelp"
                      placeholder="ชื่อตำแหน่ง"
                      required
                      value={DataForm.name}
                      onChange={(e) => {
                        setDataForm({
                          ...DataForm,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="row w-100">
                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className="button_Add_Regiser mx-1 py-2"
                    >
                      Save Changes
                    </button>
                    <button
                      variant="secondary"
                      className="button_Back mx-1"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      ),
      sortable: true,
      width: "50%",
    },
  ];

  const GetData = async () => {
    let response = await GetType_position(token);
    setDataTypePosition(response);
  };
  const [showInsert, setShowInsert] = useState(false);

  const handleCloseInsert = () => setShowInsert(false);
  const handleShowInsert = () => setShowInsert(true);

  const DeleteTypePosition = (id) => {
    // console.log(id);
    Swal.fire({
      title: "ยืนยันการลบข้อมูล?",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ยืนยัน",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Delete_type_position(id, token);
        GetData();
      }
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

  useEffect(() => {
    GetData();
  }, [DataTypePosition]);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการประเภทของบุคลากรที่สมัคร
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  <button className="Btn_Add_user" onClick={handleShowInsert}>
                    เพิ่มใบสมัคร
                  </button>
                  <Modal show={showInsert} onHide={handleCloseInsert} size="lg">
                    <form onSubmit={handleFormEdit}>
                      <Modal.Header closeButton>
                        <Modal.Title>แก้ไขตำแหน่ง</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <input type="hidden" value={DataForm.id} />
                        <div>
                          <div className="mb-3 text-start">
                            <label className="form-label">ชื่อตำแหน่ง</label>
                            <input
                              type="text"
                              className="form-control"
                              id="nameInSert"
                              aria-describedby="emailHelp"
                              placeholder="ชื่อตำแหน่ง"
                              required
                              value={DataForm.name}
                              onChange={(e) => {
                                setDataForm({
                                  ...DataForm,
                                  name: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <div className="row w-100">
                          <div className="col-md-12 text-center ">
                            <button
                              type="submit"
                              className="button_Add_Regiser mx-1 py-2"
                            >
                              Save Changes
                            </button>
                            <button
                              type="button"
                              variant="secondary"
                              className="button_Back mx-1"
                              onClick={handleCloseInsert}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </Modal.Footer>
                    </form>
                  </Modal>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-wrapper  py-1 w-100 float-end">
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
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data={handleSearch(DataTypePosition)}
                      // data={morkData}
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

export default Manage_typeUserRegister;
