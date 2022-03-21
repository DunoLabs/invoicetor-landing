import React, { createContext, useState } from 'react';
export const InvoiceContext = createContext();

export default function InvoiceProvider({ children }) {
  const invoiceData = JSON.parse(localStorage.getItem('invoice'))
    ? JSON.parse(localStorage.getItem('invoice'))
    : {};
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

    notes: invoiceData.notes,
  });
  const [invoiceItems, setInvoiceItems] = useState({
    itemName: items.itemName,
    itemQuantity: items.itemQuantity,
    itemUnitPrice: items.itemUnitPrice,
    itemTotal: items.itemTotal,
  });

  const [image, setImage] = useState(localStorage.getItem('image'));
  const [imageSize, setImageSize] = useState(localStorage.getItem('imageSize'));
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
