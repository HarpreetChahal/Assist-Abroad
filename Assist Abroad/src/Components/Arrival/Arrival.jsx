import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Rating from "@mui/material/Rating";
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
              <h1 className="text-3xl text-center font-bold">
                PRE-ARRIVAL FORM
              </h1>

              <div className="flex items-center justify-center flex-col ">
                <div className="mt-6 space-y-3">
                  <div className="relative flex items-center  gap-x-6">
                    <p className="text-base lg:text-2xl lg:w-40 ">Date of Arrival</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>
                  <div className="relative flex items-center gap-x-6">
                    <p className="text-base lg:text-2xl lg:w-40">Flight Ticket</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>
                  <div className="relative flex items-center gap-x-6">
                    <p className="text-base lg:text-2xl lg:w-40">Arrival Time</p>
                    <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    />
                  </div>

                  <div className="relative flex items-center gap-x-6">
                    <p className="text-base lg:text-2xl lg:w-40">Airport</p>
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-96 lg:w-full lg:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl lg:text-2xl w-full text-center font-semibold leading-6 text-gray-900"
                      >
                        Feedback on Services
                      </Dialog.Title>
                      <div className="my-8">
                        <div className="flex items-center justify-between lg:grid grid-cols-2  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Airport Pickup
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value === 0 ? "Not Yet Rated" : `${value}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">Hotel Stay</p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value1}
                              onChange={(event, newValue) => {
                                setValue1(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value1 === 0 ? "Not Yet Rated" : `${value1}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4 l gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">Bus Pass</p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value2}
                              onChange={(event, newValue) => {
                                setValue2(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value2 === 0 ? "Not Yet Rated" : `${value2}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Government Id 
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value3}
                              onChange={(event, newValue) => {
                                setValue3(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value3 === 0 ? "Not Yet Rated" : `${value3}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">Health Card</p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value4}
                              onChange={(event, newValue) => {
                                setValue4(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value4 === 0 ? "Not Yet Rated" : `${value4}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-gray-500 text-left">Write your feedback here:</p>
                          <textarea
                            className="border outline-none rounded-md mt-2 bg-transparent w-full"
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="flex items-center justify-end">
                        <button className="text-white mt-4 bg-pr px-7 py-2 rounded-md">
                  Give Feedback
                </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Arrival;
