import { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';

import { InvoiceContext } from '../../../../core/InvoiceContext';

import * as RiIcons from 'react-icons/ri';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  // aleart message
  const alertMessage = message => {
    toast(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false, // default value
      closeOnClick: true, // default value
      pauseOnHover: true, // default value
      draggable: true, // default value
      progress: undefined,
      className: 'alert-message',
    });
  };

  // getting the context from the provider
  const { invoice, setInvoice } = useContext(InvoiceContext);
  const formik = useFormik({
    initialValues: { invoice },
    onSubmit: values => {
      setInvoice(values.invoice);
      localStorage.setItem('invoicetor', JSON.stringify(values.invoice));
      alertMessage('✅ Invoice saved successfully');
    },
  });

  useEffect(() => {
    localStorage.setItem('invoicetor', JSON.stringify(invoice));
    setReset(false);
  }, [invoice]);

  // Upload Image in localstorage ends

  // Clear All Data
  const clearAllData = () => {
    setReset(true);
    formik.resetForm();
    localStorage.clear();

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
        signatureSize: '',
        signatureToggle: true,
        sealColor: '',
      },
    });

    // set formik initial values
    formik.setFieldValue('invoice.yourLogo.image', '');
    alertMessage('🗑️ All data cleared');
  };

  // getting data from UserDetails Component starts
  const getYourDetails = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        yourDetails: {
          ...formik.values.invoice.yourDetails,
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

  // getting ImageData from InvoiceImage Component starts
  const getLogo = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        yourLogo: {
          ...formik.values.invoice.yourLogo,
          image: data.image,
          imageSize: data.imageSize,
        },
      },
    });
    setInvoice({
      ...invoice,
      yourLogo: {
        image: data.image,
        imageSize: data.imageSize,
      },
    });
  };

  // getting data from DigitalSignature Component starts
  const getDigitalSignature = data => {
    formik.setValues({
      ...formik.values,
      invoice: {
        ...formik.values.invoice,
        digitalSignature: {
          ...formik.values.invoice?.digitalSignature,
          signature: data.digitalSignature?.signature,
          signatureSize: data.digitalSignature?.signatureSize || 200,
          signatureToggle: data.digitalSignature?.signatureToggle,
          sealColor: data.digitalSignature?.sealColor,
        },
        yourDetails: {
          ...formik.values.invoice.yourDetails,
          yourRegistrationNumber: data.registrationNumber,
        },
      },
    });
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
          yourLogo={invoice.yourLogo}
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
              onClick={clearAllData}
              variant="outline"
              rightIcon={<RiIcons.RiDeleteBin2Line />}
            >
              Clear All
            </Button>
          </Box>
        </Flex>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
