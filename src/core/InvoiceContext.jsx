import React, { createContext, useEffect, useState } from 'react';
export const InvoiceContext = createContext();

export default function InvoiceProvider({ children }) {
  const invoiceData = JSON.parse(localStorage.getItem('invoicetor'))
    ? JSON.parse(localStorage.getItem('invoicetor'))
    : {
        yourLogo: {
          image: '',
          imageSize: '150',
        },
        yourDetails: {
          yourCompany: '',
          yourAddress: '',
          yourName: '',
          yourEmail: '',
          yourPhone: '',
          yourWebsite: '',
          yourBank: '',
          yourBankAccount: '',
          yourBankBranch: '',
          yourRegistrationNumber: '',
        },
        clientDetails: {
          clientName: '',
          clientAddress: '',
          clientCity: '',
          clientWebsite: '',
          clientEmail: '',
          clientPhone: '',
          clientCompany: '',
        },
        items: [],
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        tax: 0,

        notes: {
          note: '',
          noteToggle: true,
        },
        terms: {
          term: '',
          termToggle: true,
        },
        digitalSignature: {
          sealColor: 'red.400',
          signature: '',
          signatureSize: '100',
          signatureToggle: true,
        },
      };

  const [invoice, setInvoice] = useState({
    yourLogo: {
      image: invoiceData.yourLogo.image,
      imageSize: invoiceData.yourLogo.imageSize,
    },
    yourDetails: {
      yourName: invoiceData.yourDetails.yourName,
      yourEmail: invoiceData.yourDetails.yourEmail,
      yourPhone: invoiceData.yourDetails.yourPhone,
      yourCompany: invoiceData.yourDetails.yourCompany,
      yourAddress: invoiceData.yourDetails.yourAddress,
      yourCity: invoiceData.yourDetails.yourCity,
      yourWebsite: invoiceData.yourDetails.yourWebsite,
      yourAccountNumber: invoiceData.yourDetails.yourAccountNumber,
      yourBank: invoiceData.yourDetails.yourBank,
      yourBankBranch: invoiceData.yourDetails.yourBankBranch,
      yourRegistrationNumber: invoiceData.yourDetails.yourRegistrationNumber,
    },

    clientDetails: {
      clientName: invoiceData.clientDetails.clientName,
      clientEmail: invoiceData.clientDetails.clientEmail,
      clientPhone: invoiceData.clientDetails.clientPhone,
      clientCompany: invoiceData.clientDetails.clientCompany,
      clientAddress: invoiceData.clientDetails.clientAddress,
      clientCity: invoiceData.clientDetails.clientCity,
      clientWebsite: invoiceData.clientDetails.clientWebsite,
    },
    invoiceNumber: invoiceData.invoiceNumber,
    invoiceDate: invoiceData.invoiceDate,
    dueDate: invoiceData.dueDate,
    items: [...invoiceData.items],

    notes: {
      note: invoiceData.notes.note,
      noteToggle: invoiceData.notes.noteToggle,
    },
    terms: {
      term: invoiceData.terms.term,
      termToggle: invoiceData.terms.termToggle,
    },
    tax: invoiceData.tax,
    digitalSignature: {
      sealColor: invoiceData.digitalSignature.sealColor,
      signature: invoiceData.digitalSignature.signature,
      signatureSize: invoiceData.digitalSignature.signatureSize,
      signatureToggle: invoiceData.digitalSignature.signatureToggle,
    },
  });

  useEffect(() => {
    localStorage.setItem('invoicetor', JSON.stringify(invoice));
  }, [invoice]);

  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        setInvoice,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
