import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import Loadding from "../../../loadding/loadding";
import { Apply_Applycheck, ConvertTypeDate } from "../../../../service/api";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
import { NavLink } from "react-router-dom";
moment.locale("th");
var token = localStorage.getItem("token");
import { GetType_position } from "../../../../service/api";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Report from "../report/Report";
import { ExportToExcel } from "../../../report/xlsx/Xlsx";
function Apply_check() {
  let { id } = useParams();

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
      name: "เลขผู้สมัครสอบ",
      selector: (row) => row.position,
      width: "25%",
      cell: (row) => row.position,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อ-นามสกุล",
      selector: (row) => row.idcode,
      width: "25%",
      cell: (row) => row.idcode,
      sortable: true,
      center: true,
    },
    {
      name: "ตำเเหน่ง",
      selector: (row) => row.countUser,
      cell: (row) => row.countUser,
      width: "20%",
      sortable: true,
      center: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => (
        <div className="">
          <a type="button" className="">
            <i className="bi bi-file-pdf"></i>
          </a>
        </div>
      ),
      sortable: true,
      cell: (row) => (
        <div className="">
          <a type="button" className="">
            <i className="bi bi-file-pdf"></i>
          </a>
        </div>
      ),
      width: "20%",
      center: true,
    },
  ];

  const Get_Apply_Applycheck = async () => {
    console.log(id);
    const Data = await Apply_Applycheck(id, token);
    console.log(Data);
    setApply_Applycheck(Data[0]);
  };

  const GetData = async () => {
    Setloadding(true);
    let res = await GetType_position(token);
    setData(res);
  };

  const handleSearch = (rows) => {
    console.log(rows);
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
  const [data, setData] = useState([]);
  const [loadding, Setloadding] = useState(true);
  const [search, setSearch] = useState("");
  const [C_Apply_Applycheck, setApply_Applycheck] = useState({
    jc_id: "",
    jc_start: "",
    jc_end: "",
    jc_type: "",
    updated_date: "",
    name: "",
    count_applicant_all: "",
    count_person_pay: "",
    count_person_pay_no: "",
    count_success: "",
    count_wait: "",
    count_warm: "",
    count_cancel: "",
  });

  const [testExport, settextExport] = useState([]);
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((postData) => {
      // reshaping the array
      const customHeadings = postData.data.map((item) => ({
        "Article Id": item.id,
        "Article Title": item.title,
      }));
      console.log(customHeadings);
      settextExport(customHeadings);
    });
  };
  useEffect(() => {
    Get_Apply_Applycheck();
    GetData();
    fetchData();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-4">
              <div>
                <h3 className="dashboard ">จัดการข้อมูลการสมัคร</h3>
              </div>
            </div>
          </nav>
          <div className="px-3">
            <div className="row">
              <div className="col-md-2 col-12">
                <div>
                  <p className="fw-bold">ประเภท</p>
                  <p className="">{C_Apply_Applycheck.name}</p>
                </div>
              </div>
              <div className="col-md-10 py-2 col-12">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">วันที่เริ่มต้น</p>
                      <p className="">
                        {moment(C_Apply_Applycheck.jc_start).format("ll")}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">วันที่สิ้นสุด</p>
                      <p className="">
                        {moment(C_Apply_Applycheck.jc_end).format("ll")}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">จำนวนทั้งหมด</p>
                      <p className="">
                        {C_Apply_Applycheck.count_applicant_all + " คน"}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">ชำระเงินแล้ว</p>
                      <p className="">
                        {C_Apply_Applycheck.count_person_pay + " คน"}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">รอชำระเงิน</p>
                      <p className="">
                        {C_Apply_Applycheck.count_person_pay_no + " คน"}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">เอกสารสมบูรณ์</p>
                      <p className="">
                        {C_Apply_Applycheck.count_success + " คน"}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">รออนุมัติ</p>
                      <p className="">
                        {C_Apply_Applycheck.count_wait + " คน"}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">แจ้งให้แก้ไข</p>
                      <p className="">
                        {C_Apply_Applycheck.count_warm + " คน"}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div>
                      <p className="fw-bold">ยกเลิกการสมัคร</p>
                      <p className="">
                        {C_Apply_Applycheck.count_cancel + " คน"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-12 text-center text-md-start">
                <div className="py-2">
                  <h5>รายการผู้สมัครงาน</h5>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="d-flex justify-content-center justify-content-md-end">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      รายงาน
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <PDFDownloadLink
                          className="dropdown-item"
                          document={<Report DataDate={C_Apply_Applycheck} />}
                          fileName="FROM"
                        >
                          PDF
                        </PDFDownloadLink>
                      </li>
                      <li>
                        <ExportToExcel
                          apiData={testExport}
                          fileName={"exportXls"}
                        />
                      </li>
                    </ul>
                  </div>

                  <NavLink to={"/Dashboard/Apply/apply_check/Add_user/" + id}>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-1"
                    >
                      เพิ่มผู้สมัคร
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-8"></div>
                  <div className="col-md-12 pt-3 pb-1">
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
                  <div className="col-md-12 ">
                    {/* <DataTable
                      columns={columns}
                      data={handleSearch(C_Apply_Applycheck)}
                      pagination
                      responsive
                      progressPending={loadding}
                      progressComponent={<Loadding />}
                    /> */}
                  </div>
                  <div className="col-md-12">
                    <div className="float-end py-2">
                      <button className="button_Regiser mx-1">บันทึก</button>
                      <NavLink to="/Dashboard/Apply">
                        <button className="button_Back mx-1">ย้อนกลับ</button>
                      </NavLink>
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

export default Apply_check;
