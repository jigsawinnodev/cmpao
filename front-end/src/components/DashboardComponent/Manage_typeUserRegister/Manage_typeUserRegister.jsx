import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
function Manage_typeUserRegister() {
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
          <button
            type="button"
            class="btn btn-warning mx-1"
            onClick={() => {
              EditTypePosition(row.id);
            }}
          >
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button
            type="button"
            class="btn btn-danger mx-1"
            onClick={() => {
              DeleteTypePosition(row.id);
            }}
          >
            <i class="bi bi-trash-fill"></i>
          </button>
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
  const EditTypePosition = (id) => {
    console.log(id);
    Swal.fire({
      position: "top",
      width: "750px",
      title: "เเก้ไขตำเเหน่ง",
      html: `
      <div class="mb-3 text-start">
      <label for="exampleInputEmail1" class="form-label">ชื่อตำแหน่ง</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อตำแหน่ง">
      </div>
            `,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "บันทึก",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });
  };
  const DeleteTypePosition = (id) => {
    console.log(id);
    Swal.fire({
      title: "ยืนยันการลบข้อมูล?",
      text: "คุณต้องการลบข้อมูลนี้หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ยืนยัน",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
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
  const AddUserRegister = () => {
    Swal.fire({
      position: "top",
      width: "750px",
      title: "เพิ่มตำแหน่ง",
      html: `
      <div class="mb-3 text-start">
      <label for="exampleInputEmail1" class="form-label">ชื่อตำแหน่ง</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อตำแหน่ง">
      </div>
            `,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "บันทึก",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
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
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการประเภทของบุคลากรที่สมัคร
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  <a to="add">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        AddUserRegister();
                      }}
                    >
                      เพิ่มใบสมัคร
                    </button>
                  </a>
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

export default Manage_typeUserRegister;
