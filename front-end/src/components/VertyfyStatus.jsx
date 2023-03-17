import React from "react";

function VertyfyStatus() {
  return (
    <>
      <div className="px-md-5">
        <div
          className="container-fluid px-md-0 my-4 shadow rounded"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="text-center mx-auto py-2"
            style={{ backgroundColor: "#BFBFBF" }}
          >
            <h5 className="m-0">รายละเอียดงานสถานนะการสมัคร</h5>
          </div>
          <div className="container px-3 pt-4">
            <table className="table table-bordered border-gray">
              <thead>
                <tr className="text-center">
                  <th scope="col">วันที่สมัคร</th>
                  <th scope="col">ตำเเหน่งงานที่สมัคร</th>
                  <th scope="col">สังกัด</th>
                  <th scope="col">ประเภทพนักงาน</th>
                  <th scope="col">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default VertyfyStatus;
