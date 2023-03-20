import React from "react";
import { Link } from "react-router-dom";
function Manage_agency() {
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100 my-auto py-3">
              <div className="col-md-12">
                <div className="text-center">
                  <h2 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการข้อมูลหน่วยงาน
                  </h2>
                </div>
              </div>
              {/* <div className="col-md-5">
                <div className="float-end">
                  <Link to="edit">
                    <button className="btn btn-outline-primary">
                      เพิ่มใบสมัคร
                    </button>
                  </Link>
                </div>
              </div> */}
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12">
                    <h1>test</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage_agency;
