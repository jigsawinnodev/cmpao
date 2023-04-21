import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { GetAll_user, ConvertTypeDate } from "../../../service/api";
import { Tooltip } from "bootstrap";
import Swal from "sweetalert2";
import "./Manage_users.css";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import { Delete_user } from "../../../service/api";
function Manage_users() {
  // var tooltipTriggerList = [].slice.call(
  //   document.querySelectorAll("[data-bs-toggle=tooltip]")
  // );

  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new Tooltip(tooltipTriggerEl);
  // });
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
      name: "ชื่อ-นามสกุล",
      selector: (row) => {
        return (
          row.prename_name + " " + row.user_firstname + " " + row.user_lastname
        );
      },
      width: "20%",
      cell: (row) => {
        return (
          row.prename_name + " " + row.user_firstname + " " + row.user_lastname
        );
      },
      sortable: true,
    },
    {
      name: "หมายเลขโทรศํพท์",
      selector: (row) => row.user_phone,
      width: "15%",
      cell: (row) => row.user_phone,
      sortable: true,
    },
    {
      name: "อีเมล",
      selector: (row) => row.user_email,
      sortable: true,
      cell: (row) => row.user_email,
      width: "20%",
    },

    {
      name: "สถานะ",
      selector: (row) => {
        return row.login_time
          ? moment(row.login_time).add(543, "year").format("ll")
          : "-";
      },
      sortable: true,
      cell: (row) => {
        return row.login_time
          ? moment(row.login_time).add(543, "year").format("ll")
          : "-";
      },
      width: "15%",
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <Link to={"add/" + row.user_id}>
            <button
              type="button"
              className="btn btn-warning mx-1"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="เเก้ไขข้อมูล"
            >
              <i className="bi bi-pencil"></i>
            </button>
          </Link>
          {/* <button type="button" className="btn btn-outline-warning mx-1">
            เเก้ไขข้อมูล
          </button> */}
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={() => {
              DeleteData(row.user_id);
            }}
            // data-bs-toggle="tooltip"
            // data-bs-placement="right"
            // title="ลบข้อมูล"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "20%",
    },
  ];
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (rows) => {
    // console.log(rows);
    return rows.filter((row) => {
      // console.log(row);
      if (
        row.prename_name.indexOf(search) > -1 ||
        row.user_firstname.indexOf(search) > -1 ||
        row.user_lastname.indexOf(search) > -1 ||
        row.user_phone.toString().indexOf(search) > -1 ||
        row.login_time.toString().indexOf(search) > -1 ||
        row.user_email.toString().indexOf(search) > -1
      ) {
        return true;
      }
    });
  };

  const DeleteData = (id) => {
    // console.log(id);
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
        let res = await Delete_user(id);
        // console.log(res);
        if (res.status == "success") {
          Swal.fire("ลบข้อมูลเรียบร้อย!", "", "success");
        }
      }
    });
  };
  const GetData = async () => {
    let data = await GetAll_user();
    setUser(data.data);
  };

  useEffect(() => {
    GetData();
  }, [user]);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100 pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการผู้ใช้งาน
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  <Link to="add">
                    <button className="Btn_Add_user">เพิ่มข้อมูล</button>
                  </Link>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data={handleSearch(user)}
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

export default Manage_users;
