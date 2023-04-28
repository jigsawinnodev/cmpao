import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconPDF from "../../assets/img/iconPDF.png";
import { useNavigate } from "react-router-dom";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import "./DetailWork.css";
import { NavLink } from "react-router-dom";
import {
  GetFileposition_injob,
  GetDetailposition_injob,
} from "../../service/for_user";
import { Link } from "react-router-dom";
const token = localStorage.getItem("token");
function DetailWork() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [DataAndFile, SetDataAndFile] = useState([]);
  const [DataDetail, SetDataDetail] = useState([]);
  const GetData = async () => {
    const res = await GetFileposition_injob(id, token);
    const resDetail = await GetDetailposition_injob(id, token);
    console.log(resDetail);
    SetDataDetail(resDetail);
    SetDataAndFile(res);
    console.log(res);
  };

  const goBack = () => {
    console.log("test");
    navigate("/register");
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="">
        <div className="px-md-0 my-2 shadow rounded">
          <div className="my-auto py-0 pt-md-3">
            <p
              className="text-end px-md-3 m-0 fw-bold px-3 py-3 px-md-0 py-md-0"
              style={{ fontSize: "15px" }}
            >
              วันที่ {moment().add(543, "year").format("LL")}
            </p>
          </div>
          <div className="row m-0">
            <div className="col-md-12">
              <h3 className="m-0 fw-bold text-center py-3">
                รายละเอียดตำแหน่งงาน
              </h3>
              <div className="text-center py-2">
                <p className="m-0" style={{ fontSize: "22px" }}>
                  รับสมัครสอบคัดเลือก{DataDetail.name}
                </p>
              </div>
              <div className="text-end d-flex justify-md-content-between justify-content-between flex-warp py-md-2 py-2 px-md-5">
                <div className="my-auto">
                  <p className="m-0" style={{ fontSize: "20px" }}>
                    1.ตำแหน่ง {DataDetail.p_name}
                  </p>
                </div>
                <div className="d-flex">
                  <Link
                    to={DataAndFile.job_file}
                    target="_blank"
                    className="buttonDownloadPDF text-decoration-none"
                    download
                  >
                    <span className="button__text">Download</span>
                    <span className="button__icon">
                      <i className="bi bi-download svg"></i>
                    </span>
                  </Link>
                  <div className="mt-auto">
                    <p
                      className="m-0 mt-auto mx-1"
                      style={{ fontSize: "15px" }}
                    >
                      92 ดาวน์โหลด
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-md-5">
                <iframe
                  name="MyFrame"
                  width="100%"
                  height="600px"
                  src={DataAndFile.job_file}
                ></iframe>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="pt-3">
                <input
                  className="form-check-input mx-1"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  ยอมรับเงื่อนไข
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="py-3 text-center">
                <NavLink to={"/register/DetailWork/FormWork/" + id}>
                  <button type="button" className="btn btn-secondary">
                    ลงทะเบียนสมัครงาน
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid px-md-5">
        <div style={{ color: "white" }}>
          <div className="text-center text-md-start py-2 py-md-0">
            <h5>รายละเอียดตำแหน่งงาน</h5>
          </div>
          <div className="px-md-4">
            <p className="m-0">
              รับสมัครสอบคัดเลือกข้าราชการองค์การบริหารส่วนจังหวัด
            </p>
            <div className="text-end text-md-start py-2">
              <p className="m-0">01/02/2023 :: ( 134 ผู้เข้าชม )</p>
            </div>
            <div className="d-flex align-items-end">
              <button
                className="btn"
                style={{ backgroundColor: "#D9D9D9", color: "#02006C" }}
              >
                <img src={IconPDF} alt="" className="img-fluid" />
                <span className="mx-2">DOWNLOAD PDF</span>
                <i className="bi bi-download"></i>
              </button>
              <p className="m-0 px-md-2">( 92 Download)</p>
            </div>
          </div>
        </div>
        <div className="text-center px-md-5 pt-2">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="http://www.rpu.ac.th/Library_web/doc/RC_RR/2554_Market_Nachaphat.pdf"
                style={{ width: "100%", height: "650px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DetailWork;
