const FeaturesData = [
  {
    title: 'free-invoicetor',
    description: `   Invoices plays an important part in the day to day operations of any
       business and is generally termed as bills. This feature can assist
       companies to create them in not only correct format but also with
       all the essential elements.`,
  },
  {
    title: 'Invoice Format In PDF',
    description: `  In form of pdf invoices can be generated which will help in
       documenting the details of every transaction and make tax filing
       easier.`,
  },
  {
    title: ' Branding invoices with logo',
    description: `   While creating invoice, companies can add their business logo,
       client information and items as they wish such as products with
       fixed prices.`,
  },
  {
    title: ' Digital Signature',
    description: `            Invoices can be digitally signed by companies and company can also
       add seal of approval to the invoice. Digital Signature is important
       in the day to day operations of any business and is generally termed
       as bills. This feature can assist companies to create them in not
       only correct format but also with all the essential elements.`,
  },
  {
    title: 'Create Multiple Invoices',
    description: `        Users can create multiple invoices for the same client and multiple
       clients, which will help in creating a more efficient and efficient
       way of dealing with the clients.`,
  },
  {
    title: '    Mutiple Invoice Templates & Designs',
    description: `      Users can create multiple invoice templates and designs and choose
       from them while creating invoices. This will help in creating
       different invoice designs for different clients.`,
  },
];

const FeaturesUpdatesData = {
  title: " What's New? Featured Updates ✨",
  version: {
    name: 'v0.1.0',
    link: '',
  },

  updates: [
    {
      title: 'Join the Waitlist ⏳',
      description:
        'Join the waitlist to get notified when we launch our product, in the meantime check out our latest features and updates.',

      hasAction: false,
    },
    {
      title: 'Add Custom Currencies 💵',
      description:
        'Create invoices in any currency you want. We support all currencies that are supported by Stripe.',
      hasAction: false,
    },
    {
      title: 'Change Invoice Colors 🎨',
      description:
        'Add background colors to your invoices to make them stand out from the rest.',
      hasAction: false,
    },
    {
      title: 'Add Digital Signature 🔐',
      description:
        'Create invoices with digital signature. You can sign your invoices and send them to your clients, just like you would send a physical copy.',
      hasAction: true,
      action: {
        type: 'button',
        url: 'https://invoicetor.works/free-invoicetor',
        label: 'Create Invoices ⚡',
      },
    },
    {
      title: 'Learn About Previous Features/Releases 📖',
      description:
        'Learn about the features that we have added in the past releases, and how they work.',
      hasAction: true,
      action: {
        type: 'button',
        url: 'https://invoicetor.works/features',
        label: 'Learn More 👉🏻',
      },
    },
  ],
};

export { FeaturesData, FeaturesUpdatesData };
