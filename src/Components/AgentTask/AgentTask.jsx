import React from "react";
import Navbar from "../../layout/Navbar";

const AgentTask = () => {
  return (
    <div className="w-full px-4 lg:px-0">
      <Navbar />
      <div className="mt-40 max-w-7xl mx-auto bg-white border-2 rounded-2xl p-10">
        <h1 className="text-3xl text-center font-bold">TASKS</h1>
        <div className="py-10 lg:pl-32">
          <p className="text-lg">Client : Happy Singh</p>
          <p className="text-lg">Contact : 306-***-**96</p>
          <p className="text-lg">Email: dead******@gmail.com</p>
          <p className="text-lg">Address: #2, 875 Regina</p>
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
                  className="font-medium text-lg text-gray-900"
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
                  className="font-medium text-lg text-gray-900"
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
                  className="font-medium text-lg text-gray-900"
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
                  className="font-medium text-lg text-gray-900"
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
                  className="font-medium text-lg text-gray-900"
                >
                  Health Card
                </label>
              </div>
            </div>
          </div>
          <button className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
          Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentTask;
