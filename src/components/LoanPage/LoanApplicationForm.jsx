import React from "react";
import formScreenshot from "../../assets/image/Form.png"; 

const LoanApplicationForm = () => {
  const handleDownloadDoc = () => {
    const fileUrl = "../../assets/ApplicationForm.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Loan_Application_Form.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* Form Image */}
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200">
        <img
          src={formScreenshot}
          alt="Form Preview"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadDoc}
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        📄 Download Loan Application Form
      </button>
    </div>
  );
};

export default LoanApplicationForm;
