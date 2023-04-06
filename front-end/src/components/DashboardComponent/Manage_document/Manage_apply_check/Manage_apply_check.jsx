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
function Manage_apply_check() {
  let { id } = useParams();
  const morkData = [
    {
      id: "1",
      position: "พนักงานจ้างทั่วไป",
      idcode: "75432",
      countUser: "8",
    },
    {
      id: "2",
      position: "ข้าราชการ",
      idcode: "76423",
      countUser: "1",
    },
    {
      id: "3",
      position: "ข้าราชการ",
      idcode: "79532",
      countUser: "7",
    },
    {
      id: "4",
      position: "พนักงานจ้างทั่วไป",
      idcode: "48562",
      countUser: "1",
    },
    {
      id: "5",
      position: "พนักงานจ้างทั่วไป",
      idcode: "21496",
      countUser: "1",
    },
    {
      id: "6",
      position: "พนักงานจ้างทั่วไป",
      idcode: "20158",
      countUser: "2",
    },
    {
      id: "7",
      position: "พนักงานจ้างทั่วไป",
      idcode: "32549",
      countUser: "1",
    },
    {
      id: "8",
      position: "พนักงานจ้างทั่วไป",
      idcode: "45160",
      countUser: "3",
    },
    {
      id: "9",
      position: "พนักงานจ้างทั่วไป",
      idcode: "51902",
      countUser: "3",
    },
  ];
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
      name: "ตำเเหน่ง",
      selector: (row) => row.position,
      width: "20%",
      cell: (row) => row.position,
      sortable: true,
      center: true,
    },
    {
      name: "รหัสประจำตำเเหน่ง",
      selector: (row) => row.idcode,
      width: "20%",
      cell: (row) => row.idcode,
      sortable: true,
      center: true,
    },
    {
      name: "จำนวน",
      selector: (row) => row.countUser,
      cell: (row) => row.countUser,
      width: "20%",
      sortable: true,
      center: true,
    },
    {
      name: "เอกสารเเนบ",
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
      width: "15%",
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <button type="button" className="btn btn-info mx-1">
            <i class="bi bi-pencil"></i>
          </button>
          <button type="button" className="btn btn-danger mx-1">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      cell: (row) => (
        <div className="">
          <button type="button" className="btn btn-warning mx-1">
            <i class="bi bi-pencil"></i>
          </button>
          <button type="button" className="btn btn-danger mx-1">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "15%",
      center: true,
    },
  ];

  const Get_Apply_Applycheck = async () => {
    console.log(id);
    if (id != "" || id != undefined || id != null) {
      const Data = await Apply_Applycheck(id);
      console.log(Data);
      setApply_Applycheck(Data[0]);
    }
  };

  const GetData = async () => {
    Setloadding(true);
    await axios
      .get("http://localhost:9500/api/GetType_position")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        Setloadding(false);
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
  useEffect(() => {
    Get_Apply_Applycheck();
    GetData();
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
              <div className="col-md-2">
                <div>
                  <p className="fw-bold">ประเภท</p>
                  {/* <p className="">{C_Apply_Applycheck.name}</p> */}
                </div>
              </div>
              <div className="col-md-10 py-2">
                <div className="row">
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">วันที่เริ่มต้น</p>
                      {/* <p className="">
                        {moment(C_Apply_Applycheck.jc_start)
                          .add(543, "year")
                          .format("ll")}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">วันที่สิ้นสุด</p>
                      {/* <p className="">
                        {moment(C_Apply_Applycheck.jc_end)
                          .add(543, "year")
                          .format("ll")}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">จำนวนทั้งหมด</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_applicant_all + " คน"}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">ชำระเงินแล้ว</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_person_pay + " คน"}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">รอชำระเงิน</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_person_pay_no + " คน"}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">เอกสารสมบูรณ์</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_success + " คน"}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">รออนุมัติ</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_wait + " คน"}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">แจ้งให้แก้ไข</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_warm + " คน"}
                      </p> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="fw-bold">ยกเลิกการสมัคร</p>
                      {/* <p className="">
                        {C_Apply_Applycheck.count_cancel + " คน"}
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="py-2">
                  <h5>รายการผู้สมัครงาน</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="float-end d-flex">
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
                        <a className="dropdown-item" href="#">
                          PDF
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          EXCEL
                        </a>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-primary mx-1"
                  >
                    เพิ่มผู้สมัคร
                  </button>
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
                    <DataTable
                      columns={columns}
                      data={morkData}
                      pagination
                      responsive
                      progressPending={loadding}
                      progressComponent={<Loadding />}
                    />
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

export default Manage_apply_check;
