import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
const ViewProfile = () => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" mt-32 mb-32 lg:mt-32 lg:mb-32 px-1">
        <div className=" lg:max-w-7xl w-full mx-auto p-4 lg:py-20 lg:px-20 border-2 rounded-xl ">
          
          <div className="w-full flex items-center gap-2 border-2 justify-center rounded-2xl">
            <div className="flex items-center lg:items-center flex-col lg:flex-col gap-5 px-4 py-4">
              <img className="w-32 lg:w-auto" src={agent} alt="" />
              <div>
                <h1 className="text-3xl">SAMAR DAHIYA</h1>
                <h1 className="text-lg mt-1 mb-4">Member Since : 2020</h1>
              </div>
            </div>

          </div>

          <div class="relative flex flex-col items-center rounded-[20px] mx-auto  bg-clip-border shadow-3xl shadow-shadow-500 ">
            <div class="mt-2 mb-8 w-full">
              <h4 class="px-2 text-xl font-bold mt-5">General Information</h4>
              <p class="mt-2 px-2 text-base text-gray-600">
                As we live, our hearts turn colder. Cause pain is what we go
                through as we become older. We get insulted by others, lose
                trust for those others. We get back stabbed by friends. It
                becomes harder for us to give others a hand. We get our heart
                broken by people we love, even that we give them all...
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4 px-2 w-full">
              <div class="flex flex-col items-start justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p class="text-sm text-gray-600">Name</p>
                <p class="text-base font-medium text-navy-700 ">Jane Sic</p>
              </div>

              <div class="flex flex-col justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p class="text-sm text-gray-600">Birthday</p>
                <p class="text-base font-medium text-navy-700 ">20 July 1986</p>
              </div>

              <div class="flex flex-col items-start justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p class="text-sm text-gray-600">Birthday</p>
                <p class="text-base font-medium text-navy-700 ">20 July 1986</p>
              </div>

              <div class="flex flex-col justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p class="text-sm text-gray-600">Birthday</p>
                <p class="text-base font-medium text-navy-700 ">20 July 1986</p>
              </div>

              <div class="flex flex-col items-start justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p class="text-sm text-gray-600">Birthday</p>
                <p class="text-base font-medium text-navy-700 ">20 July 1986</p>
              </div>

              <div class="flex flex-col justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                <p class="text-sm text-gray-600">Birthday</p>
                <p class="text-base font-medium text-navy-700 ">20 July 1986</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
