import React, { useState } from "react";
import { Link } from "react-router-dom";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
function Manage_agency() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  const nodes = [
    {
      value: "อบจ. เชียงใหม่",
      label: "อบจ. เชียงใหม่",
      children: [
        {
          value: "สำนักการศึกษา ศาสนา และวัฒนธรรม",
          label: "สำนักการศึกษา ศาสนา และวัฒนธรรม",
          children: [
            {
              value: "ส่วนบริหารการศึกษา",
              label: "ส่วนบริหารการศึกษา",
              children: [
                { value: "ฝ่ายบริหารการศึกษา", label: "ฝ่ายบริหารการศึกษา" },
                {
                  value: "ฝ่ายส่งเสริมคุณภาพการศึกษา",
                  label: "ฝ่ายส่งเสริมคุณภาพการศึกษา",
                },
              ],
            },
          ],
        },
        {
          value: "ฝ่ายบริหารงานทั่วไป",
          label: "ฝ่ายบริหารงานทั่วไป",
        },
        {
          value: "ส่วนส่งเสริมการศึกษา ศาสนา และวัฒนธรรม",
          label: "ส่วนส่งเสริมการศึกษา ศาสนา และวัฒนธรรม",
          children: [
            {
              value: "ฝ่ายการศึกษานอกระบบและตามอัธยาศัย",
              label: "ฝ่ายการศึกษานอกระบบและตามอัธยาศัย",
            },
            {
              value: "ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม",
              label: "ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม",
            },
            {
              value: "ฝ่ายส่งเสริมกีฬา และนันทนาการ",
              label: "ฝ่ายส่งเสริมกีฬา และนันทนาการ",
            },
          ],
        },
      ],
    },
    {
      value: "test",
      label: "test",
      children: [
        { value: "qqqq", label: "Phobosbb" },
        {
          value: "ggqq",
          label: "oopp",
          children: [{ value: "xx", label: "yy" }],
        },
      ],
    },
  ];
  const data = {
    id: "root",
    name: "Parent",
    children: [
      {
        id: "1",
        name: "Child - 1",
      },
      {
        id: "3",
        name: "Child - 3",
        children: [
          {
            id: "4",
            name: "Child - 4",
          },
        ],
      },
    ],
  };
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
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
                    <TreeView
                      aria-label="rich object"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpanded={["root"]}
                      defaultExpandIcon={<ChevronRightIcon />}
                      sx={{
                        height: 110,
                        flexGrow: 99,
                        maxWidth: 400,
                        overflowY: "auto",
                      }}
                    >
                      {renderTree(data)}
                    </TreeView>
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
