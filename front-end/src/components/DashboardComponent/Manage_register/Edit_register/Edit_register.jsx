import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
import moment from "moment/min/moment-with-locales";
import OverwriteMomentBE from "../../../Override/OverwriteMomentBE";
import DateUtils from "@date-io/moment";
moment.locale("th");
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { Link, NavLink } from "react-router-dom";
import Dropzone from "react-dropzone";
import {
  GetAllApply,
  GetType_position,
  getPositionINtype,
  InsertAndEditApply,
  GetOrganizationAll,
  InsertAndEditApplyData,
  GetApply_ByID,
  GetApply_ToTable,
  DeletePositionApply_ByID,
  GetDetailPositionByID,
  GetFilePositionByID,
  GetGetOrganizationByIDApply,
  UpdateDataApply,
  UpdateDataApplyJob,
} from "../../../../service/api";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import thai from "dayjs/locale/th";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckboxTree from "react-checkbox-tree";
var token = localStorage.getItem("token");
const initalStatePosition = {
  job_id: "",
  job_position: "",
  job_amount: "",
  job_payment: "",
  job_no: "",
  job_name: "",
  job_file: "",
  jc_id: "",
};
const DataCheckbox = [
  { name: "รูปท่าย", value: 1 },
  { name: "สำเนาทะเบียนบ้าน", value: 2 },
  { name: "สำเนาบัตรประจำตัวประชาชน", value: 3 },
  { name: "ใบรับรองแพทย์", value: 4 },
  { name: "สำเนาหลักฐานเกี่ยวกับการเกณฑ์ทหาร", value: 5 },
  { name: "สำเนาใบอนุญาตขับรถยนต์", value: 6 },
  { name: "สำเนาเอกสารหลักฐานอื่นๆ", value: 7 },
  { name: "สำเนาวุติการศึกษา", value: 8 },
];

