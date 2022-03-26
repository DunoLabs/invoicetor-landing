import React, { createContext, useState } from 'react';
export const InvoiceContext = createContext();

export default function InvoiceProvider({ children }) {
  const invoiceData = JSON.parse(localStorage.getItem('invoice'))
    ? JSON.parse(localStorage.getItem('invoice'))
    : {
        yourCompany: '',
        yourName: '',
        yourAddress: '',
        yourCity: '',
        yourWebsite: '',
        yourEmail: '',
        yourPhone: '',
        yourBank: '',
        yourAccountNumber: '',
        yourBankBranch: '',

        clientName: '',
        clientAddress: '',
        clientCity: '',
        clientWebsite: '',
        clientEmail: '',
        clientPhone: '',
        clientCompany: '',

        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',

        notes: {
          note: '',
          noteToggle: true,
        },
        terms: {
          term: '',
          termToggle: true,
        },
      };
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const [invoice, setInvoice] = useState({
    yourName: invoiceData.yourName,
    yourEmail: invoiceData.yourEmail,
    yourPhone: invoiceData.yourPhone,
    yourCompany: invoiceData.yourCompany,
    yourAddress: invoiceData.yourAddress,
    yourCity: invoiceData.yourCity,
    yourWebsite: invoiceData.yourWebsite,
    yourAccountNumber: invoiceData.yourAccountNumber,
    yourBank: invoiceData.yourBank,
    yourBankBranch: invoiceData.yourBankBranch,

    clientName: invoiceData.clientName,
    clientEmail: invoiceData.clientEmail,
    clientPhone: invoiceData.clientPhone,
    clientCompany: invoiceData.clientCompany,
    clientAddress: invoiceData.clientAddress,
    clientCity: invoiceData.clientCity,
    clientWebsite: invoiceData.clientWebsite,

    invoiceNumber: invoiceData.invoiceNumber,
    invoiceDate: invoiceData.invoiceDate,
    dueDate: invoiceData.dueDate,

    notes: {
      note: invoiceData.notes.note,
      noteToggle: invoiceData.notes.noteToggle,
    },
    terms: {
      term: invoiceData.terms.term,
      termToggle: invoiceData.terms.termToggle,
    },
    tax: invoiceData.tax,
  });
  const [invoiceItems, setInvoiceItems] = useState({
    items: [
      {
        itemName: items.itemName,
        itemQuantity: items.itemQuantity,
        itemUnitPrice: items.itemUnitPrice,
        itemTotal: items.itemTotal,
      },
    ],
  });

  const [image, setImage] = useState(localStorage.getItem('image'));
  const [imageSize, setImageSize] = useState(
    localStorage.getItem('imageSize') || '150'
  );
  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        setInvoice,
        items,
        setItems,
        invoiceItems,
        setInvoiceItems,
        image,
        setImage,
        imageSize,
        setImageSize,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
