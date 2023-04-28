import React, { useState, useEffect } from "react";
import ImgNav from "../../assets/img/img_nav.png";
import NavbarPage from "../../components/Navbar";
import PDFFILE from "../.././assets/pdf/1648439618_808d6355e562836137b4.pdf";
import { User_is_Accept, Vertify_token } from "../../service/for_user";
import { useNavigate } from "react-router-dom";
const initialstate = {
  is_accept: "",
};
const token = localStorage.getItem("token");
function Is_accept() {
  const navigate = useNavigate();
  const [is_acceptData, setis_acceptData] = useState(initialstate);
  const [dataVertify, setDataVertify] = useState({});
  const HandleFormCheck = async (e) => {
    e.preventDefault();
    const res = await User_is_Accept(dataVertify.m_id, token);
    if (res.status == "success") {
      navigate("/register");
    }
  };
  const Verifytoken = async () => {
    const resVerify = await Vertify_token(token);
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
      <NavbarPage />
      <div className="" style={{ backgroundColor: "#E7EBF5" }}>
        <div className="container">
          <div className="text-start pt-5 pb-3">
            <h3>เงื่อนไขการใชับริการ</h3>
          </div>
          <iframe
            src={PDFFILE + "#toolbar=0"}
            width="100%"
            height={700}
          ></iframe>
          <div className="py-4 text-center">
            <form onSubmit={HandleFormCheck}>
              <div className="form-check">
                <input
                  style={{ float: "none" }}
                  className="form-check-input mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    let check = e.target.checked;
                    console.log(check);
                    setis_acceptData({
                      is_accept: check == true ? 1 : 0,
                    });
                  }}
                  required
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  ยอมรับเงื่อนไข
                </label>
              </div>
              <button type="submit" className="btn btn-success my-4 px-5">
                เข้าใช้บริการ
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Navbar
        expand="lg"
        className="border-bottom-2"
        style={{ backgroundColor: "#6832ae" }}
      >
        <Container fluid className="px-3 px-md-5">
          <Image src={ImgNav} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <div className="row px-md-3 px-0">
                <Navbar.Text
                  className="m-0 py-0"
                  style={{ fontSize: "22px", color: "white" }}
                >
                  องค์การบริหารส่วนจังหวัดเชียงใหม่
                </Navbar.Text>
                <Navbar.Text
                  className="py-0"
                  style={{ fontSize: "16px", color: "white" }}
                >
                  Chiang Mai Provincial Administrative Organization
                </Navbar.Text>
              </div>
            </Nav>
            <Navbar.Text
              className="m-0 py-0 mt-auto"
              style={{ fontSize: "18px", color: "white" }}
            >
              ระบบการรับสมัครบุคลากรออนไลน์
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Is_accept;
