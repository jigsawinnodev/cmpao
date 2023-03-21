import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Manage_document() {
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการตรวจสอบเอกสาร
                  </h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="float-end">
                  <Link to="add">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {}}
                    >
                      เพิ่มใบสมัคร
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Manage_document;
