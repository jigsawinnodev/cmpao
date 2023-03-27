import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import Loadding from "../../../loadding/loadding";
function Apply_check() {
  let { id } = useParams();
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

  const GetData = async () => {
    Setloadding(true);
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.products);
        Setloadding(false);
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
  const [data, setData] = useState([]);
  const [loadding, Setloadding] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-4">
              <div>
                <h3 className="dashboard">จัดการข้อมูลการสมัคร</h3>
              </div>
            </div>
          </nav>
          <div className="px-3">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <p className="">ประเภท</p>
                  <p className="">พนักงานจ้างทั่วไป</p>
                </div>
              </div>
              <div className="col-md-10 py-2">
                <div className="row">
                  <div className="col-md-2">
                    <div>
                      <p className="">วันที่เริ่มต้น</p>
                      <p className="">4 ม.ค. 2566</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">วันที่สิ้นสุด</p>
                      <p className="">5 ม.ค. 2566</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">จำนวนทั้งหมด</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">ชำระเงินแล้ว</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">รอชำระเงิน</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">เอกสารสมบูรณ์</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">รออนุมัติ</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">แจ้งให้แก้ไข</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <p className="">ยกเลิกการสมัคร</p>
                      <p className="">0 คน</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="py-2">
                  <h5>รายการผู้สมัครงาน</h5>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>เลือกทั้งหมด</option>
                      <option defaultValue="1">One</option>
                      <option defaultValue="2">Two</option>
                      <option defaultValue="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-8">
                    <div className="float-end">
                      <div className="dropdown">
                        <button
                          className="btn btn-success dropdown-toggle mx-1"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          รายงาน
                        </button>

                        <button
                          type="button"
                          className="btn btn-outline-primary mx-1"
                        >
                          เพิ่มผู้สมัคร
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-3 pb-1">
                    <div className="input-wrapper my-auto">
                      <button className="iconAddregister">
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
                  <div className="col-md-12 ">
                    <DataTable
                      columns={columns}
                      data={handleSearch(data)}
                      pagination
                      responsive
                      progressPending={loadding}
                      progressComponent={<Loadding />}
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

export default Apply_check;
