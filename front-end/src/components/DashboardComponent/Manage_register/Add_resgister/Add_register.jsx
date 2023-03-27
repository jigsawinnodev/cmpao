import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Add_resgister.css";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
function Add_register() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [positionType, SetpositionType] = useState([]);
  const days = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "mm/dd/yyyy",
    },
  };
  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      width: "7%",
      cell: (row) => row.id,
      sortable: true,
    },
    {
      name: "ตำเเหน่ง",
      selector: (row) => row.category,
      width: "20%",
      cell: (row) => row.category,
      sortable: true,
    },
    {
      name: "รหัสประจำตำเเหน่ง",
      selector: (row) => row.brand,
      width: "23%",
      cell: (row) => row.brand,
      sortable: true,
    },
    {
      name: "จำนวน",
      selector: (row) => row.description,
      width: "15%",
      sortable: true,
    },
    {
      name: "เอกสารเเนบ",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => row.discountPercentage,
      width: "15%",
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#7B8FA1", color: "white" }}
          >
            จัดการข้อมูลผู้สมัคร
          </button>
        </div>
      ),
      sortable: true,
      width: "auto",
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
  const GetData = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
        // $("#example").DataTable();
      })
      .catch((err) => {
        // console.log(err);
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

  useEffect(() => {
    GetData();
    GetType_Position();
  }, []);
  return (
    <>
      <div className="px-4 py-3">
        <div className="shadow">
          <div className="text-center pt-4 pb-3">
            <h2 style={{ color: "#655DBB" }}>เพิ่มใบสมัคร</h2>
          </div>
          <div className="row px-3">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  ประเภท
                </label>
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
              <label htmlFor="exampleInputDateStart" className="form-label">
                วันที่เริ่ม
              </label>
              <DatePicker
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
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="exampleInputDateStart" className="form-label">
                วันที่สิ้นสุด
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                showIcon
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={50}
                locale={locale}
                dateFormat="dd/MM/yyyy"
                className="w-100 form-control"
              />
            </div>
            <div className="col-md-12 pb-4">
              <div className="float-end pt-2">
                <button type="button" className="btn btn-outline-success">
                  เพิ่มใบสมัคร
                </button>
              </div>
            </div>
            <div className="col-md-12 my-auto">
              <div className="d-flex justify-content-between">
                <div className="py-3">
                  <h3 className="m-0">รายการตำแหน่งที่เปิดรับสมัคร</h3>
                </div>
                <div className="input-wrapper my-auto">
                  <button className="iconAddregister">
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
            </div>
            <div className="col-md-12">
              <DataTable
                columns={columns}
                data={handleSearch(data)}
                pagination
                responsive
              />
            </div>
            <div className="col-md-12">
              <div className="float-end py-2">
                <button type="button" className="btn btn-outline-success mx-1">
                  บันทึก
                </button>
                <button type="button" className="btn btn-outline-primary mx-1">
                  ย้อนกลับ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_register;
