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
    name: "อบจ. เชียงใหม่",
    children: [
      {
        id: "1",
        name: "สำนักการศึกษา ศาสนา และวัฒนธรรม",
        children: [
          {
            id: "3",
            name: "ส่วนบริหารการศึกษา",
            children: [
              {
                id: "4",
                name: "ฝ่ายบริหารการศึกษา",
              },
              {
                id: "5",
                name: "ฝ่ายส่งเสริมคุณภาพการศึกษา",
              },
            ],
          },
        ],
      },
      {
        id: "6",
        name: "ฝ่ายบริหารงานทั่วไป",
      },
      {
        id: "7",
        name: "ส่วนส่งเสริมการศึกษา ศาสนา และวัฒนธรรม",
        children: [
          {
            id: "8",
            name: "ฝ่ายการศึกษานอกระบบและตามอัธยาศัย",
          },
          {
            id: "9",
            name: "ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม",
          },
          {
            id: "10",
            name: "ฝ่ายส่งเสริมกีฬา และนันทนาการ",
          },
        ],
      },
      {
        id: "11",
        name: "สำนักงานเลขานุการองค์การบริหารส่วนจังหวัด",
        children: [
          {
            id: "12",
            name: "ฝ่ายกิจการคณะผู้บริหาร",
          },
          {
            id: "13",
            name: "ฝ่ายการประชุม",
          },
        ],
      },
      {
        id: "14",
        name: "สำนักช่าง",
        children: [
          {
            id: "15",
            name: "ฝ่ายบริหารงานทั่วไป",
          },
          {
            id: "16",
            name: "ฝ่ายก่อสร้างและซ่อมบำรุง",
          },
          {
            id: "17",
            name: "ฝ่ายช่างสุขาภิบาล",
          },
          {
            id: "18",
            name: "ฝ่ายผังเมือง",
          },
        ],
      },
      {
        id: "19",
        name: "กองการเจ้าหน้าที่",
        children: [
          {
            id: "20",
            name: "ฝ่ายส่งเสริมและพัฒนาบุคคลากร",
          },
          {
            id: "21",
            name: "ฝ่ายสรรหาและบรรจุแต่งตั้ง",
          },
          {
            id: "22",
            name: "ฝ่ายวินัยและส่งเสริมคุณธรรม",
          },
        ],
      },
      {
        id: "23",
        name: "กองสาธารณสุข",
        children: [
          {
            id: "24",
            name: "ฝ่ายบริหารงานสาธารณสุข",
          },
          {
            id: "25",
            name: "ฝ่ายบริการสาธารณสุข",
            children: [
              {
                id: "26",
                name: "รพ.สต.",
              },
            ],
          },
          {
            id: "27",
            name: "ฝ่ายบริหารงานทั่วไป",
          },
        ],
      },
      {
        id: "28",
        name: "กองป้องกันและบรรเทาสาธารณภัย",
        children: [
          {
            id: "29",
            name: "ฝ่ายบริหารงานทั่วไป",
          },
          {
            id: "30",
            name: "ฝ่ายป้องกันและบรรเทาสาธารณภัย",
          },
        ],
      },
      {
        id: "31",
        name: "หน่วยตรวจสอบภายใน",
      },
      {
        id: "32",
        name: "กองคลัง",
        children: [
          {
            id: "33",
            name: "ฝ่ายการเงินและบัญชี",
          },
          {
            id: "34",
            name: "ฝ่ายเร่งรัดและจัดเก็บรายได้",
          },
          {
            id: "35",
            name: "ฝ่ายบริหารการคลัง",
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
          {/* <nav>
            <div className="row w-100 my-auto py-3">
              <div className="col-md-12">
                <div className="text-center">
                  <h2 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการข้อมูลหน่วยงาน
                  </h2>
                </div>
              </div>
             
          <nav> */}
          <nav>
            <div className="row w-100  pt-3 pb-4 m-0">
              <div className="col-md-12 my-auto">
                <div className="text-start px-3">
                  <h4 className="dashboard m-0" style={{ color: "#655DBB" }}>
                    จัดการข้อมูลหน่วยงาน
                  </h4>
                </div>
              </div>
            </div>
          </nav>
          <div className="">
            <div className="px-3 py-2">
              <div className=" rounded-2 " style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div className="col-md-12 ">
                    <TreeView
                      className="h-100 tree-view"
                      aria-label="rich object"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpanded={[
                        "root",
                        "3",
                        "7",
                        "11",
                        "14",
                        "19",
                        "23",
                        "25",
                        "28",
                        "32",
                      ]}
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
