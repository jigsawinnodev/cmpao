import React from "react";
import "./LoginAdmin.css";
import IconAdmin from "../../assets/img/IconAdmin.png";
import { useState } from "react";
import { AuthLoginAdmin } from "../../service/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function LoginAdmin() {
  let navigate = useNavigate();
  const [Formlogin, SetFormLogin] = useState({
    user_username: "",
    user_password: "",
  });
  const SubmitFormLogin = async (e) => {
    e.preventDefault();
    let res = await AuthLoginAdmin(Formlogin);
    console.log(res);
    if (res.status == "success") {
      localStorage.setItem("token", res.token);
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/Dashboard");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "ยูสเซอร์ หรือ พาสเวิร์ด ผิด",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div
        className="d-flex  flex-row"
        style={{ backgroundColor: "#8601cd", height: "100vh" }}
      >
        <div id="form_wrapper">
          <div id="form_left  " style={{ margin: "auto" }}>
            <img
              src={IconAdmin}
              alt="computer icon"
              className="img-fluid my-auto mx-auto d-none d-md-block"
            />
          </div>
          <div id="form_right " className="my-auto">
            <h1 className="text-center ">Admin Login</h1>
            <form onSubmit={SubmitFormLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                  required
                  onChange={(e) => {
                    SetFormLogin({
                      ...Formlogin,
                      user_username: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    SetFormLogin({
                      ...Formlogin,
                      user_password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="text-center py-3">
                <button
                  type="submit"
                  defaultValue="Login"
                  id="input_submit"
                  className="input_field w-50"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
