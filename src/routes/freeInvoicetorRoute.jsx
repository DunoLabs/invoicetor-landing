import React from 'react';

const FreeInvoicetor = React.lazy(() =>
  import('components/Pages/FreeInvoicetor')
);
const SEO = {
  title: 'Invoicetor | Free Invoicetor',
  description:
    'Invoicetor is a free invoicing app for small businesses. Build invoices for your business in no time.',
};

export default {
  path: '/free-invoicetor',
  element: <FreeInvoicetor title={SEO.title} description={SEO.description} />,
};
