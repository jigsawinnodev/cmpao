import React from "react";
import { useParams } from "react-router-dom";
import IconPDF from "../assets/img/iconPDF.png";
function DetailWork() {
  let { id } = useParams();
  return (
    <>
      <div className="container-fluid px-md-5">
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
      </div>
    </>
  );
}

export default DetailWork;
