import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
import { GetAllPaymentByID, GetPositionPayment } from "../../../../service/api";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../../../pdf/Pdf";

var token = localStorage.getItem("token");
function Detail_Manage_money() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    let res = await GetPositionPayment(data[0].jc_id, token);
    setPosition(res);
    setShow(true);
  };
  const GetDataByID = async () => {
    let res = await GetAllPaymentByID(id, token);
    setData(res);
  };

  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      width: "10%",
      cell: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: "เลขบัตรประชาชน",
      selector: (row) => row.idcard,
      width: "15%",
      cell: (row) => row.idcard,
      sortable: true,
    },
    {
      name: "เลขผู้สมัครสอบ",
      selector: (row) => row.numberOrder,
      width: "15%",
      cell: (row) => row.numberOrder,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อ-นามสกุล",
      selector: (row) => row.nameAndLastname,
      cell: (row) => row.nameAndLastname,
      width: "15%",
      sortable: true,
      // center: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.type,
      sortable: true,
      cell: (row) => row.type,
      width: "15%",
      center: true,
    },
    {
      name: "ตำเเหน่ง",
      selector: (row) => row.position,
      sortable: true,
      cell: (row) => row.position,
      width: "15%",
      center: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => row.status,
      cell: (row) => row.status,
      sortable: true,
      width: "15%",
    },
  ];
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const handleSearch = (rows) => {
    return rows.filter((row) => {
      // if (!search) return true;
      // if (
      //   row.id.toString().toLowerCase().indexOf(search) > -1 ||
      //   row.category.toLowerCase().indexOf(search) > -1 ||
      //   row.brand.toLowerCase().indexOf(search) > -1 ||
      //   row.description.toLowerCase().indexOf(search) > -1 ||
      //   row.discountPercentage.toString().toLowerCase().indexOf(search) > -1 ||
      //   row.price.toString().toLowerCase().indexOf(search) > -1
      // ) {
      return true;
      // }
    });
  };
  useEffect(() => {
    GetDataByID();
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
                    จัดการข้อมูลการชำระเงิน
                  </h4>
                </div>
              </div>
            </div>
          </nav>
          <div className="row px-4">
            <div className="col-md-6 py-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>
                  จำนวนผู้ที่เอกสารครบแล้ว จำนวน {data[0]?.count_applicant_all}{" "}
                  คน
                </option>
                <option value={1}>
                  จำนวนผู้สมัครที่ชำระเงินและออกใบเสร็จแล้ว จำนวน{" "}
                  {data[0]?.count_person_pay} คน
                </option>
                <option value={2}>
                  จำนวนผู้สมัครที่ยังคงค้างการชำระเงินและออกใบเสร็จ จำนวน{" "}
                  {data[0]?.count_person_pay_no} คน
                </option>
              </select>
            </div>
            <div className="col-md-6 my-auto">
              <div className="d-flex justify-content-end ">
                {/* <button type="button" className="btn btn-outline-success">
                  รายงานราชกาล
                </button> */}
                <button className="Btn_Add_user" onClick={handleShow}>
                  รายงานราชกาล
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>รายงานราชการ</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="form-group">
                      <label htmlFor="" className="mb-2">
                        เลือกตำแหน่ง
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={""}>เลือกตำเเหน่ง</option>
                        {position.map((value, idx) => {
                          return <option value="1">One</option>;
                        })}
                      </select>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      PDF
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      EXCEL
                    </Button>
                    <PDFDownloadLink
                      document={<Pdf DataDate={data} />}
                      fileName="FROM"
                    >
                      PDF
                    </PDFDownloadLink>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="col-md-12">
              {/* <DataTable
                columns={columns}
                data={handleSearch(data)}
                pagination
                responsive
              /> */}
            </div>
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail_Manage_money;
