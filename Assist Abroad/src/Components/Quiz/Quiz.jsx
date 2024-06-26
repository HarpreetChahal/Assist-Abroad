import React from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="bg-[#F6F7FC] relative min-h-screen">
      <Navbar />
      <section
        className="w-full pt-32 lg:pt-52 px-5 lg:mx-0
        "
      >
        <div className="bg-white mx-auto shadow-md w-full border rounded-xl lg:max-w-7xl py-9  px-5 lg:px-10  ">
          <h1 className="text-3xl text-[#23314C] font_ab">
            Q1. What languages do you know?
          </h1>
          <form action="">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="english"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="english"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    English
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="french"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="french"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    French
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Spanish"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Spanish"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    Spanish
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Hindi"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Hindi"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    Hindi
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="Other"
                    name="push-notifications"
                    type="radio"
                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="Other"
                    className="block text-xl font_ab font-medium leading-6 text-[#23314C]"
                  >
                    Other
                  </label>

                  <input
                    type="text"
                    className="bg-[#FEFEFE] px-2 py-2 border outline-none w-40 rounded-md"
                    placeholder="Type here"
                  />
                </div>
              </div>
            </fieldset>
          </form>

          <div className=" mt-10 flex items-center justify-between">
            <button className="px-10 py-2 bg-pr text-white rounded-md">
              Previous
            </button>
            <button className="px-10 py-2 bg-pr text-white rounded-md">
              Next
            </button>
             
          </div>
        </div>
      </section>
    <p className=" mt-96 text-center text-[#23314C]">© 2023 Assist Abroad , Inc. All Rights Reserved.</p>
    </div>
  );
};

export default Quiz;
