import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const YourComponent = () => {
  return (
    <div className="flex pl-1 items-center iconcontainer mt-[1px] relative group hover:rounded-md hover:bg-gray-700">
      <span className="cursor-pointer text-white font-poppins ml-8">About</span>

      <KeyboardArrowDownOutlinedIcon className="cursor-pointer" />
    </div>
  );
};

export default YourComponent;
