import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Column = () => {
  return (
    <div className="bg-black flex-col text-white max-w-[1366px] m-auto h-[100%] w-[100%]">
      <div className="ubertitle ml-[150px] pb-10 pt-2">
        <span className="text-2xl ">Uber</span>
      </div>
      <div className="visit ml-[150px] cursor-pointer mb-16 relative group">
        <span className="pb-7 inline-block">Visit Help Center</span>
        <span className="absolute bottom-0 left-0 w-[10%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-all origin-bottom"></span>
      </div>

      <div className="container flex flex-row flex-wrap ml-[150px]  gap-36">
        <div className="first mr-12">
          <h2 className="mb-2 font-bold">Company</h2>
          <ul className="flex-col cursor-pointer">
            <li className="text-[14px] mb-3 hover:text-gray-500"> About us</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Our offerings</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Newsroom</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Investors</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Blog</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Careers</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">AI</li>
            <li className="text-[14px]">Gift cards</li>
          </ul>
        </div>

        <div className="second mr-12">
          <h2 className="mb-2 font-bold">Products</h2>
          <ul className="cursor-pointer">
            <li className="text-[14px] mb-3 hover:text-gray-500">Ride</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Drive</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Deliver</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Eat</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Uber for Business</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Uber Freqight</li>
          </ul>
        </div>
        <div className="third mr-12">
          <h2 className="mb-2 font-bold">Global Citizenship</h2>
          <ul className="cursor-pointer">
            <li className="text-[14px] mb-3 hover:text-gray-500">Safety</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Diversity and Inclusion</li>
          </ul>
        </div>
        <div className="fourth">
          <h2 className="mb-2 font-bold">Travel</h2>
          <ul className="cursor-pointer">
            <li className="text-[14px] mb-3 hover:text-gray-500">Reserves</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Airports</li>
            <li className="text-[14px] mb-3 hover:text-gray-500">Cities</li>
          </ul>
        </div>
      </div>
      <div className="links ml-[150px] mt-14">
        <div className="imgcontainer flex justify-between mr-40 ">
          <div className="first-cont flex justify-between gap-20">
            <FacebookIcon className="cursor-pointer  hover:bg-blue-500 hover:rounded-lg hover:p-[2px]"/>
            <TwitterIcon className="cursor-pointer  hover:bg-blue-500 hover:rounded-lg hover:p-[2px]"/>
            <YouTubeIcon className="cursor-pointer  hover:bg-red-500 hover:rounded-lg hover:p-[2px]"/>
            <LinkedInIcon className="cursor-pointer  hover:bg-blue-400 hover:rounded-lg hover:p-[2px] "/>
            <InstagramIcon className="cursor-pointer  hover:bg-yellow-500 hover:rounded-lg hover:p-[2px]"/>
            
          </div>
          <div className="second-cont flex items-center gap-4">
            <div className="title-one flex items-center hover:bg-gray-600 cursor-pointer hover:border p-2 rounded-[20px] border-none">
              <LanguageIcon />
              <h2 className="ml-2">English</h2>
            </div>
            <div className="title-second flex items-center hover:bg-gray-600 cursor-pointer hover:border p-2 rounded-[20px] border-none">
              <PlaceIcon />
              <h2 className="ml-2">Bhopal</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="downloader flex ml-[150px] mt-14">
        <div className="firstimg">
          <img
            src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
            alt=""
            className="object-cover w-[40%] "
          />
        </div>
        <div className="secondimg"></div>
        <img
          src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
          alt=""
          className="object-cover w-[10%]"
        />
      </div>

      <div className="footer ml-[150px] flex justify-between mt-14">
        <div className="one">
          <span className="text-gray-500 flex gap-2">
            <CopyrightIcon className="text-gray-400 " />
            2024 Uber Technologies Inc.
          </span>
        </div>
        <div className="two mr-44 flex">
          <ul className="flex gap-5">
            <li className="text-[14px] text-gray-500">Privacy</li>
            <li className="text-[14px]  text-gray-500">Accessibility</li>
            <li className="text-[14px] text-gray-500">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Column;
