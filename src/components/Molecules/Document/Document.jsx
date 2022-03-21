import React from 'react';
import { Document as PdfDocument } from '@react-pdf/renderer';

export default function Document({ children, pdfMode }) {
  return (
    <>{pdfMode ? <PdfDocument>{children}</PdfDocument> : <>{children}</>}</>
  );
}
