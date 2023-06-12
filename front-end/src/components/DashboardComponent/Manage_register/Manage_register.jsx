import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_register.css";
import { Link } from "react-router-dom";
import {
  GetAllApply,
  ConvertTypeDate,
  Delete_ApplyData,
} from "../../../service/api";
import { Tooltip } from "bootstrap";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import Swal from "sweetalert2";
// import DataTable from "../../tbl/DataTable";
var token = localStorage.getItem("token");
function Manage_register() {
  // var tooltipTriggerList = [].slice.call(
  //   document.querySelectorAll("[data-bs-toggle=tooltip]")
  // );
  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   console.log(tooltipTriggerEl);
  //   return new Tooltip(tooltipTriggerEl);
  // });
  const columns = [
    {
      name: "ลำดับ",
      selector: (row, index) => index + 1,
      width: "10%",
      cell: (row, index) => index + 1,
      // sortable: true,
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
      selector: (row) => moment(row.jc_start).format("ll"),
      width: "15%",
      cell: (row) => moment(row.jc_start).format("ll"),
      sortable: true,
      center: true,
    },
    {
      name: "วันที่สิ้นสุด",
      selector: (row) => moment(row.jc_end).format("ll"),
      cell: (row) => moment(row.jc_end).format("ll"),
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
          <Link to={"edit/" + row.jc_id} className="mx-1">
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
            // data-bs-toggle="tooltip"
            // data-bs-placement="bottom"
            // title="ลบข้อมูล"
            onClick={() => {
              DeleteApply(row.jc_id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      // sortable: true,
      width: "15%",
      center: true,
    },
  ];
  const [apply, setGetAllApply] = useState([]);
  const [search, setSearch] = useState("");

  // const HiddenToltip = () => {
  //   Tooltip.querySelectorAll("[data-bs-toggle=tooltip]").HiddenToltip;
  // };
  const DeleteApply = async (id) => {
    console.log(id);
    Swal.fire({
      title: "ยืนยันการลบข้อมููล?",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await Delete_ApplyData(id, token);
        console.log(res);
        if (res == "success") {
          Swal.fire("", "ลบข้อมูลสำเร็จ", "success");
          GetData();
        }
      }
    });
  };
  const GetData = async () => {
    const data = await GetAllApply(token);
    setGetAllApply(data);
  };
  const handleSearch = (rows) => {
    console.log(rows);
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
    // Array.from(
    //   document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    // ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  }, []);
  return (
    <>
      {/* {JSON.stringify(apply)} */}
      <div className="px-3 py-4">
        <div className="shadow-lg h-100 rounded-3">
          <nav>
            <div className="d-flex justify-content-between pt-3">
              <div className="my-auto">
                <div className="px-3 py-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการใบสมัคร
                  </h4>
                </div>
              </div>
              <div className="float-end px-3 my-auto">
                <Link to="edit">
                  <button className="Btn_Add_user">เพิ่มใบสมัคร</button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3">
              <div className="rounded-2 " style={{ backgroundColor: "white" }}>
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
                      data={handleSearch(apply)}
                      pagination
                      responsive
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {JSON.stringify(apply)} */}
          <div className="px-3">{/* <DataTable dataSet={apply} /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Manage_register;
