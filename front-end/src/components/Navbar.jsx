import React, { useState } from "react";
import ImgNav from "../assets/img/img_nav.png";
import "../App.css";
import {
  Image,
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";

function NavbarPage() {
  return (
    <>
      <Navbar
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
      </Navbar>
    </>
  );
}

export default NavbarPage;
