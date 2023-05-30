import React, { useContext, useState, createContext, useEffect } from "react";
import style from "./register.module.css";
import Navbar from "../../components/Navbar";
import Menu from "../../components/menu/Menu";
import { Vertify_token } from "../../service/for_user";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();
function Register() {
  const navigate = useNavigate();
  const [dataVertify, setDataVertify] = useState({});
  const Verifytoken = async () => {
    const token = localStorage.getItem("token");
    const resVerify = await Vertify_token(token);
    console.log(resVerify);
    if (resVerify.status) {
      setDataVertify(resVerify.data);
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    Verifytoken();
  }, []);
  return (
    <>
      <UserContext.Provider value={dataVertify}>
        <div className={style.background_body}>
          <Navbar />
          <Menu />
        </div>
      </UserContext.Provider>
    </>
  );
}
export { UserContext };
export default Register;
