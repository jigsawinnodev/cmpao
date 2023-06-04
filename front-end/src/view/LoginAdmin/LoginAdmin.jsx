import React from "react";
import "./LoginAdmin.css";
import IconAdmin from "../../assets/img/IconAdmin.png";
function LoginAdmin() {
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
          <div id="form_right">
            <h1 className="text-center ">Admin Login</h1>
            <form>
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