function Edit_register() {
  const navigate = useNavigate();
  const [orgData, setOrgData] = useState({});
  const GetOrgani = async () => {
    let res = await GetOrganizationAll(token);
    setOrgData(res);
  };
  function renderChildren(children, paddingTree) {
    return Object.keys(children).map((childId, idx1) => {
      return (
        <>
          <tr key={idx1}>
            <td style={{ paddingLeft: paddingTree }}>
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-1"
                // defaultChecked={CheckListTree.map((value) => {
                //   if (value.org_id == childId) {
                //     return true;
                //   }
                // })}
                value={children[childId].data.org_id}
                onChange={handleCheckTree}
              />
              {children[childId].data.org_name}
            </td>
          </tr>
          {renderChildren(children[childId].children)}
        </>
      );
    });
  }
  function renderChildre2(children) {
    return Object.keys(children).map((childId, idx2) => {
      console.log();
      return (
        <>
          <tr>
            <td style={{ paddingLeft: "40px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-1"
                // defaultChecked={}

                onChange={handleCheckTree}
                value={children[childId].data.org_id}
              />
              {children[childId].data.org_name}
            </td>
          </tr>
          {renderChildre3(children[childId].children)}
        </>
      );
    });
  }
  function renderChildre3(children) {
    return Object.keys(children).map((childId, idx3) => {
      return (
        <>
          <tr key={idx3}>
            <td style={{ paddingLeft: "65px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                className="mx-1"
                defaultChecked={Object.hasOwn(CheckListTree, childId)}
                onChange={handleCheckTree}
                value={children[childId].data.org_id}
              />
              {children[childId].data.org_name}
            </td>
          </tr>
          {renderChildren(children[childId].children)}
        </>
      );
    });
  }
  var { id } = useParams();
  //     id: "1",
  //     name: "อบจ. เชียงใหม่",
  //     children: [
  //       {
  //         id: "2",
  //         name: "สำนักการศึกษา ศาสนา และวัฒนธรรม",
  //         children: [
  //           {
  //             id: "3",
  //             parent: "1",
  //             name: "ส่วนบริหารการศึกษา",
  //             children: [
  //               {
  //                 id: "4",
  //                 parent: "3",
  //                 name: "ฝ่ายบริหารการศึกษา",
  //               },
  //               {
  //                 id: "5",
  //                 parent: "3",
  //                 name: "ฝ่ายส่งเสริมคุณภาพการศึกษา",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         id: "6",
  //         name: "ฝ่ายบริหารงานทั่วไป",
  //       },
  //       {
  //         id: "7",
  //         name: "ส่วนส่งเสริมการศึกษา ศาสนา และวัฒนธรรม",
  //         children: [
  //           {
  //             id: "8",
  //             name: "ฝ่ายการศึกษานอกระบบและตามอัธยาศัย",
  //           },
  //           {
  //             id: "9",
  //             name: "ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม",
  //           },
  //           {
  //             id: "10",
  //             name: "ฝ่ายส่งเสริมกีฬา และนันทนาการ",
  //           },
  //         ],
  //       },
  //       {
  //         id: "11",
  //         name: "สำนักงานเลขานุการองค์การบริหารส่วนจังหวัด",
  //         children: [
  //           {
  //             id: "12",
  //             name: "ฝ่ายกิจการคณะผู้บริหาร",
  //           },
  //           {
  //             id: "13",
  //             name: "ฝ่ายการประชุม",
  //           },
  //         ],
  //       },
  //       {
  //         id: "14",
  //         name: "สำนักช่าง",
  //         children: [
  //           {
  //             id: "15",
  //             name: "ฝ่ายบริหารงานทั่วไป",
  //           },
  //           {
  //             id: "16",
  //             name: "ฝ่ายก่อสร้างและซ่อมบำรุง",
  //           },
  //           {
  //             id: "17",
  //             name: "ฝ่ายช่างสุขาภิบาล",
  //           },
  //           {
  //             id: "18",
  //             name: "ฝ่ายผังเมือง",
  //           },
  //         ],
  //       },
  //       {
  //         id: "19",
  //         name: "กองการเจ้าหน้าที่",
  //         children: [
  //           {
  //             id: "20",
  //             name: "ฝ่ายส่งเสริมและพัฒนาบุคคลากร",
  //           },
  //           {
  //             id: "21",
  //             name: "ฝ่ายสรรหาและบรรจุแต่งตั้ง",
  //           },
  //           {
  //             id: "22",
  //             name: "ฝ่ายวินัยและส่งเสริมคุณธรรม",
  //           },
  //         ],
  //       },
  //       {
  //         id: "23",
  //         name: "กองสาธารณสุข",
  //         children: [
  //           {
  //             id: "24",
  //             name: "ฝ่ายบริหารงานสาธารณสุข",
  //           },
  //           {
  //             id: "25",
  //             name: "ฝ่ายบริการสาธารณสุข",
  //             children: [
  //               {
  //                 id: "26",
  //                 name: "รพ.สต.",
  //               },
  //             ],
  //           },
  //           {
  //             id: "27",
  //             name: "ฝ่ายบริหารงานทั่วไป",
  //           },
  //         ],
  //       },
  //       {
  //         id: "28",
  //         name: "กองป้องกันและบรรเทาสาธารณภัย",
  //         children: [
  //           {
  //             id: "29",
  //             name: "ฝ่ายบริหารงานทั่วไป",
  //           },
  //           {
  //             id: "30",
  //             name: "ฝ่ายป้องกันและบรรเทาสาธารณภัย",
  //           },
  //         ],
  //       },
  //       {
  //         id: "31",
  //         name: "หน่วยตรวจสอบภายใน",
  //       },
  //       {
  //         id: "32",
  //         name: "กองคลัง",
  //         children: [
  //           {
  //             id: "33",
  //             name: "ฝ่ายการเงินและบัญชี",
  //           },
  //           {
  //             id: "34",
  //             name: "ฝ่ายเร่งรัดและจัดเก็บรายได้",
  //           },
  //           {
  //             id: "35",
  //             name: "ฝ่ายบริหารการคลัง",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedNodesEdit, setSelectedNodesEdit] = useState([]);
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [positionType, SetpositionType] = useState([]);
  const [G_Allapply, setGetAllApply] = useState([]);

  const [detailPosition, SetdetailPosition] = useState(initalStatePosition);

  const [stateForDataTable, SetStateForDataTable] = useState([]);
  const [DataAll, setDataAll] = useState([]);
  const [DataAllTree, setDataAllTree] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [tree, setTree] = useState([]);
  const [endDate, setEndDate] = useState();
  const [selectCheck, setSelectCheck] = useState({
    checkData: [],
  });

  const [postion, setposition] = useState([]);
  const [DataForDataTable, setDataForDataTable] = useState([]);
  const GetData = async () => {
    const data = await GetAllApply(token);
    let res = await GetOrganizationAll(token);
    if (id) {
      let res_ByID = await GetApply_ByID(id, token);
      SetC_insertApply({
        C_id: res_ByID.jc_id,
        C_type: res_ByID.jc_type,
        C_startDate: moment(res_ByID.jc_start)
          .add("-543", "year")
          .format("MM-DD-yyyy"),
        C_endDate: moment(res_ByID.jc_end)
          .add("-543", "year")
          .format("MM-DD-yyyy"),
      });
      const resInModal = await getPositionINtype(res_ByID.jc_type, token);
      setposition(resInModal);
      const DataToTable = await GetApply_ToTable(id, token);
      console.log(DataToTable);
      setDataForDataTable(DataToTable);
    }
    setTree(res);

    const typePosition = await GetType_position(token);
    SetpositionType(typePosition);
    setGetAllApply(data);
  };

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const [FilePDF, SetFilePDF] = useState([]);
  const [stateData, SetStateData] = useState({
    job_id: "",
    positionType: "",
    positionName: "",
    amount: "",
    price: "",
    id_position: "",
    details_file: [],
    tree: [],
  });
  const [C_insertApply, SetC_insertApply] = useState({
    C_id: "",
    C_type: "",
    C_startDate: "",
    C_endDate: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowModal = async (id) => {
    let res = await GetDetailPositionByID(id, token);
    let resFileDetails = await GetFilePositionByID(id, token);
    console.log(resFileDetails);
    SetStateData({
      job_id: res.job_id,
      positionType: res.job_position,
      amount: res.job_amount,
      price: res.job_payment,
      id_position: res.job_no,
      // details_file: res.job_file,
      tree: [],
    });
    setIsCheck(resFileDetails);
    SetFilePDF(res.job_file);
    let resOrg = await GetGetOrganizationByIDApply(id, token);
    console.log(resOrg);
    setCheckListTree(resOrg);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    e.preventDefault();
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
      name: "ตำเเหน่ง",
      selector: (row, idx) => row.p_name,
      width: "20%",
      cell: (row, idx) => row.p_name,
      sortable: true,
    },
    {
      name: "รหัสประจำตำเเหน่ง",
      selector: (row) => row.job_no,
      width: "20%",
      cell: (row) => row.job_no,
      sortable: true,
      center: true,
    },
    {
      name: "จำนวน",
      selector: (row) => row.job_amount,
      cell: (row) => row.job_amount,
      width: "15%",
      sortable: true,
      center: true,
    },
    {
      name: "เอกสารเเนบ",
      selector: (row) => (
        <a
          href={"http://localhost:9500/public/pdf/" + row.job_file}
          target="_blank"
        >
          <i className="bi bi-file-pdf"></i>
        </a>
      ),
      sortable: true,
      cell: (row) => (
        <a
          href={"http://localhost:9500/public/pdf/" + row.job_file}
          target="_blank"
        >
          <i className="bi bi-file-pdf"></i>
        </a>
      ),
      width: "15%",
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row, index) => (
        <div className="">
          <button
            type="button"
            className="btn btn-warning mx-1"
            title="เเก้ไขข้อมูล"
            onClick={() => {
              handleShowModal(row.job_id);
            }}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <Modal show={showModal} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>เพิ่มตำแหน่ง</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="หน้าหลัก">
                  <div className="row ">
                    <div className="col-md-6 border-end">
                      <div className="row ">
                        <div className="col-md-12 ">
                          <div className="mb-3 mt-2">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              ตำแหน่ง
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={stateData.positionType}
                              required
                              onChange={(e) => {
                                SetStateData({
                                  ...stateData,
                                  positionType: e.target.value,
                                });
                              }}
                            >
                              <option value="">เลือก</option>
                              {postion.map((value, idx) => {
                                // console.log(value);
                                return (
                                  <option
                                    value={value.p_id}
                                    name={value.p_name}
                                    key={idx}
                                  >
                                    {value.p_name}
                                  </option>
                                );
                              })}
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
                              value={stateData.amount}
                              required
                              onChange={(e) => {
                                SetStateData({
                                  ...stateData,
                                  amount: e.target.value,
                                });
                              }}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              ค่าสมัคร
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={stateData.price}
                              required
                              onChange={(e) => {
                                SetStateData({
                                  ...stateData,
                                  price: e.target.value,
                                });
                              }}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              รหัสประจำตำแหน่ง
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="รหัสประจำตำแหน่ง"
                              value={stateData.id_position}
                              required
                              onChange={(e) => {
                                SetStateData({
                                  ...stateData,
                                  id_position: e.target.value,
                                });
                              }}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              เอกสารไฟล์แนบ
                            </label>
                            <Dropzone
                              onDrop={(acceptedFiles) => {
                                SetFilePDF(acceptedFiles[0]);
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <section className="dropzone">
                                  <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className="text-dropzone m-0">
                                      อัพโหลดไฟล์
                                    </p>
                                  </div>
                                </section>
                              )}
                            </Dropzone>
                            <aside>
                              <p className="m-0">ไฟล์</p>
                              <ul>
                                <a
                                  target="_blank"
                                  href={
                                    "http://localhost:9500/public/pdf/" +
                                    FilePDF
                                  }
                                >
                                  {FilePDF.path ? FilePDF.path : FilePDF}
                                </a>
                              </ul>
                              {/* <ul>{FilePDF}</ul> */}
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-between mt-2">
                        <p>เอกสารที่ต้องแนบ</p>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                            onChange={handleSelectAll}
                            checked={isCheckAll}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            เลือกทั้งหมด
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        {DataCheckbox.map((value, idx) => {
                          return (
                            <div className="col-md-12 mb-3" key={idx}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={value.value}
                                  defaultChecked={
                                    isCheck[idx]?.jobf_type === value.value
                                  }
                                  id="1"
                                  onChange={handleCheckboxChange}
                                  // id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  {value.name}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="tree" title="หน่วยงาน">
                  <table
                    className="table table-borderless "
                    style={{ width: "100%" }}
                  >
                    <tbody>
                      {Object.keys(tree).map((orgId, index) => {
                        const org = tree[orgId];
                        const { data, children } = org;
                        return (
                          <>
                            <tr key={index}>
                              <td>
                                <input
                                  type="checkbox"
                                  name=""
                                  id={data.org_id}
                                  defaultChecked={
                                    CheckListTree[index]?.org_id == data.org_id
                                  }
                                  className="mx-1"
                                  value={data.org_id}
                                  onChange={handleCheckTree}
                                />
                                {data.org_name}
                              </td>
                            </tr>
                            {renderChildren(children)}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  <CheckboxTree
                    nodes={Object.keys(tree)}
                    // checked={checked}
                    // expanded={expanded}
                    onCheck={(checked) => setChecked(checked)}
                    onExpand={(expanded) => setExpanded(expanded)}
                  />
                </Tab>
              </Tabs>
            </Modal.Body>
            <Modal.Footer>
              <div className="row w-100">
                <div className="col-md-12 text-center">
                  <Button
                    // variant="primary"
                    type="button"
                    className="mx-1 button_Add_Regiser"
                    onClick={() => {
                      EditApply();
                    }}
                    // onClick={HandleSubmitForm}
                  >
                    บันทึก
                  </Button>
                  <Button
                    // variant="secondary"
                    className="button_Back mx-1"
                    onClick={handleClose}
                  >
                    ยกเลิก
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
          <button
            type="button"
            className="btn btn-danger mx-1"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="ลบข้อมูล"
            onClick={() => {
              DeleteDataApply(row.job_id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "20%",
      center: true,
    },
  ];

  const DeleteDataApply = (idTableDelete) => {
    Swal.fire({
      title: "ยืนยันการลบข้อมูล?",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await DeletePositionApply_ByID(idTableDelete, token);
        Swal.fire("", "ลบข้อมูลสำเร็จ", "success").then(async () => {
          const DataToTable = await GetApply_ToTable(id, token);
          setDataForDataTable(DataToTable);
        });
      }
    });
  };

  const HandelSelectType = async (e) => {
    const idTypePosition = e.target.value;
    SetC_insertApply({
      ...C_insertApply,
      C_type: idTypePosition,
    });
    const res = await getPositionINtype(idTypePosition, token);
    setposition(res);
    console.log(res);
  };
  const handleSearch = (rows) => {
    console.log(rows);
    // return rows.filter((row) => {
    //   // if (!search) return true;
    //   if (
    //     row.C_position.toString().indexOf(search) > -1 ||
    //     moment(row.C_startDate)
    //       .add(543, "year")
    //       .format("LL")
    //       .toString()
    //       .indexOf(search) > -1 ||
    //     moment(row.C_startDate)
    //       .add(543, "year")
    //       .format("ll")
    //       .toString()
    //       .indexOf(search) > -1 ||
    //     moment(row.C_endDate)
    //       .add(543, "year")
    //       .format("ll")
    //       .toString()
    //       .indexOf(search) > -1 ||
    //     moment(row.C_endDate)
    //       .add(543, "year")
    //       .format("LL")
    //       .toString()
    //       .indexOf(search) > -1 ||
    //     row.count_position?.toString().indexOf(search) > -1
    //   ) {
    //     return true;
    //   }
    // });
  };

  const HandleFromInsertOrEdit = () => {};
  const handleCheckboxChange = (e) => {
    setIsCheck([...isCheck, { detailFile: e.target.value }]);
  };

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
    setIsCheck();
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  const [CheckListTree, setCheckListTree] = useState([]);
  const handleCheckTree = (e) => {
    setCheckListTree([...CheckListTree, { tree: e.target.value }]);
  };

  const EditApply = async () => {
    let formData = new FormData();
    formData.append("jc_id", C_insertApply.C_id);
    formData.append("job_id", stateData.job_id);
    formData.append("jc_type", C_insertApply.C_type);
    formData.append("jc_start", C_insertApply.C_startDate);
    formData.append("jc_end", C_insertApply.C_endDate);
    formData.append("job_position", stateData.positionType);
    formData.append("job_amount", stateData.amount);
    formData.append("job_payment", stateData.price);
    formData.append("job_no", stateData.id_position);
    formData.append("file", FilePDF);

    for (let index = 0; index < isCheck.length; index++) {
      if (isCheck[index].detailFile) {
        formData.append("type_file", isCheck[index].detailFile);
      } else {
        formData.append("type_file", isCheck[index].jobf_type);
        formData.append("type_file_id", isCheck[index].jobf_id);
      }
    }
    for (let index = 0; index < CheckListTree.length; index++) {
      if (CheckListTree[index].tree) {
        formData.append("tree", CheckListTree[index].tree);
      } else {
        formData.append("tree", CheckListTree[index].org_id);
        formData.append("tree_id", CheckListTree[index].job_o);
      }
    }

    let res = await UpdateDataApplyJob(formData, token);
    if (res.status == "success") {
      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(async () => {
        SetStateData({
          positionType: "",
          positionName: "",
          amount: "",
          price: "",
          id_position: "",
          details_file: [],
          tree: [],
        });
        SetFilePDF([]);
        setIsCheck([]);
        setCheckListTree([]);
        const DataToTable = await GetApply_ToTable(id, token);
        setDataForDataTable(DataToTable);
        let res_ByID = await GetApply_ByID(id, token);
        SetC_insertApply({
          C_id: res_ByID.jc_id,
          C_type: res_ByID.jc_type,
          C_startDate: moment(res_ByID.jc_start)
            .add("-543", "year")
            .format("MM-DD-yyyy"),
          C_endDate: moment(res_ByID.jc_end)
            .add("-543", "year")
            .format("MM-DD-yyyy"),
        });
        setShowModal(false);

        // navigate(`/Dashboard/Apply/edit/${res.id}`);
      });
    }
  };
  const InsertApply = async () => {
    let formData = new FormData();
    formData.append("jc_id", C_insertApply.C_id);
    formData.append("jc_type", C_insertApply.C_type);
    formData.append("jc_start", C_insertApply.C_startDate);
    formData.append("jc_end", C_insertApply.C_endDate);

    formData.append("job_position", stateData.positionType);
    formData.append("job_amount", stateData.amount);
    formData.append("job_payment", stateData.price);
    formData.append("job_no", stateData.id_position);
    formData.append("file", FilePDF);
    for (let index = 0; index < isCheck.length; index++) {
      formData.append("type_file", isCheck[index]);
    }
    for (let index = 0; index < CheckListTree.length; index++) {
      formData.append("tree", CheckListTree[index]);
    }
    let res = await UpdateDataApply(formData, token);
    if (res.status == "success") {
      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(async () => {
        SetStateData({
          positionType: "",
          positionName: "",
          amount: "",
          price: "",
          id_position: "",
          details_file: [],
          tree: [],
        });
        SetFilePDF([]);
        setIsCheck([]);
        setCheckListTree([]);
        const DataToTable = await GetApply_ToTable(id, token);
        setDataForDataTable(DataToTable);
        // let res_ByID = await GetApply_ByID(id, token);
        // SetC_insertApply({
        //   C_id: res_ByID.jc_id,
        //   C_type: res_ByID.jc_type,
        //   C_startDate: moment(res_ByID.jc_start)
        //     .add("-543", "year")
        //     .format("MM-DD-yyyy"),
        //   C_endDate: moment(res_ByID.jc_end)
        //     .add("-543", "year")
        //     .format("MM-DD-yyyy"),
        // });
        setShow(false);

        // navigate(`/Dashboard/Apply/edit/${res.id}`);
      });
    }
  };
  const handleShowEdit = async (e) => {
    e.preventDefault();
    setShow(true);
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="px-4 py-3">
        <div className="shadow">
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

          <div className=" px-3">
            <form
              className="row"
              onSubmit={handleShow}
              encType="multipart/form"
            >
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">ประเภท</label>
                  <select
                    className="form-select"
                    value={C_insertApply.C_type}
                    required
                    onChange={HandelSelectType}
                  >
                    <option value="">เลือก</option>
                    {positionType.map((val, idx) => {
                      return (
                        <option key={idx} value={val.id}>
                          {val.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">วันที่เริ่ม</label>

                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="th"
                >
                  <DatePicker
                    className="form-control"
                    label="วัน/เดือน/ปี"
                    disablePast
                    value={dayjs(C_insertApply.C_startDate)}
                    onChange={(newDate) => {
                      SetC_insertApply({
                        ...C_insertApply,
                        C_startDate: newDate,
                      });
                    }}
                    slotProps={{
                      textField: { size: "small", required: true },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">วันที่สิ้นสุด</label>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="th"
                >
                  <DatePicker
                    className="form-control"
                    label="วัน/เดือน/ปี"
                    minDate={dayjs(C_insertApply.C_startDate)}
                    value={dayjs(C_insertApply.C_endDate)}
                    onChange={(newDate) => {
                      SetC_insertApply({
                        ...C_insertApply,
                        C_endDate: newDate,
                      });
                    }}
                    slotProps={{
                      textField: { size: "small", required: true },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-md-12 text-center text-md-end py-2 py-md-0">
                <button className="button_Add_Regiser mx-1" type="submit">
                  เพิ่มใบสมัคร
                </button>
              </div>
            </form>
            <div className="col-md-12 pb-4">
              <div className="float-end pt-2">
                <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>เพิ่มตำแหน่ง</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Tabs
                      defaultActiveKey="home"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="home" title="หน้าหลัก">
                        <div className="row ">
                          <div className="col-md-6 border-end">
                            <div className="row ">
                              <div className="col-md-12 ">
                                <div className="mb-3 mt-2">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ตำแหน่ง
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={stateData.C_position}
                                    required
                                    onChange={(e) => {
                                      SetStateData({
                                        ...stateData,
                                        positionType: e.target.value,
                                        positionName:
                                          e.target.selectedOptions[0].text,
                                      });
                                    }}
                                  >
                                    <option value="">เลือก</option>
                                    {postion.map((value, idx) => {
                                      // console.log(value);
                                      return (
                                        <option
                                          value={value.p_id}
                                          name={value.p_name}
                                          key={idx}
                                        >
                                          {value.p_name}
                                        </option>
                                      );
                                    })}
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
                                    value={stateData.amount}
                                    required
                                    onChange={(e) => {
                                      SetStateData({
                                        ...stateData,
                                        amount: e.target.value,
                                      });
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    ค่าสมัคร
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={stateData.price}
                                    required
                                    onChange={(e) => {
                                      SetStateData({
                                        ...stateData,
                                        price: e.target.value,
                                      });
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    รหัสประจำตำแหน่ง
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="รหัสประจำตำแหน่ง"
                                    value={stateData.id_position}
                                    required
                                    onChange={(e) => {
                                      SetStateData({
                                        ...stateData,
                                        id_position: e.target.value,
                                      });
                                    }}
                                  ></input>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    เอกสารไฟล์แนบ
                                  </label>
                                  <Dropzone
                                    onDrop={(acceptedFiles) => {
                                      SetFilePDF(acceptedFiles[0]);
                                    }}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <section className="dropzone">
                                        <div {...getRootProps()}>
                                          <input {...getInputProps()} />
                                          <p>
                                            Drag 'n' drop some files here, or
                                            click to select files
                                          </p>
                                        </div>
                                      </section>
                                    )}
                                  </Dropzone>
                                  <aside>
                                    <h4>ไฟล์</h4>
                                    <ul>{FilePDF.path}</ul>
                                  </aside>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex justify-content-between mt-2">
                              <p>เอกสารที่ต้องแนบ</p>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="flexCheckDefault"
                                  onChange={handleSelectAll}
                                  checked={isCheckAll}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  เลือกทั้งหมด
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="1"
                                    id="1"
                                    onChange={handleCheckboxChange}
                                    // id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    รูปถ่าย
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="2"
                                    id="2"
                                    onChange={handleCheckboxChange}
                                    // id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    สำเนาทะเบียนบ้าน
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="3"
                                    id="3"
                                    // id="flexCheckDefault"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    สำเนาบัตรประจำตัวประชาชน
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="4"
                                    id="4"
                                    // id="flexCheckDefault"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    ใบรับรองแพทย์
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="5"
                                    id="5"
                                    // id="flexCheckDefault"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    สำเนาหลักฐานเกี่ยวกับการเกณฑ์ทหาร
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="6"
                                    id="6"
                                    // id="flexCheckDefault"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    สำเนาใบอนุญาตขับรถยนต์
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="7"
                                    id="7"
                                    // id="flexCheckDefault"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    สำเนาเอกสารหลักฐานอื่นๆ
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="8"
                                    id="8"
                                    // id="flexCheckDefault"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    สำเนาวุติการศึกษา
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="tree" title="หน่วยงาน">
                        <table
                          className="table table-borderless "
                          style={{ width: "100%" }}
                        >
                          <tbody>
                            {Object.keys(tree).map((orgId, index) => {
                              const org = tree[orgId];
                              const { data, children } = org;
                              return (
                                <>
                                  <tr key={index}>
                                    <td>
                                      <input
                                        type="checkbox"
                                        name=""
                                        id={data.org_id}
                                        className="mx-1"
                                        value={data.org_id}
                                        onChange={handleCheckTree}
                                      />
                                      {data.org_name}
                                    </td>
                                  </tr>
                                  {renderChildren(children)}
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="row w-100">
                      <div className="col-md-12 text-center">
                        <Button
                          // variant="primary"
                          type="button"
                          className="mx-1 button_Add_Regiser"
                          onClick={() => {
                            InsertApply();
                          }}
                          // onClick={HandleSubmitForm}
                        >
                          บันทึก
                        </Button>
                        <Button
                          // variant="secondary"
                          className="button_Back mx-1"
                          onClick={handleClose}
                        >
                          ยกเลิก
                        </Button>
                      </div>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="col-md-12 my-auto">
              <div className="d-flex justify-content-between">
                <div className="py-3">
                  <h4 className="m-0">รายการตำแหน่งที่เปิดรับสมัคร</h4>
                </div>
                <div className="input-wrapper_Register float-end my-auto">
                  <button className="icon_Register">
                    <i className="bi bi-search" style={{ color: "white" }}></i>
                  </button>
                  <input
                    placeholder="ค้นหา"
                    className="input_Register"
                    name="text"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 text-end">
              <DataTable
                columns={columns}
                data={DataForDataTable}
                pagination
                responsive
              />
              <div className="py-2">
                <NavLink to="/Dashboard/Apply">
                  <button className="button_Back mx-1">ย้อนกลับ</button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-12">
              <div className="float-end py-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit_register;
