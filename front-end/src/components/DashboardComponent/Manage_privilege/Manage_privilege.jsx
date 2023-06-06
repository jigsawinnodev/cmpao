import React, { useEffect, useState, useRef } from "react";
import "./Manage_privilege.css";
import {
  GetMenuAdmin,
  GetAllpermissions,
  GetCheckAllPermissions,
  EditCheckAllPermissions,
} from "../../../service/api";
var token = localStorage.getItem("token");
import axios from "axios";
function Manage_privilege() {
  const [MenuAdmin, SetMenuAdmin] = useState([]);
  const [Allpermissions, SetAllpermissions] = useState([]);
  const [CheckAllPermissions, SetCheckAllPermissions] = useState([]);
  const [Shwodata, SetShowData] = useState([]);
  const [CheckArray, SetCheckArray] = useState([]);
  const [data, setData] = useState([]);
  const GetPermissions = async () => {
    let res = await GetCheckAllPermissions(token);
    SetCheckAllPermissions(res);
  };

  const handleOnChangeCheck = (e) => {
    let data = e.target.name;
    const splitdata = data.split("_");
    EditCheckAllPermissions(splitdata, token);
    GetPermissions();
  };

  const GetMenu = async () => {
    const res = await GetMenuAdmin(token);
    const resGetAllpermissions = await GetAllpermissions(token);
    SetAllpermissions(resGetAllpermissions);
    SetMenuAdmin(res);
  };
  useEffect(() => {
    GetMenu();
    GetPermissions();
  }, []);
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100 pt-3 pb-4 m-0">
              <div className="col-md-12 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการสิทธิ์
                  </h4>
                </div>
              </div>
            </div>
          </nav>

          <div className="">
            {/* {JSON.stringify(CheckAllPermissions)} */}
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  {/* <form onSubmit={HandelSubmitForm}> */}
                  <div className="col-md-12 px-3 pb-3">
                    <table className="table-lg">
                      <thead
                        style={{
                          backgroundColor: "#eaecf4",
                          color: "#6e707e",
                        }}
                      >
                        <tr>
                          <th className="text-center">ลำดับ</th>
                          <th className="text-start">ชื่อเมนู</th>
                          {Allpermissions.map((role, idx) => {
                            return (
                              <th className="text-center" key={idx}>
                                {role.permiss_name}
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {MenuAdmin.map((menu, idx) => {
                          return (
                            <tr className="border-bottom" key={idx + 1}>
                              <td className="text-center align-middle">
                                {idx + 1}
                              </td>
                              <td className="align-middle">
                                <div>
                                  <p className="m-0">{menu.adm_name}</p>
                                </div>
                              </td>
                              {Allpermissions.map((role, idx) => {
                                // console.log(role);
                                return (
                                  <td className="text-center" key={idx}>
                                    <div className="text-center">
                                      <div className="checkbox-wrapper-31">
                                        <input
                                          name={`${role.permiss_id}_${menu.adm_id}`}
                                          value={role.permiss_id}
                                          defaultChecked={
                                            CheckAllPermissions[
                                              role?.permiss_id
                                            ][menu?.adm_id] === 1
                                              ? true
                                              : false
                                          }
                                          onChange={(e) => {
                                            handleOnChangeCheck(e);
                                          }}
                                          type="checkbox"
                                        />
                                        <svg viewBox="0 0 35.6 35.6">
                                          <circle
                                            className="background"
                                            cx="17.8"
                                            cy="17.8"
                                            r="17.8"
                                          />
                                          <circle
                                            className="stroke"
                                            cx="17.8"
                                            cy="17.8"
                                            r="14.37"
                                          />
                                          <polyline
                                            className="check"
                                            points="11.78 18.12 15.55 22.23 25.17 12.87"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* <div className="text-end py-4">
                        <button type="submit" className="button_Regiser mx-1">
                          บันทึก
                        </button>
                        <button className="button_Back">รีเซ็ต</button>
                      </div> */}
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage_privilege;
