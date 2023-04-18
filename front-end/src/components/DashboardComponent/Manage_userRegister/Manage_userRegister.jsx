import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";

import { DeleteMember, GetMemberAll } from "../../../service/api";
import Swal from "sweetalert2";
import { Tooltip } from "bootstrap";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
function Manage_userRegister() {
  // var tooltipTriggerList = [].slice.call(
  //   document.querySelectorAll("[data-bs-toggle=tooltip]")
  // );

  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new Tooltip(tooltipTriggerEl);
  // });

  const columns = [
    {
      name: "ลำดับ",
      selector: (index) => index + 1,
      width: "10%",
      cell: (row, index) => index + 1,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อ-นามสกุล",
      selector: (row) =>
        row.prename + " " + row.m_firstname + " " + row.m_lastname,
      width: "20%",
      cell: (row) => row.prename + " " + row.m_firstname + " " + row.m_lastname,
      sortable: true,
    },
    {
      name: "หมายเลขโทรศัพท์",
      selector: (row) => row.m_phone,
      width: "15%",
      cell: (row) => row.m_phone,
      sortable: true,
    },
    {
      name: "อีเมล",
      selector: (row) => row.m_email,
      width: "20%",
      cell: (row) => (row.m_email ? row.m_email : "-"),
      sortable: true,
    },
    {
      name: "สถานะการใช้งาน",
      selector: (row) => moment(row.login_time).add(543, "year").format("LL"),
      sortable: true,
      cell: (row) => moment(row.login_time).add(543, "year").format("LL"),
      width: "15%",
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <Link to={"add/" + row.m_id}>
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
          <button
            type="button"
            className="btn btn-danger mx-1"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="ลบช้อมูล"
            onClick={() => {
              Delete_Members(row.m_id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "20%",
    },
  ];
  const [member, setMember] = useState([]);
  const [search, setSearch] = useState("");

  const Delete_Members = (id) => {
    console.log(id);
    Swal.fire({
      title: "ยืนยันการลบข้อมูล?",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
          () => {
            DeleteMember(id);
            Get_tbl_Member();
          }
        );
      }
    });
  };
  const handleSearch = (rows) => {
    return rows.filter((row) => {
      if (
        row.m_firstname.indexOf(search) > -1 ||
        row.m_lastname.indexOf(search) > -1 ||
        row.prename.indexOf(search) > -1 ||
        row.m_phone.toString().indexOf(search) > -1 ||
        row.m_email.indexOf(search) > -1 ||
        moment(row.login_time)
          .add(543, "year")
          .format("LL")
          .toString()
          .indexOf(search) > -1 ||
        moment(row.login_time)
          .add(543, "year")
          .format("ll")
          .toString()
          .indexOf(search) > -1
      ) {
        return true;
      }
    });
  };
  const Get_tbl_Member = async () => {
    const GetMember = await GetMemberAll();
    setMember(GetMember);
  };
  useEffect(() => {
    Get_tbl_Member();
  }, [member]);
  return (
    <>
      {/* {JSON.stringify(member)} */}
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการผู้สมัคร
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  <Link to="add">
                    <button className="Btn_Add_user">เพิ่มใบสมัคร</button>
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
                      data={handleSearch(member)}
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

export default Manage_userRegister;
