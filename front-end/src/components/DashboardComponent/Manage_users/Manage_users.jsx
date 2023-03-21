import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";

function Manage_users() {
  const columns = [
    {
      name: "ลำดับ",
      selector: "ลำดับ",
      width: "120px",
      cell: (row) => row.id,
      sortable: true,
    },
    {
      name: "ชื่อ-นามสกุล",
      selector: (row) => row.category,
      width: "170px",
      cell: (row) => row.category,
      sortable: true,
    },
    {
      name: "สิทธิ์การเข้าถึงข้อมูล",
      selector: (row) => row.brand,
      width: "200",
      cell: (row) => row.brand,
      sortable: true,
    },
    {
      name: "หมายเลขโทรศํพท์",
      selector: (row) => row.description,
      width: "200px",
      sortable: true,
    },
    {
      name: "อีเมล",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => row.discountPercentage,
      width: "200px",
    },
    {
      name: "สถานะ",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => row.discountPercentage,
      width: "190px",
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
            Info
          </button>
        </div>
      ),
      sortable: true,
      width: "auto",
    },
  ];
  const [data, setData] = useState([]);
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
      },
    },
    headCells: {
      style: {
        // paddingLeft: "8px", // override the cell padding for head cells
        // paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
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
        console.log(err);
      });
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100 py-3 my-auto m-0">
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
                    <button className="btn btn-outline-primary">
                      เพิ่มข้อมูล
                    </button>
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
                    <DataTable
                      columns={columns}
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

export default Manage_users;
