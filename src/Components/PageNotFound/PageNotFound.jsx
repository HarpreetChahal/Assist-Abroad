import React from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";

const PaymentCard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-[#F6F7FC]">
        <div className="w-9/12 m-auto  min-h-screen flex items-center justify-center">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8 mt-20">
            <div className="border-t border-gray-200 text-center pt-8">
              <h1 className="text-9xl font-bold text-pr">404</h1>
              <div className="flex items-center justify-center">
                <img
                  src="https://i.ibb.co/ck1SGFJ/Group.png"
                  className="mx-auto"
                  alt="Error"
                />
              </div>
              <h1 className="text-5xl font-medium py-8 text-tc font_ab">
                Page not found
              </h1>
              <p className="text-2xl pb-8 px-12 font-medium text-tc font_ab">
                Looks like you've found the doorway to the great nothing
              </p>
              <button className="bg-pr text-white font-semibold px-6 py-3 rounded-md mr-6">
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
