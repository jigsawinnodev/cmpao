import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import FontSarabunRegular from "../../font/Sarabun/Sarabun-Regular.ttf";
import FontSarabunItalic from "../../font/Sarabun/Sarabun-Italic.ttf";
import FontSarabunMedium from "../../font/Sarabun/Sarabun-Medium.ttf";
import moment from "moment/min/moment-with-locales";
import "moment/locale/th";
moment.locale("th");
import TablePDF from "./TablePDF";
// Font.register({ family: "Kanit", src: source });
Font.register({
  family: "Sarabun",
  fonts: [
    {
      src: FontSarabunRegular,
    },
    {
      src: FontSarabunItalic,
    },
    {
      src: FontSarabunMedium,
      fontWeight: "normal",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    fontFamily: "Sarabun",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  textHeadder: {
    textAlign: "center",
  },
  textDateHeader: {
    fontSize: "12px",
    textAlign: "center",
    paddingTop: "12px",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 12,
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
    //   marginTop: 5,
    //   width: 100,
    fontSize: 12,
  },
});
function Pdf({ DataDate }) {
  console.log(DataDate);
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.textHeadder}>
              ข้อมูล​การ​ชําระ​เงิน​ประเภทพ​นักงาน​จ้าง​ทั่ว​ไป
            </Text>
            <Text style={styles.textDateHeader}>
              วันที่เริ่มต้น - วันที่สิ้นสุด{" "}
              {moment(DataDate[0].jc_start).add(543, "year").format("ll") +
                " " +
                moment(DataDate[0].jc_end).add(543, "year").format("ll")}
            </Text>
          </View>
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
        </Page>
      </Document>
    </>
  );
}

export default Pdf;
