import React from "react";
function Manage_search() {
  return (
    <>
      <div className="px-3 py-4">
        <div className="shadow-lg h-50 rounded-3">
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-10 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    ค้นหาข้อมูล
                  </h4>
                </div>
              </div>
              <div className="col-md-12 px-4">
                <div className="col-md-2">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      ปี พ.ศ.
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Manage_search;
