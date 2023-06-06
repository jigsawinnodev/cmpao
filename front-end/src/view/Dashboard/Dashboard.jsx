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
import img_nav from "../../assets/img/img_nav.png";
import { GetVertifyAdmin, GetMenuAdmin } from "../../service/api";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [menu, SetMenu] = useState([]);
  let navigate = useNavigate();
  const GetMenu = async () => {
    let token = localStorage.getItem("token");
    let res = await GetMenuAdmin(token);
    SetMenu(res);
  };
  const Vertify = async () => {
    let token = localStorage.getItem("token");
    let res = await GetVertifyAdmin(token);
    console.log(res);
    if (res.status == false) {
      console.log("error");
      navigate("/LoginInfo");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    Vertify();
    GetMenu();
  }, []);
  return (
    <>
      <div>
        <div className="sidebar pt-3">
          <div className="logo-details justify-content-center py-2 px-2">
            {/* <i className="bx bxl-c-plus-plus" /> */}
            <img src={img_nav} alt="" className="img-fluid logo_name" />
            {/* <span className="logo_name"></span> */}
          </div>
          <ul className="nav-links pt-3 ">
            {menu.map((value, idx) => {
              return (
                <NavLink
                  to={value.adm_link}
                  className="LinkItem mx-auto"
                  key={value.adm_id}
                >
                  {({ isActive, isPending }) => {
                    if (isActive) {
                      return (
                        <li className="SetHover shadow rounded-2 mb-2">
                          <div
                            className=""
                            style={{
                              paddingLeft: "1.1rem",
                              paddingRight: "1rem",
                            }}
                          >
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
                            className="links_name px-1"
                            style={{ color: "black", fontSize: "14.5px" }}
                          >
                            {value.adm_name}
                          </span>
                        </li>
                      );
                    } else {
                      return (
                        <li className="SetHover mb-2">
                          <div
                            className=""
                            style={{
                              paddingLeft: "1.1rem",
                              paddingRight: "1rem",
                            }}
                          >
                            <i
                              className={
                                value.adm_icon_nactive + " rounded shadow px-1 "
                              }
                              style={{ color: "#7B8FA1" }}
                            ></i>
                          </div>
                          <span
                            className="links_name px-1"
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
            <NavLink to="/LoginInfo" className="LinkItem" onClick={logout}>
              {({ isActive, isPending }) => {
                // console.log(isActive);
                if (isActive) {
                  return (
                    <li className="SetHover shadow rounded px-1 mb-2">
                      <div
                        className=""
                        style={{
                          paddingLeft: "1.1rem",
                          paddingRight: "1rem",
                        }}
                      >
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
                      <div
                        className=""
                        style={{
                          paddingLeft: "1.1rem",
                          paddingRight: "1rem",
                        }}
                      >
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
          </ul>
        </div>
        <div className="home-section ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
