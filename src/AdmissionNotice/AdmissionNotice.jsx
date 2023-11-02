import React from "react";

const AdmissionNotice = () => {
  const onButtonClick = () => {
    const pdfUrl = "https://www.soundczech.cz/temp/lorem-ipsum.pdf";
    const newWindow = window.open(pdfUrl, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  return (
    <div className="grid grid-cols-3 mt-10 mb-10">
      <div className="text-left font-semibold">Admission Notice 2024</div>
      <div>Our All Branch</div>
      <button className="btn btn-primary" onClick={onButtonClick}>
        Download
      </button>
    </div>
  );
};

export default AdmissionNotice;
