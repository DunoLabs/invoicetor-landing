function checkEmpty(invoice) {
    if(invoice.yourLogo instanceof Object && !(invoice.yourLogo.image==='' || invoice.yourLogo.image===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourCompany==='' || invoice.yourDetails.yourCompany===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourCity==='' || invoice.yourDetails.yourCity===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourAddress==='' || invoice.yourDetails.yourAddress===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourName==='' || invoice.yourDetails.yourName===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourEmail==='' || invoice.yourDetails.yourEmail===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourPhone==='' || invoice.yourDetails.yourPhone===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourWebsite==='' || invoice.yourDetails.yourWebsite===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourBank==='' || invoice.yourDetails.yourBank===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourBankAccount==='' || invoice.yourDetails.yourBankAccount===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourBankBranch==='' || invoice.yourDetails.yourBankBranch===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourRegistrationNumber==='' || invoice.yourDetails.yourRegistrationNumber===undefined)) return false;
    if(invoice.yourDetails instanceof Object && !(invoice.yourDetails.yourAccountNumber==='' || invoice.yourDetails.yourAccountNumber===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientName==='' || invoice.clientDetails.clientName===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientAddress==='' || invoice.clientDetails.clientAddress===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientCity==='' || invoice.clientDetails.clientCity===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientWebsite==='' || invoice.clientDetails.clientWebsite===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientEmail==='' || invoice.clientDetails.clientEmail===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientPhone==='' || invoice.clientDetails.clientPhone===undefined)) return false;
    if(invoice.clientDetails instanceof Object && !(invoice.clientDetails.clientCompany==='' || invoice.clientDetails.clientCompany===undefined)) return false;
    if(invoice.items.length > 0) return false;
    if(invoice.invoiceNumber !== '' && invoice.invoiceNumber!==undefined) return false;
    if(invoice.invoiceDate !== '' && invoice.invoiceDate!==undefined) return false;
    if(invoice.dueDate !== '' && invoice.dueDate!==undefined) return false;
    if(invoice.notes instanceof Object && !(invoice.notes.note === '' || invoice.notes.note ===undefined)) return false;
    if(invoice.digitalSignature instanceof Object && !(invoice.digitalSignature.signature === '' || invoice.digitalSignature.signature === undefined)) return false;
    return true;
}
  
export { checkEmpty };