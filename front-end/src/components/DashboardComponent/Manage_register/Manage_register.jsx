import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_register.css";
import { Link } from "react-router-dom";
import { GetAllApply } from "../../../service/api";
import moment from "moment";
function Manage_register() {
  var monthNames = [
    "ม.ค",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const columns = [
    {
      name: "ลำดับ",
      selector: (row, index) => index + 1,
      width: "130px",
      cell: (row, index) => index + 1,
      sortable: true,
      center: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.position_name,
      width: "15%",
      cell: (row) => row.position_name,
      sortable: true,
    },
    {
      name: "วันที่เริ่มต้น",
      selector: (row) => {
        let date = new Date(row.jc_start);
        let y = date.getFullYear() + 543;
        let month = monthNames[date.getMonth()];
        let numOfDay = date.getDate();
        return `${numOfDay} ${month} ${y} `;
      },
      width: "auto",
      cell: (row) => {
        let date = new Date(row.jc_start);
        let y = date.getFullYear() + 543;
        let month = monthNames[date.getMonth()];
        let numOfDay = date.getDate();
        return `${numOfDay} ${month} ${y} `;
      },
      sortable: true,
      center: true,
    },
    {
      name: "วันที่สิ้นสุด",
      selector: (row) => {
        let date = new Date(row.jc_end);
        let y = date.getFullYear() + 543;
        let month = monthNames[date.getMonth()];
        let numOfDay = date.getDate();
        return `${numOfDay} ${month} ${y} `;
      },
      cell: (row) => {
        let date = new Date(row.jc_end);
        let y = date.getFullYear() + 543;
        let month = monthNames[date.getMonth()];
        let numOfDay = date.getDate();
        return `${numOfDay} ${month} ${y} `;
      },
      width: "180px",
      sortable: true,
      center: true,
    },
    {
      name: "จำนวนตำเเหน่ง",
      selector: (row) => (row.count_position ? row.count_position : "0"),
      sortable: true,
      cell: (row) => (row.count_position ? row.count_position : "0"),
      width: "auto",
      center: true,
    },
    {
      name: "จำนวนผู้สมัคร",
      selector: (row) => (row.count_apply ? row.count_apply : "0"),
      sortable: true,
      cell: (row) => (row.count_apply ? row.count_apply : "0"),
      width: "auto",
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <Link to={"apply_check/" + row.jc_id}>
            <button type="button" className="btn btn-outline-secondary">
              จัดการข้อมูลผู้สมัคร
            </button>
          </Link>
        </div>
      ),
      sortable: true,
      width: "15%",
    },
  ];
  const [apply, setGetAllApply] = useState([]);
  const [search, setSearch] = useState("");
  const GetData = async () => {
    const data = await GetAllApply();
    setGetAllApply(data);
  };
  const handleSearch = (rows) => {
    // console.log(rows);
    return rows.filter((row) => {
      console.log(row);
      if (
        row.position_name.toString().toLowerCase().indexOf(search) > -1 ||
        row.jc_start.toLowerCase().indexOf(search) > -1 ||
        row.jc_end.toLowerCase().indexOf(search) > -1 ||
        row.count_position.toLowerCase().indexOf(search) > -1 ||
        row.count_apply.toString().toLowerCase().indexOf(search) > -1 ||
        row.price.toString().toLowerCase().indexOf(search) > -1
      ) {
        return true;
      }
    });
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-100 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-2">
              <div className="row w-100 my-auto">
                <div className="col-md-7">
                  <div className="text-end">
                    <h2 className="dashboard m-0" style={{ color: "#655DBB" }}>
                      จัดการใบสมัคร
                    </h2>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="float-end">
                    <Link to="edit">
                      <button className="btn btn-outline-primary">
                        เพิ่มใบสมัคร
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="input-wrapper px-3 w-100 float-end">
                <button className="icon">
                  <i className="bi bi-search" style={{ color: "white" }}></i>
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
          </nav>
          <div className="">
            <div className="px-3">
              <div className="rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data={handleSearch(apply)}
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

export default Manage_register;
