import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { GetOrganizationAll } from "../../../service/api";
import { left } from "@popperjs/core";
import { green } from "@mui/material/colors";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InsertAndEditTree, Delete_TreeOrg } from "../../../service/api";
import Swal from "sweetalert2";
var token = localStorage.getItem("token");
function Manage_agency() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    console.log(data);
    SetDataForm({
      ...DataForm,
      org_parent: data.org_id,
      org_NameFather: data.org_name,
    });
    setShow(true);
  };
  const [orgData, setOrgData] = useState({});
  const GetOrgani = async () => {
    let res = await GetOrganizationAll(token);
    setOrgData(res);
  };
  function renderChildren(children) {
    return Object.keys(children).map((childId, idx1) => {
      // let CheckChild = Object.keys(children[childId].children).length;
      return (
        <>
          <tr key={idx1}>
            <td style={{ paddingLeft: "20px" }}>
              {children[childId].data.org_name}
            </td>
            <td>
              {children[childId].data.org_active == 1 ? (
                <p className="m-0" style={{ color: "#54B435" }}>
                  ใช้งาน
                </p>
              ) : (
                <p className="m-0" style={{ color: "#D21312" }}>
                  ไม่ใช่งาน
                </p>
              )}
            </td>
            <td>
              <Button
                variant="success"
                className=""
                onClick={() => {
                  handleShow(children[childId].data);
                }}
              >
                <i className="bi bi-person-plus-fill"></i>
              </Button>
              <button
                className="btn btn-danger mx-1 "
                onClick={() => {
                  DeleteTreeOne(children[childId].data.org_id);
                }}
              >
                <i className="bi bi-person-fill-x"></i>
              </button>
              <button
                className="btn btn-warning "
                onClick={() => {
                  EditTree(children[childId].data);
                }}
              >
                <i className="bi bi-person-fill-gear"></i>
              </button>
            </td>
          </tr>
          {renderChildre2(children[childId].children)}
        </>
      );
    });
  }
  function renderChildre2(children) {
    return Object.keys(children).map((childId, idx1) => {
      return (
        <>
          <tr key={idx1}>
            <td style={{ paddingLeft: "40px" }}>
              {children[childId].data.org_name}
            </td>
            <td>
              {children[childId].data.org_active == 1 ? (
                <p className="m-0" style={{ color: "#54B435" }}>
                  ใช้งาน
                </p>
              ) : (
                <p className="m-0" style={{ color: "#D21312" }}>
                  ไม่ใช่งาน
                </p>
              )}
            </td>
            <td>
              <Button
                variant="success"
                onClick={() => {
                  handleShow(children[childId].data);
                }}
              >
                <i className="bi bi-person-plus-fill"></i>
              </Button>{" "}
              <button
                className="btn btn-danger "
                onClick={() => {
                  DeleteTreeOne(children[childId].data.org_id);
                }}
              >
                <i className="bi bi-person-fill-x"></i>
              </button>
              <button
                className="btn btn-warning mx-1"
                onClick={() => {
                  EditTree(children[childId].data);
                }}
              >
                <i class="bi bi-person-fill-gear"></i>
              </button>
            </td>
          </tr>
          {renderChildre3(children[childId].children)}
        </>
      );
    });
  }
  function renderChildre3(children) {
    return Object.keys(children).map((childId, idx1) => {
      return (
        <>
          <tr key={idx1}>
            <td style={{ paddingLeft: "65px" }}>
              {children[childId].data.org_name}
            </td>
            <td>
              {children[childId].data.org_active == 1 ? (
                <p className="m-0" style={{ color: "#54B435" }}>
                  ใช้งาน
                </p>
              ) : (
                <p className="m-0" style={{ color: "#D21312" }}>
                  ไม่ใช่งาน
                </p>
              )}
            </td>
            <td>
              <Button
                variant="success"
                onClick={() => {
                  handleShow(children[childId].data);
                }}
              >
                <i className="bi bi-person-plus-fill"></i>
              </Button>
              <button
                className="btn btn-danger mx-1"
                onClick={() => {
                  DeleteTreeOne(children[childId].data.org_id);
                }}
              >
                <i className="bi bi-person-fill-x"></i>
              </button>
              <button
                className="btn btn-warning "
                onClick={() => {
                  EditTree(children[childId].data);
                }}
              >
                <i class="bi bi-person-fill-gear"></i>
              </button>
            </td>
          </tr>
          {renderChildren(children[childId].children)}
        </>
      );
    });
  }
  const InsertOrg = async (e) => {
    e.preventDefault();
    let res = await InsertAndEditTree(DataForm, token);
    if (res == "success") {
      setShow(false);
      SetDataForm({
        org_id: "",
        org_name: "",
        org_active: 1,
        org_parent: "",
        org_NameFather: "",
      });
      Swal.fire({
        icon: "success",
        title: "เพิ่มหน่วยงานสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        GetOrgani(token);
      });
    } else {
      setShow(false);
      SetDataForm({
        org_id: "",
        org_name: "",
        org_active: 1,
        org_parent: "",
        org_NameFather: "",
      });
      Swal.fire({
        icon: "success",
        title: "เเก้ไขหน่วยงานสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        GetOrgani(token);
      });
    }
  };
  const DeleteTreeOne = async (id) => {
    Swal.fire({
      title: "ยืนยันที่จะลบข้อมูล",
      // text: "ถ้าหากกดยืนยันจะไม่สามารถกู้คืนได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await Delete_TreeOrg(id, token);
        if (res == "success") {
          Swal.fire({
            icon: "success",
            title: "ลบข้อมูลสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            GetOrgani(token);
          });
        }
      }
    });
  };
  const [DataForm, SetDataForm] = useState({
    org_id: "",
    org_name: "",
    org_active: 1,
    org_parent: "",
    org_NameFather: "",
  });
  const EditTree = (data) => {
    // console.log(data);
    SetDataForm({
      org_id: data.org_id,
      org_name: data.org_name,
      org_active: data.org_active,
      org_parent: data.org_parent,
    });
    setShow(true);
  };
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    GetOrgani();
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
                    จัดการข้อมูลหน่วยงาน
                  </h4>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12 ">
                    <table className="table " style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <td>
                            <b>ชื่อหน่วยงาน</b>
                          </td>
                          <td>
                            <b>สถานนะ</b>
                          </td>
                          <td>
                            <b>เครื่องมือ</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(orgData).map((orgId, index) => {
                          const org = orgData[orgId];
                          const { data, children } = org;
                          return (
                            <>
                              <tr key={index}>
                                <td>{data.org_name}</td>
                                <td>
                                  {data.org_active == 1 ? (
                                    <p
                                      className="m-0"
                                      style={{ color: "#54B435" }}
                                    >
                                      ใช้งาน
                                    </p>
                                  ) : (
                                    <p
                                      className="m-0"
                                      style={{ color: "#D21312" }}
                                    >
                                      ไม่ใช่งาน
                                    </p>
                                  )}
                                </td>
                                <td>
                                  <Button
                                    variant="success"
                                    onClick={() => {
                                      handleShow(data);
                                    }}
                                    className=""
                                  >
                                    <i className="bi bi-person-plus-fill"></i>
                                  </Button>
                                  <button
                                    className="btn btn-warning mx-1"
                                    onClick={() => {
                                      EditTree(data);
                                    }}
                                  >
                                    <i class="bi bi-person-fill-gear"></i>
                                  </button>

                                  <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>เพิ่มหน่วยงาน</Modal.Title>
                                    </Modal.Header>
                                    <form onSubmit={InsertOrg}>
                                      <Modal.Body>
                                        <div>
                                          <h5>{DataForm.org_NameFather}</h5>
                                        </div>
                                        <div className="form-group mb-2">
                                          <label htmlFor="exampleInputEmail1 mb-2">
                                            ชื่อหน่วยงาน
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            required
                                            value={DataForm.org_name}
                                            onChange={(e) =>
                                              SetDataForm({
                                                ...DataForm,
                                                org_name: e.target.value,
                                              })
                                            }
                                          />
                                        </div>
                                        <div className="form-group mb-2">
                                          <label htmlFor="" className="mb-2">
                                            สถานะ
                                          </label>
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={DataForm.org_active}
                                            onChange={(e) => {
                                              SetDataForm({
                                                ...DataForm,
                                                org_active: e.target.value,
                                              });
                                            }}
                                          >
                                            <option value={1}>ใช้งาน</option>
                                            <option value={0}>ไม่ใช่งาน</option>
                                          </select>
                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="primary" type="submit">
                                          บันทึก
                                        </Button>
                                        <Button
                                          variant="secondary"
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                      </Modal.Footer>
                                    </form>
                                  </Modal>
                                </td>
                              </tr>
                              {renderChildren(children)}
                            </>
                          );
                        })}
                      </tbody>
                    </table>
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

export default Manage_agency;
