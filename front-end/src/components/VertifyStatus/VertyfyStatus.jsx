import React from "react";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
import Style from "./VertyfyStatus.module.css";
moment.locale("th");

function VertyfyStatus() {
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
              รายละเอียดงานสถานนะการสมัคร
            </h3>
          </div>
          {/* <div
            className="text-center mx-auto py-2"
            style={{ backgroundColor: "#BFBFBF" }}
          >
            <h5 className="m-0 py-4">รายละเอียดงานสถานนะการสมัคร</h5>
          </div> */}
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
                <tr className={Style.tr}>
                  <td className="text-center my-auto">
                    {moment().add(543, "year").format("LL")}
                  </td>
                  <td>พนักงานธุรการ</td>
                  <td className="text-center">พนักงานจ้างทั่วไป</td>
                  <td
                    style={{ color: "green" }}
                    className="fw-bold text-center"
                  >
                    ชำระเงินสำเร็จ
                  </td>
                  <td className="text-center">77301</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    {moment().add(543, "year").format("LL")}
                  </td>
                  <td>พนักงานการเกษตร</td>
                  <td className="text-center">พนักงานราชการ</td>
                  <td style={{ color: "red" }} className="fw-bold text-center">
                    ยังไม่ได้ชำระเงิน
                  </td>
                  <td className="text-center">441280</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    {moment().add(543, "year").format("LL")}
                  </td>
                  <td>พนักงานดับเพลิง</td>
                  <td className="text-center">พนักงานราชการ</td>
                  <td
                    style={{ color: "green" }}
                    className="fw-bold text-center"
                  >
                    ชำระเงินสำเร็จ
                  </td>
                  <td className="text-center">92730</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    {moment().add(543, "year").format("LL")}
                  </td>
                  <td>เจ้าหน้าที่ประชาสัมพันธ์</td>
                  <td className="text-center">พนักงานจ้างทั่วไป</td>
                  <td
                    style={{ color: "green" }}
                    className="fw-bold text-center"
                  >
                    ชำระเงินสำเร็จ
                  </td>
                  <td className="text-center">65807</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    {moment().add(543, "year").format("LL")}
                  </td>
                  <td>พนักงานคอมพิวเตอร์</td>
                  <td className="text-center">พนักงานจ้างทั่วไป</td>
                  <td style={{ color: "red" }} className="fw-bold text-center">
                    ยังไม่ได้ชำระเงิน
                  </td>
                  <td className="text-center">23114</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning">
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-3 pb-2">
              <p style={{ color: "red" }}>
                หมายเหตุ เมื่อชำระเงินแล้ว จะไม่มีการคืนเงินค่าสมัครในทุกกรณี
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VertyfyStatus;
