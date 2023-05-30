import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DataTable from "react-data-table-component";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
function Manage_search() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    ค้นหาข้อมูล
                  </h4>
                </div>
              </div>
              <div className="col-md-12 px-4">
                <div className="row">
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ปี พ.ศ.
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>2566</option>
                        {
                          
                        }
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        เพศ
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>ทั้งหมด</option>
                        <option value={"ชาย"}>ชาย</option>
                        <option value={"หญิง"}>หญิง</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ประเภท
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>ทั้งหมด</option>
                        <option value={"ชาย"}>พนักงานจ้างทั่วไป</option>
                        <option value={"หญิง"}>ข้าราชการ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
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
                      >
                        <option>ทั้งหมด</option>
                        <option value={"ชาย"}>พนักงานจ้างทั่วไป</option>
                        <option value={"หญิง"}>ข้าราชการ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        เกี่ยวกับ
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>ใบสมัคร</option>
                        <option value={"ชำระเงิน"}>ชำระเงิน</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        สถานะ
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>เเสดงทั้งหมด</option>
                        <option value={"ชำระเงิน"}>รออนุมัติ</option>
                        <option value={"ชำระเงิน"}>เเจ้งเเก้ไข</option>
                        <option value={"ชำระเงิน"}>เอกสารสมบูรณ์</option>
                        <option value={"ชำระเงิน"}>ยกเลิกการสมัคร</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ผลการสอบ
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>เเสดงทั้งหมด</option>
                        <option value={"ผ่าน"}>ผ่าน</option>
                        <option value={"ไม่ผ่าน"}>ไม่ผ่าน</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        อายุ
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ระหว่างวันที่
                      </label>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="th"
                      >
                        <DatePicker
                          className="form-control"
                          label="วัน/เดือน/ปี"
                          inputFormat="dd-MM-yyyy"
                          value={startDate}
                          onChange={(newValue) => {
                            setStartDate(newValue);
                          }}
                          slotProps={{ textField: { size: "small" } }}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ถึงวันที่
                      </label>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="th"
                      >
                        <DatePicker
                          className="form-control"
                          label="วัน/เดือน/ปี"
                          inputFormat="dd-MM-yyyy"
                          value={endDate}
                          onChange={(newValue) => {
                            setEndDate(newValue);
                          }}
                          slotProps={{ textField: { size: "small" } }}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        ชื่อ
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ชื่อผู้สมัคร"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        นามสกุล
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="นามสกุลผู้สมัคร"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 mt-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        เลขบัตรประจำตัวประชาชน
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="เลขบัตรประจำตัวประชาชนผู้สมัคร"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button className="Btn_Add_user">
                      <i className="bi bi-search mx-1"></i>ค้นหา
                    </button>
                  </div>
                  <div className="col-md-12">
                    <div className="input-wrapper px-3 py-1 w-100 float-end">
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
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data=""
                      pagination
                      responsive
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Manage_search;
