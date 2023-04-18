import React, { useEffect, useRef } from "react";
import $ from "jquery";
import DataTable from "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";
const TblFunc = ({ dataSet }) => {
  useEffect(() => {
    const table = $(`#table`).DataTable({
      data: dataSet,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start data" },
        { title: "Salary" },
      ],
      responsive: true,
      destroy: true,
      searching: true,
    });
    // Extra step to do extra clean-up.
    return function () {
      console.log("Table destroyed");
      table.destroy();
    };
  });
  return (
    <div>
      <table width="" id="table"></table>
    </div>
  );
};
export default TblFunc;
