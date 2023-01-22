import React from 'react';

const Home = React.lazy(() => import('components/Pages/Home'));
const SEO = {
  title: 'Invoicetor | Home',
  description:
    'Invoicetor is a free invoicing app for small businesses. Build invoices for your business in no time.',
};

export default {
  path: '/',
  element: <Home title={SEO.title} description={SEO.description} />,
};
