import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import BarChart from "../../Chart/BarChart";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import { GetdetailCard, GetAllApply } from "../../../service/api";
var token = localStorage.getItem("token");
function Index() {
  const [dataCard, setStateDataCard] = useState([]);
  const [DataAllApply, setStateDataApply] = useState([]);
  const GetDataToCard = async () => {
    const res = await GetdetailCard(token);
    const resAllApply = await GetAllApply(token);
    // console.log(resAllApply);
    setStateDataApply(resAllApply);
    setStateDataCard(res);
  };
  const data = {
    labels: [
      "พนักงานธุรการ",
      "พนักงานการเกษตร",
      "พนักงานดับเพลิง",
      "เจ้าหน้าที่ประชาสัมพันธ์",
      "พนักงานคอมพิวเตอร์",
    ],
    datasets: [
      {
        label: "จำนวน",
        data: [5, 7, 3, 4, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 0.5,
      },
    ],
  };
  useEffect(() => {
    GetDataToCard();
  }, []);
  return (
    <>
      <nav>
        <div className="nav px-5 pt-5 ">
          <div className="d-flex justify-content-start w-100 flex-column flex-md-row">
            <h3 className="dashboard text-center">เเดชบอร์ด</h3>
          </div>
        </div>
      </nav>
      <div className="home-content">
        <div className="overview-boxes pt-3">
          <div className="box shadow">
            <div className="right-side">
              <div className="box-topic">จำนวนผู้สมัคร</div>
              <h3 className="">{dataCard.count_applicant_all_dash} คน</h3>
              <div className="indicator">
                <p className="m-0 text-start" style={{ fontSize: "14px" }}>
                  อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                </p>
              </div>
            </div>
            <div className="px-2">
              <i className="bi bi-person-fill-add cart my-auto text-center" />
            </div>
          </div>
          <div className="box shadow">
            <div className="right-side">
              <div className="box-topic">จำนวนผู้ที่ชำระเงินสำเร็จ</div>
              <h3 className="">{dataCard.count_person_pay} คน</h3>
              <div className="indicator">
                <p className="m-0 text-start" style={{ fontSize: "14px" }}>
                  อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                </p>
              </div>
            </div>
            <div className="px-2">
              <i className="bi bi-cash cart two my-auto text-center m-0" />
            </div>
          </div>
          <div className="box shadow">
            <div className="right-side">
              <div className="box-topic">จำนวนผู้ที่เอกสารไม่สมบูรณ์</div>
              <h3 className="">{dataCard.count_warm} คน</h3>
              <div className="indicator">
                <p className="m-0 text-start" style={{ fontSize: "14px" }}>
                  อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                </p>
              </div>
            </div>
            <div className="px-2">
              <i className="bi bi-person-fill-exclamation cart my-auto text-center three m-0" />
            </div>
          </div>
          <div className="box shadow">
            <div className="right-side">
              <div className="box-topic">จำนวนผู้ที่ค้างชำระเงิน</div>
              <h3 className="">{dataCard.count_person_pay_no} คน</h3>
              <div className="indicator">
                <p className="m-0 text-start" style={{ fontSize: "14px" }}>
                  อัพเดทวันที่ {moment().add(543, "year").format("ll")}
                </p>
              </div>
            </div>
            <i className="bi bi-person-fill-x cart four my-auto text-center" />
          </div>
        </div>
        <div className="sales-boxes">
          <div className="recent-sales box shadow">
            {/* <div className="title">Recent Sales</div> */}
            <div className="sales-details">
              <BarChart chartData={data} />
            </div>
          </div>
          <div className="top-sales box shadow">
            <div className="title">ประเภทที่เปิดรับสมัคร</div>
            <ul className="top-sales-details p-0">
              {DataAllApply.map((value, idx) => {
                return (
                  <li key={idx}>
                    <div className="d-flex">
                      {/* <p className="m-0 pe-3 fw-bold">1</p> */}
                      <span className="product">{value.position_name}</span>
                    </div>
                    <span className="price">
                      {value.count_position > 0 ? value.count_position : 0}{" "}
                      ตำเเหน่ง
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
