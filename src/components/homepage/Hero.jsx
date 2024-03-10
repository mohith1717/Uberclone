import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SquareIcon from '@mui/icons-material/Square';
import NearMeIcon from '@mui/icons-material/NearMe';

const Hero = () => {
  return (
    <div className="wrapper flex flex-row justify-between items-center relative top-10 mx-auto max-w-[1166px]">
      <div className="textcontainer flex items-center flex-1">
        <div className="textbox text-white flex flex-col f relative">
          <h1 className="font-extrabold text-6xl mb-[50px]">
            Go anywhere with Uber
          </h1>
          <span>Request a ride, hop in, and go.</span>
          <div className="firstinput flex items-center mb-2 relative">
            <div className="mt-2 bg-white h-[50px] w-[30px] rounded-l-lg relative">
              <FiberManualRecordIcon className="text-black mt-[18px] ml-3 h-[10%] " style={{ fontSize: "14px" }} />
              <div className="line-before"></div>
            </div>
            <input
              type="text"
              className="mt-2 bg-white w-[360px] h-[50px] px-3"
              placeholder={`Enter Location`}
            />
            <div className="mt-2 bg-white h-[50px] w-[40px] rounded-r-lg flex relative">
              <NearMeIcon className="text-black mt-3 " style={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="secondinput flex items-center relative">
            <div className="mt-2 bg-white h-[50px] w-[30px] rounded-l-lg relative">
              <SquareIcon className="text-black mt-[18px] ml-3 h-[10%]" style={{ fontSize: "14px" }} />
              <div className="line-before"></div>
            </div>
            <input
              type="text"
              className="mt-2 bg-white w-[400px] h-[50px] rounded-r-lg px-3"
              placeholder="Enter Destination"
            />
          </div>

          <button className="mt-6 w-[150px] h-auto bg-white text-black font-bold cursor-pointer border-none">
            See Prices
          </button>
        </div>
      </div>
      <div className="imagecontainer w-1/2 flex-2">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1396/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png"
          alt=""
          className="h-full w-full mr-10"
        />
      </div>
    </div>
  );
};

export default Hero;
