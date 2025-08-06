import React from "react";
import backgroundImage from "../assets/herobg.png";
import resumePage1 from "../assets/resume/Resume-1.png";
import resumePage2 from "../assets/resume/Resume-2.png";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Rishi-Gupta-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-full h-screen flex flex-col relative"
      style={{
        paddingTop: "4rem",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="w-full h-full flex items-center justify-center p-4 relative z-10">
        <div
          className="relative bg-white/90 rounded-lg shadow-xl border border-gray-200 backdrop-blur-sm overflow-y-scroll no-scrollbar"
          style={{
            width: "850px",
            maxHeight: "calc(100vh - 6rem)",
          }}
        >
          <style>
            {`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              img {
                image-rendering: -webkit-optimize-contrast;
                image-rendering: crisp-edges;
              }
            `}
          </style>

          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={handleDownload}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors shadow-lg"
              aria-label="Download resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Resume pages */}
          <img
            src={resumePage1}
            alt="Resume Page 1"
            className="mx-auto"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <img
            src={resumePage2}
            alt="Resume Page 2"
            className="mx-auto"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
