import React from "react";
import { FaLinkedin, FaFacebookSquare,FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-pr">
      <div className="lg:max-w-7xl mx-auto pt-10 pb-5 px-5 lg:px-0">
        <div className="flex justify-between items-start flex-col lg:flex-row w-full">
          <div>
            <p className="text-white font_ab italic">Address</p>

            <div className="w-10 h-[1px] bg-white"></div>
            <p className="text-white font_ab italic mt-4">
              XYZ, Lorem ipsum street
            </p>
            <p className="text-white font_ab italic">US, X1Y ZZZ</p>
            <p className="text-white font_ab italic mt-4">
              Tel: +1 999 999 9999{" "}
            </p>
            <p className="text-white font_ab italic">Fax: +1 999 999 9999</p>
          </div>
          <div className="flex items-center gap-3 mt-5 lg:mt-0">
            <a target="_blank" href="">
              <FaLinkedin className="w-12 h-12 text-white" />
            </a>
            <a target="_blank" href="">
              <FaFacebookSquare className="w-12 h-12 text-white" />
            </a>
            <a target="_blank" href="">
  <FaTwitterSquare className="w-12 h-12 text-white"/>
</a>
          </div>
        </div>

        <p className="w-full text-center text-white mt-10 text-sm">
          © 2023 Assist Abroad , Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
