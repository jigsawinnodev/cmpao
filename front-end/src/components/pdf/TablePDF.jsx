import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
function TablePDF() {
  const styles = StyleSheet.create({
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
  return (
    <>
      
    </>
  );
}

export default TablePDF;
