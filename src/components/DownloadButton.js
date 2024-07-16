// DownloadButton.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const DownloadButton = ({ data }) => {
  console.log('Data for PDF:', data); // Add this line
  return (
    <PDFDownloadLink document={<PdfDocument data={data} />} fileName="RFQ Policy.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );
};

export default DownloadButton;
