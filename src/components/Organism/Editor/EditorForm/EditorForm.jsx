import { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Box, Flex, Button, Spacer, useToast } from '@chakra-ui/react';

import { InvoiceContext } from '../../../../core/InvoiceContext';

import * as RiIcons from 'react-icons/ri';

import UserDetails from './UserDetails';
import ClientDetails from './ClientDetails';
import InvoiceItems from './InvoiceItems';
import InvoiceNotes from './InvoiceNotes';
import InvoiceTerms from './InvoiceTerms';
import InvoiceDates from './InvoiceDates';
import InvoiceImage from './InvoiceImage';
import DigitalSignature from './DigitalSignature';

export default function EditorForm() {
  const [reset, setReset] = useState(false);
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];

  // aleart message
  const alertMessage = (message, status) => {
    toast({
      status: statuses.includes(status) ? status : 'info',
      title: message,
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  // getting the context from the provider
  const { invoice, setInvoice } = useContext(InvoiceContext);
  const formik = useFormik({
    initialValues: { invoice },
    onSubmit: values => {
      setInvoice(values.invoice);
      localStorage.setItem('invoicetor', JSON.stringify(values.invoice));
      alertMessage('Invoice saved successfully', 'success');
    },
  });

  useEffect(() => {
    localStorage.setItem('invoicetor', JSON.stringify(invoice));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setReset(false);
  }, [invoice]);

  useEffect(() => {
    const handler = e => {
      if (e.ctrlKey && e.keyCode === 83) {
        // check if the user is on the invoice page or not
        if (window.location.pathname === '/one-time-editor') {
          e.preventDefault();
          formik.handleSubmit();
        }
      }

      if (e.ctrlKey && e.keyCode === 82) {
        // check if the user is on the invoice page or not
        if (window.location.pathname === '/one-time-editor') {
          e.preventDefault();
          clearAllData();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik]);

  // Upload Image in localstorage ends

  // Clear All Data
  const clearAllData = () => {
    setReset(true);
    localStorage.removeItem('invoicetor');

    setInvoice({
      yourLogo: {
        image: '',
        imageSize: '150',
      },
      yourDetails: {
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

      invoiceNumber: '',
      invoiceDate: '',
      dueDate: '',
      items: [],
      notes: {
        note: '',
        noteToggle: true,
      },
      terms: {
        term: '',
        termToggle: true,
      },
      digitalSignature: {
        signature: '',
        signatureSize: '100',
        signatureToggle: true,
        sealColor: 'red.400',
      },
    });

    // set formik initial values
    formik.setFieldValue('invoice.yourLogo.image', '');
    alertMessage('Invoice cleared successfully', 'success');
  };

  // getting ImageData from InvoiceImage Component starts
  const getLogo = data => {
    setInvoice({
      ...invoice,
      yourLogo: {
        image: data.image,
        imageSize: data.imageSize,
      },
    });
  };

  // getting data from UserDetails Component starts
  const getYourDetails = data => {
    formik.setValues({
      invoice: {
        ...invoice,
        yourDetails: {
          yourCompany: data.yourCompany,
          yourName: data.yourName,
          yourAddress: data.yourAddress,
          yourCity: data.yourCity,
          yourWebsite: data.yourWebsite,
          yourEmail: data.yourEmail,
          yourPhone: data.yourPhone,
          yourBank: data.yourBank,
          yourAccountNumber: data.yourAccountNumber,
          yourBankBranch: data.yourBankBranch,
          yourRegistrationNumber: data.yourRegistrationNumber,
        },
      },
    });
    setInvoice({
      ...invoice,
      yourDetails: {
        yourCompany: data.yourCompany,
        yourName: data.yourName,
        yourAddress: data.yourAddress,
        yourCity: data.yourCity,
        yourWebsite: data.yourWebsite,
        yourEmail: data.yourEmail,
        yourPhone: data.yourPhone,
        yourBank: data.yourBank,
        yourAccountNumber: data.yourAccountNumber,
        yourBankBranch: data.yourBankBranch,
        yourRegistrationNumber: data.yourRegistrationNumber,
      },
    });
  };
  // getting data from UserDetails Component ends

  // getting data from ClientDetails Component starts
  const getClientDetails = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        clientDetails: {
          ...formik.values.invoice.clientDetails,
          clientName: data.clientName,
          clientAddress: data.clientAddress,
          clientCity: data.clientCity,
          clientWebsite: data.clientWebsite,
          clientEmail: data.clientEmail,
          clientPhone: data.clientPhone,
          clientCompany: data.clientCompany,
        },
      },
    });
  };
  // getting data from ClientDetails Component ends

  // getting data from InvoiceItems Component starts
  const getItems = data => {
    setInvoice({
      ...invoice,
      items: data.invoiceItems,
      tax: data.tax,
    });

    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        items: data.invoiceItems,
        tax: data.tax,
      },
    });
  };
  // getting data from Notes Component starts
  const getNotes = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        notes: {
          ...formik.values.invoice.notes,
          note: data.note,
          noteToggle: data.noteToggle,
        },
      },
    });
  };

  // getting data from Terms Component starts
  const getTerms = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        terms: {
          ...formik.values.invoice.terms,
          term: data.term,
          termToggle: data.termToggle,
        },
      },
    });
  };

  // getting data from InvoiceDates Component starts
  const getDates = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        invoiceNumber: data[0],
        invoiceDate: data[1],
        dueDate: data[2],
      },
    });
  };

  // getting data from DigitalSignature Component starts
  const getDigitalSignature = data => {
    setInvoice({
      ...invoice,
      digitalSignature: {
        signature: data.digitalSignature.signature,
        signatureSize: data.digitalSignature.signatureSize,
        signatureToggle: data.digitalSignature.signatureToggle,
        sealColor: data.digitalSignature.sealColor,
      },
      yourDetails: {
        ...invoice.yourDetails,
        yourRegistrationNumber: data.registrationNumber,
      },
    });
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} id="form">
        <InvoiceImage
          yourLogo={formik.values.invoice.yourLogo}
          getLogo={getLogo}
          resetForm={reset}
          alertMessage={alertMessage}
        />
        <UserDetails
          yourDetails={formik.values.invoice.yourDetails}
          getYourDetails={data => getYourDetails(data)}
          resetForm={reset}
        />
        <ClientDetails
          clientDetails={formik.values.invoice.clientDetails}
          getClientDetails={data => getClientDetails(data)}
          resetForm={reset}
        />
        <InvoiceDates
          invoiceDates={[
            formik.values.invoice.invoiceNumber,
            formik.values.invoice.invoiceDate,
            formik.values.invoice.dueDate,
          ]}
          getDates={data => getDates(data)}
          resetForm={reset}
        />
        {/* Invoice Number And Dates End */}
        <InvoiceItems
          invoiceItems={formik.values.invoice.items}
          tax={formik.values.invoice.tax}
          getItems={data => getItems(data)}
          resetForm={reset}
          alertMessage={alertMessage}
        />
        <InvoiceNotes
          notes={formik.values.invoice.notes}
          clientName={formik.values.invoice.clientDetails.clientName}
          userName = {formik.values.invoice.yourDetails.yourName}
          
          usersCompany={formik.values.invoice.yourDetails.yourCompany}
          invoiceDate={formik.values.invoice.invoiceDate}
          getNotes={data => getNotes(data)}
          resetForm={reset}
        />
        <InvoiceTerms
          terms={formik.values.invoice.terms}
          getTerms={data => getTerms(data)}
          resetForm={reset}
        />
        <DigitalSignature
          digitalSignature={formik.values.invoice.digitalSignature}
          registrationNumber={
            formik.values.invoice.yourDetails.registrationNumber
          }
          yourName={formik.values.invoice.yourDetails.yourName}
          yourCompany={formik.values.invoice.yourDetails.yourCompany}
          invoiceDate={formik.values.invoice.invoiceDate}
          getDigitalSignature={data => getDigitalSignature(data)}
          resetForm={reset}
          alertMessage={alertMessage}
        />
        {/* Save Button */}
        <Flex>
          <Box mt={8}>
            <Button
              type="submit"
              _focus={{
                outline: 'none',
              }}
              fontWeight={600}
              color={'white'}
              bg={'purple.400'}
              borderRadius={'lg'}
              href={'#'}
              _hover={{
                bg: 'purple.700',
              }}
              rightIcon={<RiIcons.RiSaveLine />}
            >
              Save
            </Button>
          </Box>
          <Spacer />
          <Box mt={8}>
            <Button
              _focus={{
                outline: 'none',
              }}
              fontWeight={600}
              color={'black'}
              bg={'white'}
              borderRadius={'lg'}
              href={'#'}
              _hover={{
                bg: 'whiteAlpha.800',
              }}
              type="reset"
              onClick={clearAllData}
              variant="outline"
              rightIcon={<RiIcons.RiDeleteBin2Line />}
            >
              Clear All
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
}
