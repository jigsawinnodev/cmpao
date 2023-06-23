import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconPDF from "../../assets/img/iconPDF.png";
import { useNavigate } from "react-router-dom";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import "./DetailWork.css";
import { NavLink } from "react-router-dom";
import { Get_JobByID } from "../../service/for_user";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
var token = localStorage.getItem("token");
import { UpdateNumberDownload } from "../../service/for_user";
function DetailWork() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [CheckJob, setCheckJob] = useState(false);
  const [DataDetail, SetDataDetail] = useState([]);
  const [CheckisAccept, setCheckisAccept] = useState(false);
  const GetData = async () => {
    let res = await Get_JobByID(id, token);
    SetDataDetail(res[0]);
  };

  const PostNumberDownload = async () => {
    let res = await UpdateNumberDownload(id, token);
    GetData();
  };
  const toRegisterJob = () => {
    if (CheckisAccept) {
      navigate("/register/DetailWork/FormWork/" + id);
    } else {
      Swal.fire({
        icon: "error",
        // title: "Oops...",
        text: "กรุณาอ่านเงื่อนไขเเละยอมรับเงื่อนไข",
      });
    }
  };
  const goBack = () => {
    console.log("test");
    //
    navigate("/register");
  };
  useEffect(() => {
    GetData();
  }, [DataDetail]);
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
              <div className="text-end d-flex justify-md-content-between justify-content-between flex-warp py-md-2 py-2 px-md-5">
                <div className="my-auto">
                  <p className="m-0" style={{ fontSize: "20px" }}>
                    ตำแหน่ง {DataDetail.p_name}
                  </p>
                </div>
                <div className="d-flex">
                  <Link
                    to={
                      "http://localhost:9500/public/pdf/" + DataDetail.job_file
                    }
                    target="_blank"
                    className="buttonDownloadPDF text-decoration-none"
                    download="PDF.pdf"
                    onClick={() => {
                      PostNumberDownload();
                    }}
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
                      {DataDetail.is_download} ดาวน์โหลด
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-md-5">
                {DataDetail.job_file ? (
                  <iframe
                    name="MyFrame"
                    width="100%"
                    height="600px"
                    src={
                      "http://localhost:9500/public/pdf/" + DataDetail.job_file
                    }
                  ></iframe>
                ) : (
                  <div>Loadding..</div>
                )}
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="pt-3">
                <input
                  className="form-check-input mx-1"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  onChange={(e) => {
                    setCheckisAccept(e.target.checked);
                  }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  ยอมรับเงื่อนไข
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="py-3 text-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    toRegisterJob();
                  }}
                >
                  ลงทะเบียนสมัครงาน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailWork;
