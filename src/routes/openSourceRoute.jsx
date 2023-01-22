import React from 'react';

const OpenSource = React.lazy(() => import('components/Pages/OpenSource'));
const SEO = {
  title: 'Invoicetor | Open Source',
  description:
    'Invoicetor is an open source invoicing app for small businesses. Build invoices for your business in no time.',
};

export default {
  path: '/opensource',
  element: <OpenSource title={SEO.title} description={SEO.description} />,
};
