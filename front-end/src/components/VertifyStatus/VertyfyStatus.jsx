import React, { useEffect, useState } from "react";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
import Style from "./VertyfyStatus.module.css";
moment.locale("th");
import { Vertify_token, ListRegister } from "../../service/for_user";
// ListRegister
import { useNavigate } from "react-router-dom";
var token = localStorage.getItem("token");
function VertyfyStatus() {
  var navigate = useNavigate();
  const [dataVertify, setDataVertify] = useState({});
  const [listJobRegister, setListJobRegister] = useState([]);
  const Verifytoken = async () => {
    let resVerify = await Vertify_token(token);
    if (resVerify.status == true) {
      setDataVertify(resVerify.data);
      FetData(resVerify.data);
    } else {
      navigate("/");
    }
  };
  const FetData = async (data) => {
    let res = await ListRegister(token, data.m_id);
    // console.log(res);
    setListJobRegister(res);
  };

  const CheckStatusInTable = (data) => {
    if (data.app_status == 99) {
      return (
        <p className="m-0 " style={{ color: "#ED5652" }}>
          ยกเลิกการสมัคร
        </p>
      );
    } else if (data.app_status == 0) {
      return (
        <p className="m-0 " style={{ color: "#FF8A00" }}>
          ระหว่างดำเนินการพิจารณา
        </p>
      );
    } else if (data.app_status == 1) {
      return (
        <p className="m-0 " style={{ color: "#32BC42" }}>
          เอกสารครบถ้วน
        </p>
      );
    } else if (data.app_status == 2) {
      return (
        <p className="m-0 " style={{ color: "#FF8A00" }}>
          แจ้งให้แก้ไข
        </p>
      );
    } else if (data.app_status == 3) {
      return (
        <p className="m-0 " style={{ color: "#ED5652" }}>
          ไม่อนุมัติ
        </p>
      );
    } else {
      return <p style={{ color: "#FF8A00" }}>รออนุมัติ</p>;
    }
  };
  useEffect(() => {
    Verifytoken();
  }, []);
  return (
    <>
      <div className="">
        <div
          className="container-fluid px-md-0 my-2 shadow rounded"
          style={{ backgroundColor: "white" }}
        >
          <div className="my-auto py-0 pt-md-3">
            <p
              className="text-end px-md-3 m-0 fw-bold px-3 py-3 px-md-0 py-md-0"
              style={{ fontSize: "15px" }}
            >
              วันที่ {moment().add(543, "year").format("LL")}
            </p>
          </div>
          <div>
            <h3 className="m-0 px-3 py-md-3 fw-bold text-center my-auto">
              รายละเอียดงานสถานนะการสมัคร{" "}
              {JSON.stringify(listJobRegister.length)}
            </h3>
          </div>
          {listJobRegister.length > 0 ? (
            <div className="px-3">
              <table className="table table-bordered border-gray">
                <thead>
                  <tr className="text-center">
                    <th scope="col">วันที่สมัคร</th>
                    <th scope="col">ตำเเหน่งงานที่สมัคร</th>
                    <th scope="col">ประเภทพนักงาน</th>
                    <th scope="col">สถานะ</th>
                    <th scope="col">เลขประจำตัวสอบ</th>
                    <th scope="col">เครื่องมือ</th>
                  </tr>
                </thead>
                <tbody>
                  {listJobRegister.map((value, idx) => {
                    console.log(value);
                    return (
                      <tr className={Style.tr} key={idx}>
                        <td className="text-center my-auto">
                          {moment(value.created_date).format("LL")}
                        </td>
                        <td>{value.p_name}</td>
                        <td className="text-center">{value.NAME}</td>
                        <td className="fw-bold text-center">
                          {CheckStatusInTable(value)}
                        </td>
                        <td className="text-center">77301</td>
                        <td className="text-center">
                          <button type="button" className="btn btn-warning">
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="px-3 pb-2">
                <p style={{ color: "red" }}>
                  หมายเหตุ เมื่อชำระเงินแล้ว จะไม่มีการคืนเงินค่าสมัครในทุกกรณี
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h4 className="py-3">ยังไม่มีรายการ</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default VertyfyStatus;
