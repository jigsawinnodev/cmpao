import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { GetPayment } from "../../../service/api";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
var token = localStorage.getItem("token");
function Manage_money() {
  const GetDataPayment = async () => {
    let res = await GetPayment(token);
    console.log(res);
    setData(res);
  };
  const mockData = [
    {
      id: 1,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "3 เม.ย. 2566",
      dateEnd: "29 เม.ย. 2566",
      countPosition: "99",
      countCancelMoney: "0",
    },
    {
      id: 2,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "3 เม.ย. 2566",
      dateEnd: "4 เม.ย. 2566",
      countPosition: "99",
      countCancelMoney: "0",
    },
    {
      id: 3,
      type: "ข้าราชการ",
      dateStart: "3 เม.ย. 2566",
      dateEnd: "4 เม.ย. 2566",
      countPosition: "99",
      countCancelMoney: "0",
    },
    {
      id: 4,
      type: "ข้าราชการ",
      dateStart: "4 เม.ย. 2566",
      dateEnd: "22 เม.ย. 2566",
      countPosition: "10",
      countCancelMoney: "0",
    },
    {
      id: 5,
      type: "ข้าราชการ",
      dateStart: "31 มี.ค. 2566",
      dateEnd: "1 เม.ย. 2566",
      countPosition: "10",
      countCancelMoney: "0",
    },
    {
      id: 6,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "4 ม.ค. 2566",
      dateEnd: "5 ม.ค. 2566",
      countPosition: "0",
      countCancelMoney: "0",
    },
    {
      id: 7,
      type: "พนักงานจ้างทั่วไป",
      dateStart: "16 ต.ค. 2565",
      dateEnd: "31 ต.ค. 2565",
      countPosition: "0",
      countCancelMoney: "1",
    },
    {
      id: 8,
      type: "ข้าราชการ",
      dateStart: "21 ต.ค. 2565",
      dateEnd: "22 ต.ค. 2565",
      countPosition: "0",
      countCancelMoney: "0",
    },
  ];
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
      // center: true,
    },
    {
      name: "วันที่เริ่มต้น",
      selector: (row) => moment(row.jc_start).add(543, "year").format("ll"),
      width: "15%",
      cell: (row) => moment(row.jc_start).add(543, "year").format("ll"),
      sortable: true,
      // center: true,
    },
    {
      name: "วันที่สิ้นสุด",
      selector: (row) => moment(row.jc_end).add(543, "year").format("ll"),
      cell: (row) => moment(row.jc_end).add(543, "year").format("ll"),
      width: "15%",
      sortable: true,
      // center: true,
    },
    {
      name: "จำนวนตำเเหน่ง",
      selector: (row) => (row.count_position ? row.count_position : 0),
      cell: (row) => (row.count_position ? row.count_position : 0),
      width: "15%",
      sortable: true,
      center: true,
    },
    {
      name: "จำนวนที่ชำระเงิน",
      selector: (row) => row.count_apply,
      cell: (row) => row.count_apply,
      width: "15%",
      sortable: true,
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => (
        <Link to={"payment_check/" + row.jc_id}>
          <button type="button" className="btn btn-info">
            <i className="bi bi-gear" style={{ color: "black" }}></i>
          </button>
        </Link>
      ),
      center: true,
      width: "15%",
    },
  ];
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

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
    GetDataPayment();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-12 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการการชำระเงิน
                  </h4>
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
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      // data={handleSearch(data)}
                      data={data}
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

export default Manage_money;
