import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_position.css";
function Manage_position() {
  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      width: "120px",
      cell: (row) => row.id,
      sortable: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.category,
      width: "250px",
      cell: (row) => row.category,
      sortable: true,
    },
    {
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.brand,
      width: "250px",
      cell: (row) => row.brand,
      sortable: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => row.description,
      width: "300px",
      sortable: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => (
        <div>
          <button type="button" class="btn btn-warning mx-1">
            <i class="bi bi-pencil-fill" style={{ color: "white" }}></i>
          </button>
          <button type="button" class="btn btn-danger mx-1">
            <i class="bi bi-trash-fill" style={{ color: "white" }}></i>
          </button>
        </div>
      ),
      width: "auto",
    },
  ];
  const [data, setData] = useState([]);
  const GetData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        console.log(res.data.products);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                <h3 className="dashboard">จัดการข้อมูลตำเเหน่ง</h3>
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

export default Manage_position;
