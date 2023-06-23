import React, { useEffect, useState } from "react";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Getpostion_injob } from "../../service/for_user";
const token = localStorage.getItem("token");
function Detailposition() {
  const { id } = useParams();
  const [potisionFormWork, setpositionFormWork] = useState([]);
  const FetData = async () => {
    const res = await Getpostion_injob(id, token);
    setpositionFormWork(res);
    console.log(res);
  };
  useEffect(() => {
    FetData();
  }, []);
  return (
    <>
      <div className="">
        <div
          className="px-md-0 my-2 shadow rounded"
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
            <h5 className="m-0 px-3 py-md-3 fw-bold text-center my-auto">
              ตำแหน่งงานที่รับสมัคร (ตั้งแต่วันที่ 25 เม.ย. 2566 - 26 เม.ย.
              2566)
            </h5>
          </div>

          <div className="px-3 py-2">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    ประเภท พนักงานจ้างผู้เชี่ยวชาญพิเศษ จำนวน 2 ตำแหน่ง รวม 2
                    อัตรา
                  </th>
                </tr>
              </thead>
              <tbody>
                {potisionFormWork.map((value, idx) => {
                  //   console.log(value);
                  return (
                    <tr key={idx}>
                      <td>
                        <NavLink
                          to={`/register/DetailWork/${value.job_id}`}
                          className="text-decoration-none"
                          // key={idx}
                        >
                          <div className="list-group-item py-2">
                            <div className="row m-0">
                              <div className="col-md-1 text-center my-auto">
                                <i
                                  className="bi bi-person-fill"
                                  style={{ fontSize: "25px" }}
                                ></i>
                              </div>
                              <div className="col-md-7 my-auto text-center text-md-start">
                                <p
                                  className="m-0 my-auto"
                                  style={{ fontSize: "18px" }}
                                >
                                  {idx + 1 + ". " + value.p_name}
                                </p>
                                {/* <p
                                  className="m-0 fw-bold"
                                  style={{ color: "#009e22", fontSize: "14px" }}
                                >
                                  {value.p_name}
                                </p> */}
                              </div>
                              <div className="col-md-4 text-center my-auto">
                                <p className="m-0">
                                  {"จำนวน" +
                                    " " +
                                    value.job_amount +
                                    " " +
                                    "ตำแหน่ง"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="row m-0">
              <div className="col-md-12">
                <div className="py-3">
                  {/* <nav aria-label="Page navigation">
                    <ul className="pagination float-end">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailposition;
