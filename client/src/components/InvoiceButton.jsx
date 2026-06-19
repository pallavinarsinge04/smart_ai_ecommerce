
function InvoiceButton() {

  const downloadInvoice = () => {
    window.print();
  };

  return (
    <button onClick={downloadInvoice}>
      Download Invoice
    </button>
  );
}

export default InvoiceButton;
