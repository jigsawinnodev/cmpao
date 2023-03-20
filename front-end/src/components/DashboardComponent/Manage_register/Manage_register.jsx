import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_register.css";
import { Link } from "react-router-dom";
function Manage_register() {
  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      width: "130px",
      cell: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.category,
      width: "150px",
      cell: (row) => row.category,
      sortable: true,
    },
    {
      name: "วันที่เริ่มต้น",
      selector: (row) => row.brand,
      width: "auto",
      cell: (row) => row.brand,
      sortable: true,
      center: true,
    },
    {
      name: "วันที่สิ้นสุด",
      selector: (row) => row.description,
      width: "180px",
      sortable: true,
      center: true,
    },
    {
      name: "จำนวนตำเเหน่ง",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => row.discountPercentage,
      width: "auto",
      center: true,
    },
    {
      name: "จำนวนผู้สมัคร",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => row.price,
      width: "auto",
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <Link to={"apply_check/" + row.id}>
            <button type="button" className="btn btn-outline-secondary">
              Secondary
            </button>
          </Link>
        </div>
      ),
      sortable: true,
      width: "15%",
    },
  ];
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
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
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-100 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-2">
              <div className="row w-100 my-auto">
                <div className="col-md-7">
                  <div className="text-end">
                    <h2 className="dashboard m-0" style={{ color: "#655DBB" }}>
                      จัดการใบสมัคร
                    </h2>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="float-end">
                    <Link to="edit">
                      <button className="btn btn-outline-primary">
                        เพิ่มใบสมัคร
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div>from</div>
              <div className="input-wrapper px-3 py-1 w-100 float-end">
                <button className="icon">
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
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12">
                    <DataTable
                      columns={columns}
                      data={handleSearch(data)}
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

export default Manage_register;
