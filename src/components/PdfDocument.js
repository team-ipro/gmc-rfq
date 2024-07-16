// PdfDocument.js
import React from 'react';
import './components.css';
import logo from './images/I pro Logo with blue color.png';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 10,
  },
  logo: {
    width: 225, 
    height: 45,
    // marginBottom: 10,
  },

  header: {
    display: "flex",
    justifyContent: "center",
  },

  tableHeading: {
    fontSize: "10px",
    fontWeight: "bold",
    marginLeft: "20",
  },

  address: {
    marginLeft: "50%",
    fontSize: "7px",
    fontWeight: "normal",
    textAlign: 'right',
  },

  horizontalLine: {
    marginVertical: 10,
    height: 1,
    backgroundColor: '#000000',
  },

  break: {
    marginBottom: 10,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: "85px",
  },

  paraHeading: {
    fontSize: "12px",
    fontWeight: "extrabold",
    marginLeft: "10px",
  },

  tableMainHeading: {
    fontSize: "12px",
    fontWeight: "extrabold",
    textAlign: "center",
  },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    margin: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f3f3f3",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },

  dataText: {
    fontSize: "8px",
    color: '#000000',
  },

  date: {
    fontSize: "12px",
    fontWeight: "extrabold",
    marginLeft: "90%",
  }

});

const PdfDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.flexRow}>
          <Image style={styles.logo} src={logo} ></Image>
              <Text style={styles.address}>#18, 3rd Cross, RMV 2nd Stage, 4th Block, MLA Layout,{"\n"}
                Lottegollahalli, Sanjaynagar, Bengaluru - 560094.{"\n"}
                    www.iproinfinity.com{"\n"}
                    Email: customerfirst@iproinfinity.com{"\n"}
                    Phone No. 080 23414133{"\n"}
              </Text>
          </View>
        <View style={styles.horizontalLine} />
        <View style={styles.break} />
        <Text style={styles.paraHeading}>RFQ for GPA Policy</Text>
        <View style={styles.break} />
        <Text style={styles.tableHeading}>Insured Name                                       : <Text style={styles.dataText}>{data.insuredName}</Text></Text>
        <Text style={styles.tableHeading}>Address                                                : <Text style={styles.dataText}>{data.address}</Text></Text>
        <Text style={styles.tableHeading}>Business                                               : <Text style={styles.dataText}>{data.business}</Text></Text>
        <Text style={styles.tableHeading}>Existing Insurer and Policy Number     : <Text style={styles.dataText}>{data.existingInsurerAndPolicyNumber}</Text></Text>
        <Text style={styles.tableHeading}>Coverage Required                              : <Text style={styles.dataText}>{data.coverageRequired}</Text></Text>
        <Text style={styles.tableHeading}>Sum Insured Per Employee                  : <Text style={styles.dataText}>{data.sumInsuredPerEmployee}</Text></Text>
        <Text style={styles.tableHeading}>Total Number of Employees                 : <Text style={styles.dataText}>{data.totalNumberOfEmployees}</Text></Text>
        <Text style={styles.tableHeading}>Total Sum Insured                                : <Text style={styles.dataText}>{data.totalSumInsured}</Text></Text>
        
        {data.employee && data.employee.length > 0 && (
          <>
            <View style={styles.break} />
            <View style={styles.break} />
            <Text style={styles.paraHeading}>PREMIUM WORKS OUT TO RS.12000/- + GST FOR TSI - INR 60 LAKHS</Text>
            <View style={styles.break} />
            <Text style={styles.tableMainHeading}>VNAOA  STAFF</Text>
            <View style={styles.break} />
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Name</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Designation</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Age</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>DOB</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Salary</Text>
                </View>
              </View>
              {data.employee.map((employeeMember, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{employeeMember.name}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{employeeMember.designation}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{employeeMember.age}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{employeeMember.dob}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{employeeMember.salary}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}

        <View style={styles.break} />
        <View style={styles.break} />
        <View style={styles.flexRow}>
          <Text style={styles.paraHeading}>Signature:____________________</Text>
          <Text style={styles.date}>Date: </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
