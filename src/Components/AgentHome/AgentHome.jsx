import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import { AiOutlineArrowDown } from "react-icons/ai";
import agent from "/src/Assets/agent.png";
import { Link } from "react-router-dom";
const AgentHome = () => {
  const [active, setActive] = useState(false);
  return (
    <div className=" min-h-screen px-4 lg:px-0">
      <Navbar />
      <div className=" mt-28">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActive(false)}
                className={
                  !active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-lg"
                    : "border border-pr text-pr font-medium px-10 py-2 rounded-md  text-lg"
                }
              >
                Ongoing
              </button>
              <button
                onClick={() => setActive(true)}
                className={
                  active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-lg"
                    : "border border-pr text-pr font-medium px-10 py-2 rounded-md  text-lg"
                }
              >
                Completed
              </button>
            </div>
            <button className="bg-pr px-5 py-2 rounded-md text-white flex items-center gap-1 text-lg">
              Sort <AiOutlineArrowDown className="w-5 h-5" />
            </button>
          </div>
          <Link
            to="/agent-task/1"
            className="mt-10 border-2 rounded-xl flex items-center gap-10 p-9"
          >
            <img className="w-32 lg:w-auto" src={agent} alt="" />
            <div>
              <h1 className="text-3xl">SAMAR DAHIYA</h1>
              <h1 className="text-lg mt-1">Member Since : 2020</h1>
            </div>
          </Link>
          <Link
            to="/agent-task/1"
            className="mt-10 border-2 rounded-xl flex items-center gap-10 p-9"
          >
            <img className="w-32 lg:w-auto" src={agent} alt="" />
            <div>
              <h1 className="text-3xl">SAMAR DAHIYA</h1>
              <h1 className="text-lg mt-1">Member Since : 2020</h1>
            </div>
          </Link>
          <Link
            to="/agent-task/1"
            className="mt-10 border-2 rounded-xl flex items-center gap-10 p-9"
          >
            <img className="w-32 lg:w-auto" src={agent} alt="" />
            <div>
              <h1 className="text-3xl">SAMAR DAHIYA</h1>
              <h1 className="text-lg mt-1">Member Since : 2020</h1>
            </div>
          </Link>
          <Link
            to="/agent-task/1"
            className="mt-10 border-2 rounded-xl flex items-center gap-10 p-9"
          >
            <img className="w-32 lg:w-auto" src={agent} alt="" />
            <div>
              <h1 className="text-3xl">SAMAR DAHIYA</h1>
              <h1 className="text-lg mt-1">Member Since : 2020</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentHome;
