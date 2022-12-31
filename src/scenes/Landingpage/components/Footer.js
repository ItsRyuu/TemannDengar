import React from "react";

// import footer data
import { footerData } from "../data";

// import components
import Copyright from "./Copyright";
import ln from '../../../assets/img/in.png';
import efbi from "../../../assets/img/efbi.png";
import yt from "../../../assets/img/yt.png";
import twt from "../../../assets/img/Vector.png";

const Footer = () => {
  // destructure footer data
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer className="bg-langit">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12" data-aos="fade-up" data-aos-delay="600">
          {/* info */}
          <div className="content-center w-[45%] mx-auto flex flex-col items-center xl:items-center">
            {/* logo */}
            <a href="/">
              <img className="mb-[20px]" src={logo} alt="" />
            </a>
            {/* address */}
            <div className="max-w-[260px] mb-[20px] text-primary font-bold">
              <a href="/">
                <h1>
                  Teman<b>Dengar</b>
                </h1>
              </a>
            </div>
            {/* email */}
            <div className="text-center object-center font-bold">
              <h1 className=" text-2xl mb-1" href="/">
                FAQ
              </h1>
              <div className="grid grid-cols-4 items-center  ">
                <img src={ln} className="w-12 justify-self-center" />
                <div className="col-start-2 col-span-2">
                  <h1 className="text-2xl mb-1" href="/">
                    TERMS & CONDITIONS
                  </h1>
                  <h1 className="text-2xl mb-1 " href="/">
                    SPONSORS
                  </h1>
                </div>
                <img src={efbi} className="w-12 justify-self-center" />
              </div>

              <div className="grid grid-cols-4 items-center  ">
                <img src={yt} className="w-12 justify-self-center" />
                <div className="col-start-2 col-span-2">
                  <h1 className="text-2xl mb-1" href="/">
                    PAYMENT INFO
                  </h1>
                  <h1 className="text-2xl mb-1 " href="/">
                    CONTACT US
                  </h1>
                </div>
                <img src={twt} className="w-12 justify-self-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
