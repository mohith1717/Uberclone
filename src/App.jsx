import React from "react";
import "./App.scss";
// import Navbar from "./components/homepage/Navbar";
import Homepage from "./components/homepage/Homepage";
import { QrCode } from "@mui/icons-material";
// import Qrcode from "./components/Qrcode/Qrcode";
import Qrcode from "./components/qrcode/Qrcode";
import Column from "./components/columns/Column";
import Whatwegive from "./components/whatwegive/Whatwegive"
// import Qrcode from "./components/qrcode/Qrcode";
// import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
  return (
    <>
      <section >
        <Homepage />
      </section>
      {/* <section className="portfolio">
        <Portfolio />
      </section> */}
      <section className="bg-white h-screen w-screen">
        <Whatwegive className="z-9"/>
      </section>
      <section></section>
      <section></section>
      <section className="z-10"></section>
      <section className="z-20">
        {/* <QrCode/> */}
        <Qrcode/>
      </section>
      <section>
        <Column/>
      </section>
    </>
  );
};

export default App;
