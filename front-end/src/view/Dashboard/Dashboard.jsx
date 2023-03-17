import React, { useState, useEffect } from "react";
// import LogoIcon from "../assets/img/img_nav.png";
import LogoIcon from "../../assets/img/img_nav.png";
// import LogoIconUser from "../assets/img/icon_profile.png";
import LogoIconUser from "../../assets/img/icon_profile.png";
import AdminIcon from "../../assets/img/admin.png";
import CardShow from "../../components/DashboardComponent/index/IndexPage";
import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";
import Index from "../../components/DashboardComponent/index/IndexPage";
import "./Dashboard.css";
import axios from "axios";
function Dashboard() {
  const [menu, SetMenu] = useState([]);
  const GetMenu = () => {
    axios.get("http://localhost:9500/api/GetMenu").then((res) => {
      SetMenu(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    GetMenu();
  }, []);
  return (
    <>
      <div>
        <div className="sidebar">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus" />
            <span className="logo_name">CodingLab</span>
          </div>
          <ul className="nav-links">
            {menu.map((value, idx) => {
              return (
                <NavLink
                  to={value.adm_link}
                  className="LinkItem"
                  key={value.adm_id}
                >
                  {({ isActive, isPending }) => {
                    // console.log(isActive);
                    if (isActive) {
                      return (
                        <li className="SetHover shadow rounded-2 mb-2">
                          <div className="mx-4">
                            <i
                              className={
                                value.adm_icon_active + " rounded shadow px-1 "
                              }
                              style={{
                                color: "white",
                                backgroundColor: "#443C68",
                              }}
                            ></i>
                          </div>
                          <span
                            className="links_name"
                            style={{ color: "black", fontSize: "14.5px" }}
                          >
                            {value.adm_name}
                          </span>
                        </li>
                      );
                    } else {
                      return (
                        <li className="SetHover mb-2">
                          <div className="px-4">
                            <i
                              className={
                                value.adm_icon_nactive + " rounded shadow px-1 "
                              }
                              style={{ color: "#7B8FA1" }}
                            ></i>
                          </div>
                          <span
                            className="links_name"
                            style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                          >
                            {value.adm_name}
                          </span>
                        </li>
                      );
                    }
                  }}
                </NavLink>
              );
            })}
            <NavLink to="/" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded px-1 mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-arrow-right-square-fill"
                          style={{ color: "#2B3467" }}
                        ></i>
                      </div>
                      <span className="links_name" style={{ color: "black" }}>
                        Log out
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-arrow-right-square rounded px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span className="links_name" style={{ color: "#7B8FA1" }}>
                        Log out
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>

            {/* <NavLink to="/Dashboard/" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow-lg rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-grid-3x3-gap-fill rounded px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        แดชบอร์ด
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-grid-3x3-gap rounded shadow px-1 "
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        แดชบอร์ด
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_userRegister" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-person-fill-gear rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการผู้สมัคร
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-person-gear rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการผู้สมัคร
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_position" className="LinkItem">
              {({ isActive, isPending }) => {
                // console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-person-circle rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการข้อมูลตำเเหน่ง
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-person rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการข้อมูลตำเเหน่ง
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_agency" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-people-fill rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการข้อมูลหน่วยงาน
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-people rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการข้อมูลหน่วยงาน
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_users" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-file-earmark-person-fill rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการผู้ใช้งาน
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-file-earmark-person rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการผู้ใช้งาน
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_privilege" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-shield-fill-check rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการสิทธิ์
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-shield-check rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการสิทธิ์
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_typeUserRegister" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-person-fill-gear rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการประเภทของบุคลากรที่สมัคร
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-person-gear rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการประเภทของบุคลากรที่สมัคร
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_money" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-credit-card-fill rounded shadow px-1 "
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการการชำระเงิน
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-credit-card rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการการชำระเงิน
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>
            <NavLink to="Manage_document" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-file-earmark-check-fill rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "black", fontSize: "14.5px" }}
                      >
                        จัดการตรวจสอบเอกสาร
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-file-earmark-check rounded shadow px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span
                        className="links_name"
                        style={{ color: "#7B8FA1", fontSize: "14.5px" }}
                      >
                        จัดการตรวจสอบเอกสาร
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>

            <NavLink to="Manage_search" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded-2 mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-search rounded shadow px-1"
                          style={{ color: "white", backgroundColor: "#443C68" }}
                        ></i>
                      </div>
                      <span className="links_name" style={{ color: "black" }}>
                        ค้นหาข้อมูล
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover">
                      <div className="mx-4">
                        <i
                          className="bi bi-search rounded shadow px-1 mb-2"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span className="links_name" style={{ color: "#7B8FA1" }}>
                        ค้นหาข้อมูล
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink>

            <NavLink to="/" className="LinkItem">
              {({ isActive, isPending }) => {
                console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded px-1 mb-2">
                      <div className="px-4">
                        <i
                          className="bi bi-arrow-right-square-fill"
                          style={{ color: "#2B3467" }}
                        ></i>
                      </div>
                      <span className="links_name" style={{ color: "black" }}>
                        Log out
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li className="SetHover mb-2">
                      <div className="mx-4">
                        <i
                          className="bi bi-arrow-right-square rounded px-1"
                          style={{ color: "#7B8FA1" }}
                        ></i>
                      </div>
                      <span className="links_name" style={{ color: "#7B8FA1" }}>
                        Log out
                      </span>
                    </li>
                  );
                }
              }}
            </NavLink> */}
          </ul>
        </div>
        <section className="home-section ">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default Dashboard;
