import React, { useEffect, useState } from "react";
import Logo4 from "../../assets/img/icon_4.png";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Style from "./EmptyWork.module.css";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
import Swal from "sweetalert2";
moment.locale("th");
import { Getjob_user } from "../../service/for_user";
import { Vertify_token, CheckRegisterInJob } from "../../service/for_user";
import { useNavigate } from "react-router-dom";
var token = localStorage.getItem("token");
function EmptyWork() {
  var navigate = useNavigate();
  const [dataVertify, setDataVertify] = useState({});
  const Verifytoken = async () => {
    const token = localStorage.getItem("token");
    const resVerify = await Vertify_token(token);
    if (resVerify.status) {
      setDataVertify(resVerify.data);
    } else {
      navigate("/");
    }
  };
  const [GetJobAll, setGetJobAll] = useState([]);
  const [litmit, setlimit] = useState(8);
  const FetData = async () => {
    const res = await Getjob_user(8, token);
    setGetJobAll(res);
  };
  const CheckJob = async (id_job) => {
    let res = await CheckRegisterInJob(token, id_job, dataVertify.m_id);
    console.log(res.status);
    console.log(id_job);
    if (res.status) {
      navigate(`/register/Position/${id_job}`);
    } else {
      Swal.fire({
        icon: "error",
        text: "คุณได้สมัครงานไปเเล้ว!",
      });
    }
    console.log(dataVertify);
  };
  useEffect(() => {
    Verifytoken();
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
            <h3 className="m-0 px-3 py-md-3 fw-bold text-center my-auto">
              ตำแหน่งงานว่างทั้งหมด
            </h3>
          </div>

          <div className="px-3 py-2">
            <ul className="list-group ">
              {GetJobAll.map((value, idx) => {
                return (
                  // <NavLink
                  //   to={`Position/${value.jc_id}`}
                  //   className="text-decoration-none"
                  //   key={idx}
                  // >
                  <li
                    className="list-group-item py-2"
                    style={{
                      cursor: "pointer",
                    }}
                    key={idx}
                    onClick={() => {
                      CheckJob(value.jc_id);
                    }}
                  >
                    <div className="row m-0">
                      <div className="col-md-1 text-center my-auto">
                        <i
                          className="bi bi-megaphone-fill"
                          style={{ fontSize: "25px" }}
                        ></i>
                      </div>
                      <div className="col-md-7 my-auto text-center text-md-start">
                        <p className="m-0 ">ประเภท{value.position_name}</p>
                        <p
                          className="m-0 fw-bold"
                          style={{ color: "#009e22", fontSize: "14px" }}
                        >
                          ตั้งแต่วันที่{" "}
                          {moment(value.jc_start).format("LL") +
                            " - " +
                            moment(value.jc_end).format("LL")}
                        </p>
                      </div>
                      <div className="col-md-4 text-center my-auto">
                        <p className="m-0">
                          {moment().add(543, "year").format("LL")} ( 134
                          ผู้เข้าชม )
                        </p>
                      </div>
                    </div>
                  </li>
                  // </NavLink>
                );
              })}
            </ul>
            <div className="row m-0">
              <div className="col-md-12">
                <div className="py-3">
                  <nav aria-label="Page navigation">
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
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyWork;
