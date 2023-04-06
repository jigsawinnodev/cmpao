import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Add_resgister.css";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/th";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { Link, NavLink } from "react-router-dom";
import { GetAllApply } from "../../../../service/api";
function Add_register() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [positionType, SetpositionType] = useState([]);
  const [G_Allapply, setGetAllApply] = useState([]);
  const GetData = async () => {
    const data = await GetAllApply();
    console.log(data);
    setGetAllApply(data);
  };

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
          <Link to={"apply_check/" + row.jc_id} className="mx-1">
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
          <Link to={"apply_check/" + row.jc_id} className="mx-1">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="ลบข้อมูล"
            >
              <i className="bi bi-trash"></i>
            </button>
          </Link>
        </div>
      ),
      sortable: true,
      width: "15%",
      center: true,
    },
  ];

  const GetType_Position = () => {
    axios
      .get("http://localhost:9500/api/GetType_position")
      .then((res) => {
        SetpositionType(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handleSearch = (rows) => {
    return rows.filter((row) => {
      // if (!search) return true;
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
    GetType_Position();
  }, []);
  return (
    <>
      <div className="px-4 py-3">
        <div className="shadow">
          <div className="text-start pt-4 pb-3 px-3">
            <h3 /*style={{ color: "#655DBB" }}*/ className="fw-bold">
              เพิ่มใบสมัคร
            </h3>
          </div>
          <div className="row px-3">
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">ประเภท</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>เลือก</option>
                  {positionType.map((val, idx) => (
                    <option key={idx} value={val.id}>
                      {val.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">วันที่เริ่ม</label>
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
              {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                showIcon
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={50}
                locale={locale}
                dateFormat="dd/MM/yyyy"
                className="w-100 form-control"
              /> */}
            </div>
            <div className="col-md-4">
              <label className="form-label">วันที่สิ้นสุด</label>
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
            <div className="col-md-12 pb-4">
              <div className="float-end pt-2">
                <button className="button_Add_Regiser mx-1">
                  เพิ่มใบสมัคร
                </button>
              </div>
            </div>
            <div className="col-md-12 my-auto">
              <div className="d-flex justify-content-between">
                <div className="py-3">
                  <h4 className="m-0">รายการตำแหน่งที่เปิดรับสมัคร</h4>
                </div>
                <div className="input-wrapper_Register float-end my-auto">
                  <button className="icon_Register">
                    <i className="bi bi-search" style={{ color: "white" }}></i>
                  </button>
                  <input
                    placeholder="ค้นหา"
                    className="input_Register"
                    name="text"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <DataTable
                columns={columns}
                data={handleSearch(G_Allapply)}
                pagination
                responsive
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
    </>
  );
}

export default Add_register;
