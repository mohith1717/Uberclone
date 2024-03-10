import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Qrcode = () => {
  return (
    <div className="flex items-center justify-center h-[100%] z-20 mt-6">
      <div className="container max-w-full">
        <div className="title text-center">
          <h1 className="text-center mb-40">It's easier in the apps</h1>
        </div>
        <div className="scanners ml-20 flex gap-32 items-center justify-center">
          <div className="scanner-container flex items-center">
            <div className="firstscanner">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_300,h_300/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png"
                alt="image one of uberscanner"
              />
            </div>
            <div className="textcontainer ml-4">
              <h3 className="font-mono text-red-700 text-2xl">
                <b>Download the Uber app</b>
              </h3>
              <span className="text-lg">Scan to download</span>
            </div>
            <div className="iconcontainer ">
              <ArrowForwardIcon className="ml-3 mb-5" />
            </div>
          </div>
          <div className="scanner-container flex items-center">
            <div className="secondscanner">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_300,h_300/v1690813624/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png"
                alt="image2 of uber"
              />
            </div>
            <div className="textcontainer ml-4">
              <h3 className="font-mono text-red-700 text-2xl">
                <b>Download the Uber app</b>
              </h3>
              <span>Scan to download</span>
            </div>
            <ArrowForwardIcon className="ml-3 mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
