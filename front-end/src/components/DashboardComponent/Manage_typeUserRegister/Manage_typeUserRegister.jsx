import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import axios from "axios";
import {
  GetType_position,
  Insert_position,
  Delete_type_position,
} from "../../../service/api";
function Manage_typeUserRegister() {
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
      name: "ชื่อตำเเหน่ง",
      selector: (row) => row.name,
      width: "40%",
      cell: (row) => row.name,
      sortable: true,
    },

    {
      name: "เครื่องมือ",
      selector: (row) => (
        <div className="">
          <button
            type="button"
            className="btn btn-warning mx-1"
            onClick={() => {
              EditTypePosition(row);
            }}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1"
            onClick={() => {
              DeleteTypePosition(row.id);
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      ),
      sortable: true,
      width: "50%",
    },
  ];
  const [DataTypePosition, setDataTypePosition] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const GetData = async () => {
    let response = await GetType_position();
    console.log(response);
    setDataTypePosition(response);
  };
  const EditTypePosition = (data) => {
    // console.log(data.name);
    setName(data.name);
    Swal.fire({
      width: "750px",
      title: "เเก้ไขตำเเหน่ง",
      html: `
      <div class="mb-3 text-start">
      <label for="exampleInputEmail1" class="form-label">ชื่อตำแหน่ง</label>
      <input type="text" class="form-control" id="edit_name" aria-describedby="emailHelp" placeholder="ชื่อตำแหน่ง">
      </div>`,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "บันทึก",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      console.log(result);
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
        Delete_type_position(id);
        GetData();
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
      // position: "center",
      width: "750px",
      title: "เพิ่มตำแหน่ง",
      html: `
      <div class="mb-3 text-start">
      <label for="exampleInputEmail1" class="form-label">ชื่อตำแหน่ง</label>
      <input type="text" class="form-control" id="nameInSert" aria-describedby="emailHelp" placeholder="ชื่อตำแหน่ง">
      </div>`,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "บันทึก",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#nameInSert").value;
        // console.log(name);
        return { name: name };
      },
    }).then((result) => {
      Insert_position(result.value.name);
      GetData();
    });
  };
  useEffect(() => {
    GetData();
  }, [DataTypePosition]);
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
                      className="Btn_Add_user"
                      onClick={() => {
                        AddUserRegister();
                      }}
                    >
                      เพิ่มใบสมัคร
                    </button>
                    {/* <button className="Btn_Add_user">เพิ่มข้อมูล</button> */}
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
                    <div className="input-wrapper px-3 py-1 w-100 float-end">
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
                      data={handleSearch(DataTypePosition)}
                      // data={morkData}
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
