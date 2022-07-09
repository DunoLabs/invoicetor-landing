import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';

export default function WaitlistForm() {
  const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={props => {
        const { subscribe, status, message } = props || {};
        return (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        );
      }}
    />
  );
}
