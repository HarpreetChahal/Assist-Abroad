import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
const Profile = () => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" mt-32 lg:mt-32 px-3">
        <div className=" lg:max-w-7xl w-full mx-auto p-4 lg:py-20 lg:px-20 border-2 rounded-xl ">
          <div className="w-full flex items-start gap-2 justify-between">
            <div className="flex items-start lg:items-center flex-col lg:flex-row gap-10 ">
              <img className="w-32 lg:w-auto" src={agent} alt="" />
              <div>
                <h1 className="text-3xl">SAMAR DAHIYA</h1>
                <h1 className="text-lg mt-1 mb-4">Member Since : 2020</h1>
                <input
                  type="file"
                  className="hidden"
                  name="myfile"
                  id="myfile"
                />
                <label
                  htmlFor="myfile"
                  className="border rounded-md cursor-pointer px-4 py-2 mt-4 text-gray-500"
                >
                  Choose image
                </label>
              </div>
            </div>
            <div className="flex items-center  gap-3">
              {!edit ? (
                <button
                  onClick={() => setEdit(true)}
                  className="px-4 bg-pr text-white py-2 rounded-md"
                >
                  Edit
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setEdit(false)}
                    className="border rounded-md cursor-pointer px-4 py-2 text-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setEdit(false)}
                    className="px-4 bg-pr text-white py-2 rounded-md"
                  >
                    Save
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Name
              </p>{" "}
              <input
                type="text"
                disabled={!edit}
                defaultValue={"Samar Dahiya"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div>
            <div className="flex mt-2 items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Contact
              </p>{" "}
              <input
                type="text"
                disabled={!edit}
                defaultValue={"(306)***-**96"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div>
            <div className="flex mt-2 items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Email
              </p>{" "}
              <input
                type="email"
                disabled={!edit}
                defaultValue={"samar******@gmail.com"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div>
            <div className="flex mt-2 items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Address
              </p>{" "}
              <input
                type="text"
                disabled={!edit}
                defaultValue={"#2, 875 Regina"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
