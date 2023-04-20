import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BarChart from "../../Chart/BarChart";
import { UserData } from "../../../Data";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
function Index() {
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
              <h3 className="">1,075 คน</h3>
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
              <h3 className="">388,768 บาท</h3>
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
              <h3 className="">389 คน</h3>
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
              <h3 className="">150 คน</h3>
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
            <div className="title">ตำเเหน่งที่เปิดรับสมัคร</div>
            <ul className="top-sales-details p-0">
              <li>
                <div className="d-flex">
                  {/* <p className="m-0 pe-3 fw-bold">1</p> */}
                  <span className="product">พนักงานธุรการ</span>
                </div>
                <span className="price">5 ตำเเหน่ง</span>
              </li>
              <li>
                <div className="d-flex">
                  {/* <p className="m-0 pe-3 fw-bold">2</p> */}
                  <span className="product">พนักงานการเกษตร</span>
                </div>
                <span className="price">7 ตำเเหน่ง</span>
              </li>
              <li>
                <div className="d-flex">
                  {/* <p className="m-0 pe-3 fw-bold">3</p> */}
                  <span className="product">พนักงานดับเพลิง</span>
                </div>
                <span className="price">3 ตำเเหน่ง</span>
              </li>
              <li>
                <div className="d-flex">
                  {/* <p className="m-0 pe-3 fw-bold">4</p> */}
                  <span className="product">เจ้าหน้าที่ประชาสัมพันธ์</span>
                </div>
                <span className="price">4 ตำเเหน่ง</span>
              </li>
              <li>
                <div className="d-flex">
                  {/* <p className="m-0 pe-3 fw-bold">4</p> */}
                  <span className="product">พนักงานคอมพิวเตอร์</span>
                </div>
                <span className="price">2 ตำเเหน่ง</span>
              </li>
              {/* <li>
                <a href="#">
                  
                  <span className="product">Gucci Womens's Bags</span>
                </a>
                <span className="price">$2345</span>
              </li>
              <li>
                <a href="#">
                  
                  <span className="product">Addidas Running Shoe</span>
                </a>
                <span className="price">$2345</span>
              </li>
              <li>
                <a href="#">
                  
                  <span className="product">Bilack Wear's Shirt</span>
                </a>
                <span className="price">$1245</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
