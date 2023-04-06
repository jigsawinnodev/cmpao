import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
function Manage_document() {
  const mockData = [
    {
      id: 1,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "3 เม.ย. 2566",
      dateEnd: "4 เม.ย. 2566",
      countPosition: 10,
      numberRegister: 0,
      // type :
    },
    {
      id: 2,
      type: "ข้าราชการ",
      dateStart: "3 เม.ย. 2566",
      dateEnd: "4 เม.ย. 2566",
      countPosition: 10,
      numberRegister: 0,
      // type :
    },
    {
      id: 3,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "3 เม.ย. 2566",
      dateEnd: "29 เม.ย. 2566",
      countPosition: 99,
      numberRegister: 0,
      // type :
    },
    {
      id: 4,
      type: "ข้าราชการ",
      dateStart: "4 เม.ย. 2566",
      dateEnd: "22 เม.ย. 2566",
      countPosition: 10,
      numberRegister: 0,
      // type :
    },
    {
      id: 5,
      type: "ข้าราชการ",
      dateStart: "31 มี.ค. 2566",
      dateEnd: "1 เม.ย. 2566",
      countPosition: 10,
      numberRegister: 0,
      // type :
    },
    {
      id: 6,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "4 ม.ค. 2566",
      dateEnd: "5 ม.ค. 2566",
      countPosition: 0,
      numberRegister: 0,
      // type :
    },
    {
      id: 7,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "16 ต.ค. 2565",
      dateEnd: "31 ต.ค. 2565",
      countPosition: 0,
      numberRegister: 2,
      // type :
    },
    {
      id: 8,
      type: "ข้าราชการ",
      dateStart: "21 ต.ค. 2565",
      dateEnd: "22 ต.ค. 2565",
      countPosition: 0,
      numberRegister: 0,
      // type :
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
      name: "ประเภท",
      selector: (row) => row.type,
      width: "15%",
      cell: (row) => row.type,
      sortable: true,
    },
    {
      name: "วันที่เริ่มต้น",
      selector: (row) => row.dateStart,
      width: "15%",
      cell: (row) => row.dateStart,
      sortable: true,
      center: true,
    },
    {
      name: "วันที่สิ้นสุด",
      selector: (row) => row.dateEnd,
      cell: (row) => row.dateEnd,
      width: "15%",
      sortable: true,
      center: true,
    },
    {
      name: "จำนวนตำเเหน่ง",
      selector: (row) => row.countPosition,
      sortable: true,
      cell: (row) => row.countPosition,
      width: "15%",
      center: true,
    },
    {
      name: "จำนวนผู้สมัคร",
      selector: (row) => row.numberRegister,
      sortable: true,
      cell: (row) => row.numberRegister,
      width: "15%",
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <Link to={"apply_check/" + row.id} className="mx-1">
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
          <Link to={"add/" + row.id} className="mx-1">
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
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการประเภทของบุคลากรที่สมัคร
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  <Link to="add">
                    <button
                      className="Btn_Add_user"
                      onClick={() => {
                        AddUserRegister();
                      }}
                    >
                      เพิ่มใบสมัคร
                    </button>
                    {/* <button className="Btn_Add_user">เพิ่มข้อมูล</button> */}
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="row w-100  pt-3 pb-4 m-0">
            <div className="col-md-12">
              <div className="input-wrapper px-3 py-1 w-100 float-end">
                <button className="icon">
                  <i className="bi bi-search" style={{ color: "white" }}></i>
                </button>
                <input
                  placeholder="ค้นหา"
                  className="input"
                  name="text"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-12">
              <DataTable
                columns={columns}
                // data={handleSearch(data)}
                data={mockData}
                pagination
                responsive
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage_document;
