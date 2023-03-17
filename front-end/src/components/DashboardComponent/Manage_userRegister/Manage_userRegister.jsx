import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
function Manage_userRegister() {
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
      width: "200px",
      cell: (row) => row.category,
      sortable: true,
    },
    {
      name: "หมายเลขโทรศัพท์",
      selector: (row) => row.brand,
      width: "250px",
      cell: (row) => row.brand,
      sortable: true,
    },
    {
      name: "อีเมล",
      selector: (row) => row.description,
      width: "250px",
      sortable: true,
    },
    {
      name: "สถานะการใช้งาน",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => row.discountPercentage,
      width: "200px",
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
            <div className="nav px-3 pt-4 pb-2">
              <div>
                <h3 className="dashboard">จัดการใบสมัคร</h3>
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

export default Manage_userRegister;
