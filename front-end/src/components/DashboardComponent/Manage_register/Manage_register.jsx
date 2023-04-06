import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_register.css";
import { Link } from "react-router-dom";
import { GetAllApply, ConvertTypeDate } from "../../../service/api";
import { Tooltip } from "bootstrap";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
function Manage_register() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll("[data-bs-toggle=tooltip]")
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    console.log(tooltipTriggerEl);
    return new Tooltip(tooltipTriggerEl);
  });

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
      width: "10%",
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
      selector: (row) => moment(row.jc_start).add(543, "year").format("ll"),
      width: "15%",
      cell: (row) => moment(row.jc_start).add(543, "year").format("ll"),
      sortable: true,
      center: true,
    },
    {
      name: "วันที่สิ้นสุด",
      selector: (row) => moment(row.jc_end).add(543, "year").format("ll"),
      cell: (row) => moment(row.jc_end).add(543, "year").format("ll"),
      width: "15%",
      sortable: true,
      center: true,
    },
    {
      name: "จำนวนตำเเหน่ง",
      selector: (row) => (row.count_position ? row.count_position : "0"),
      sortable: true,
      cell: (row) => (row.count_position ? row.count_position : "0"),
      width: "15%",
      center: true,
    },
    {
      name: "จำนวนผู้สมัคร",
      selector: (row) => (row.count_apply ? row.count_apply : "0"),
      sortable: true,
      cell: (row) => (row.count_apply ? row.count_apply : "0"),
      width: "15%",
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <Link to={"apply_check/" + row.jc_id} className="mx-1">
            <button
              type="button"
              id="button_to_applyCheck"
              className="btn btn-info"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="จัดการข้อมูลผู้สมัคร"
              onClick={() => {
                HiddenToltip();
              }}
            >
              <i className="bi bi-gear" style={{ color: "black" }}></i>
            </button>
          </Link>
          <Link to={"edit"} className="mx-1">
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              // data-bs-title="เเก้ไขข้อมูล"
              data-bs-html="true"
              title="เเก้ไขข้อมูล"
            >
              <i className="bi bi-pencil"></i>
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="ลบข้อมูล"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "15%",
      center: true,
    },
  ];
  const [apply, setGetAllApply] = useState([]);
  const [search, setSearch] = useState("");

  // const HiddenToltip = () => {
  //   Tooltip.querySelectorAll("[data-bs-toggle=tooltip]").HiddenToltip;
  // };
  const GetData = async () => {
    const data = await GetAllApply();
    setGetAllApply(data);
  };
  const handleSearch = (rows) => {
    return rows.filter((row) => {
      if (
        row.position_name.toString().indexOf(search) > -1 ||
        moment(row.jc_start)
          .add(543, "year")
          .format("LL")
          .toString()
          .indexOf(search) > -1 ||
        moment(row.jc_start)
          .add(543, "year")
          .format("ll")
          .toString()
          .indexOf(search) > -1 ||
        moment(row.jc_end)
          .add(543, "year")
          .format("ll")
          .toString()
          .indexOf(search) > -1 ||
        moment(row.jc_end)
          .add(543, "year")
          .format("LL")
          .toString()
          .indexOf(search) > -1 ||
        row.count_position?.toString().indexOf(search) > -1 ||
        row.count_apply
          ? row.count_apply.toString().indexOf(search) > -1
          : null
      ) {
        return true;
      }
    });
  };

  useEffect(() => {
    GetData();
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-100 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-1">
              <div className="row w-100 my-auto">
                <div className="col-md-7">
                  <div className="text-start">
                    <h3 className="dashboard m-0 fw-bold">จัดการใบสมัคร</h3>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="float-end">
                    <Link to="edit">
                      <button className="Btn_Add_user">เพิ่มใบสมัคร</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="input-wrapper px-3 pt-5 w-100 float-end">
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
