import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import FontSarabun from "../../../../font/Sarabun/THSarabunNew.ttf";
import FontSarabunBold from "../../../../font/Sarabun/Sarabun-Bold.ttf";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
// import TablePDF from "../../pdf/TablePDF";
Font.register({
  family: "THSarabunNew",
  fonts: [
    {
      src: FontSarabun,
    },
    {
      src: FontSarabunBold,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    fontFamily: "THSarabunNew",
  },
  section: {
    marginTop: 15,
  },
  textHeadder: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  textDateHeader: {
    fontSize: 12,
    textAlign: "center",
    paddingTop: "12px",
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    fontSize: 14,
    margin: "auto",
  },
  container: {
    padding: 10,
  },
});
function Report({ DataDate }) {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.textHeadder}>
              ข้อมูล​การ​ชําระ​เงิน​ประเภทพ​นักงาน​จ้าง​ทั่ว​ไป
            </Text>
            {/* <Text style={styles.textDateHeader}>
              วันที่เริ่มต้น - วันที่สิ้นสุด{" "}
              {moment(DataDate[0].jc_start).add(543, "year").format("ll") +
                " - " +
                moment(DataDate[0].jc_end).add(543, "year").format("ll")}
            </Text> */}
          </View>
          <View style={styles.container}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>ลำดับ</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>เลขประจำตัวผู้สอบ</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>ชื่อ - นามสกุล</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>ตำเเหน่ง</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default Report;
