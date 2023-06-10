import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import Rating from "@mui/material/Rating";

import { Rating } from '@mui/material';

const Arrival = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className=" min-h-screen px-4">
      <Navbar />
      <Modal open={open} setOpen={setOpen}/>
      <div className=" mt-28">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActive(false)}
                className={
                  !active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-sm lg:text-lg"
                    : "border border-pr font-medium px-10 py-2 rounded-md  text-sm lg:text-lg"
                }
              >
                Pre-arrival Form
              </button>
              <button
                onClick={() => setActive(true)}
                className={
                  active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-sm lg:text-lg"
                    : "border border-pr font-medium px-10 py-2 rounded-md  text-sm lg:text-lg"
                }
              >
                Tasks
              </button>
            </div>
          </div>
          {!active && (
            <div className="mt-20 max-w-7xl mx-auto bg-whittext-base lg:text-2xle border-2 rounded-2xl p-4 lg:p-10">
              <h1 className="text-xl lg:text-3xl text-center font-bold pb-10">
                PRE-ARRIVAL FORM
              </h1>

              <div className="flex items-center justify-center flex-col ">
                <div className="mt-6 space-y-3">
                  <div className="relative flex items-center  lg:gap-x-6">
                    <p className="text-base lg:text-2xl w-32 lg:w-40">Date of Arrival</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>
                  <div className="relative flex items-center lg:gap-x-6">
                    <p className="text-base lg:text-2xl w-32 lg:w-40">Flight Ticket</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>
                  <div className="relative flex items-center lg:gap-x-6">
                    <p className="text-base lg:text-2xl w-32 lg:w-40">Arrival Time</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>

                  <div className="relative flex items-center lg:gap-x-6">
                    <p className="text-base lg:text-2xl w-32 lg:w-40">Airport</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>
                </div>
                <button className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
                  SUBMIT
                </button>
              </div>
            </div>
          )}
          {active && (
            <div className="mt-20 max-w-7xl mx-auto bg-white border-2 rounded-2xl p-10">
              <h1 className="text-3xl text-center font-bold">TASKS</h1>
              <div className="py-10 lg:pl-32">
                <p className="text-sm lg:text-lg">Client : Happy Singh</p>
                <p className="text-sm lg:text-lg">Contact : 306-***-**96</p>
                <p className="text-sm lg:text-lg">Email: dead******@gmail.com</p>
                <p className="text-sm lg:text-lg">Address: #2, 875 Regina</p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <div className="mt-6 space-y-3">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-sm lg:text-lg text-gray-900"
                      >
                        Airport Pickup
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-sm lg:text-lg text-gray-900"
                      >
                        Hotel Stay
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-sm lg:text-lg text-gray-900"
                      >
                        Bus Pass
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-sm lg:text-lg text-gray-900"
                      >
                        Government Id Issue
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-sm lg:text-lg text-gray-900"
                      >
                        Health Card
                      </label>
                    </div>
                  </div>
                </div>
                <button onClick={()=>setOpen(true)} className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
                  Give Feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function Modal({open, setOpen}) {

  const cancelButtonRef = useRef(null);
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);

  return (
  
  );
}

export default Arrival;
