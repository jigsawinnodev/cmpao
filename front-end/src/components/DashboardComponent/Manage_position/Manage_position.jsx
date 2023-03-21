import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Manage_position.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function Manage_position() {
  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      width: "120px",
      cell: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: "ประเภท",
      selector: (row) => row.category,
      width: "250px",
      cell: (row) => row.category,
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.brand,
      width: "250px",
      cell: (row) => row.brand,
      sortable: true,
      center: true,
    },
    {
      name: "สถานนะ",
      selector: (row) => row.description,
      width: "300px",
      sortable: true,
      center: true,
    },
    {
      name: "เครื่องมือ",
      selector: (row) => row.discountPercentage,
      sortable: true,
      cell: (row) => (
        <div>
          <button
            type="button"
            className="btn btn-warning mx-1"
            onClick={() => EditPosition(row.id)}
          >
            <i className="bi bi-pencil-fill" style={{ color: "white" }}></i>
          </button>
          <button
            type="button"
            class="btn btn-danger mx-1"
            onClick={() => {
              DeletePosition(row.id);
            }}
          >
            <i className="bi bi-trash-fill" style={{ color: "white" }}></i>
          </button>
        </div>
      ),
      width: "auto",
    },
  ];
  const EditPosition = (id) => {
    Swal.fire({
      title: "เเก้ไขข้อมูลตำเเหน่ง",
      position: "top",
      width: "550px",
      html: `<div class="py-2 text-start">
      <label for="exampleInputEmail1" class="form-label">ชื่อตำแหน่ง</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="text-start py-2">
      <label for="exampleInputSelect" class="form-label">ประเภท</label>
      <select class="form-select" aria-label="Default select example">
        <option >Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="text-start py-2">
      <label for="exampleInputSelect" class="form-label">สถานะ</label>
      <select class="form-select" aria-label="Default select example">
        <option >ใช้งาน</option>
        <option value="ไม่ใช้งาน">ไม่ใช้งาน</option>
      </select>
    </div>
    <div class="text-start py-2">
      <label for="exampleInputSelect" class="form-label">เเนบไฟล์</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    `,
      showCancelButton: true,
      confirmButtonColor: "#655DBB",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
    }).then(function () {
      // wait axios
      Swal.fire({
        icon: "success",
        title: "ได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
      });
    });
  };
  const DeletePosition = (id) => {
    console.log(id);
    Swal.fire({
      title: "ยืนยันการลบข้อมูล",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        // wait axios
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const AddPosition = () => {
    Swal.fire({
      title: "เพิ่มตำเเหน่ง",
      html: `<div class="py-2 text-start">
      <label for="exampleInputEmail1" class="form-label">ชื่อตำแหน่ง</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="text-start py-2">
      <label for="exampleInputSelect" class="form-label">ประเภท</label>
      <select class="form-select" aria-label="Default select example">
        <option >Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="text-start py-2">
      <label for="exampleInputSelect" class="form-label">สถานะ</label>
      <select class="form-select" aria-label="Default select example">
        <option >ใช้งาน</option>
        <option value="ไม่ใช้งาน">ไม่ใช้งาน</option>
      </select>
    </div>
    <div class="text-start py-2">
      <label for="exampleInputSelect" class="form-label">เเนบไฟล์</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    `,
      showCancelButton: true,
      width: "750px",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        // wait axios
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="nav px-3 pt-4 pb-2">
              {/* <div>
                <h3 className="dashboard">จัดการข้อมูลตำเเหน่ง</h3>
              </div> */}
              <div className="row w-100 my-auto">
                <div className="col-md-7">
                  <div className="text-end">
                    <h2 className="dashboard m-0" style={{ color: "#655DBB" }}>
                      จัดการข้อมูลตำเเหน่ง
                    </h2>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="float-end">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        AddPosition();
                      }}
                    >
                      เพิ่มใบสมัคร
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12 my-auto">
                    <div className="float-end py-1">
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
                  </div>
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
