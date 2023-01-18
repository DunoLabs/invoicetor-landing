function getFeaturedUpdates() {
  const featuredUpdates = {
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
      // {
      //   title: "Want's One-Time Editor 🤔",
      //   description:
      //     'Free Invoicetor  is a free editor for invoicetor. You can use it to create invoices and download them as PDF. To get to know more about One-Time Editor read the blog post.',
      //   hasAction: true,
      //   action: {
      //     type: 'link',
      //     url: 'https://invoicetor.works',
      //     label: 'Read Blog',
      //   },
      // },
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
  return featuredUpdates;
}

export { getFeaturedUpdates };
