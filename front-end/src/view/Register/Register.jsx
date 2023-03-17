import React from "react";
// import "../App.css";
import style from "./register.module.css";
import Navbar from "../../components/Navbar";
import Menu from "../../components/menu/Menu";
function Register() {
  return (
    <>
      <div className={style.background_body}>
        <Navbar />
        <Menu />
      </div>
    </>
  );
}

export default Register;
