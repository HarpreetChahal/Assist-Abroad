import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../layout/Navbar";
import { AiOutlineArrowDown } from "react-icons/ai";
import agent from "/src/Assets/agent.png";
import { Link } from "react-router-dom";
import commonApi from "../../api/common";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

import { BsPostcard } from "react-icons/bs";

const AgentHome = () => {
  const [active, setActive] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const { dispatch, user, isFetching } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      let data = {
        query: {
          agentId: user._id,
          status: !active ? "In-progress" : "Completed",
        },
        options: {
          sort:{createdAt:-1}
        },
      };
      await commonApi({
        action: "listTask",
        data: data,
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          setAppointments(DATA.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchAppointments();
  }, [active]);
  return (
    <div className=" min-h-screen px-4 lg:px-0 bg-[#f8f8fa] ">
      <Navbar />
      <div className=" pt-28 bg-[#f8f8fa]">
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
            <button className="bg-pr px-20 py-2 rounded-md text-white flex items-center gap-1 text-lg">
              Search <AiOutlineArrowDown className="w-5 h-5" />
            </button>
            <button className="bg-pr px-5 py-2 rounded-md text-white flex items-center gap-1 text-lg">
              Sort <AiOutlineArrowDown className="w-5 h-5" />
            </button>
            
          </div>
          {appointments.map((appointment, index) => {
            return (
              <div
                className="mt-10 shadow shadow-slate-300 rounded-xl flex items-center gap-10 p-6 bg-white "
                key={index}
                onClick={() => {
                  navigate("/agent-task/?taskId=" + appointment._id);
                }}
              >
                <img className="w-32 lg:w-auto rounded-md" src={agent} alt="" />
                <div>
                  <h1 className="text-xl font_ab lg:text-4xl">
                    {appointment.userObj?.name?.firstName}
                  </h1>
                  <div className="w-full flex ">
                    <h1 className="text-sm lg:text-lg mt-3 font_ab text-gray-500 text-bold flex">
                      Email :{" "}
                      <p className="flex pl-2 text-black">
                        {" "}
                        {appointment.userObj?.email}
                      </p>
                    </h1>
                  </div>
                  <div className="w-full flex ">
                    <h1 className="text-sm lg:text-lg  font_ab text-gray-500 text-bold flex">
                      Phone :{" "}
                      <p className="flex pl-2 text-black">
                        {appointment.userObj?.phone?.phone}
                      </p>
                    </h1>
                  </div>
                  {/* <h1 className="text-lg mt-1">Member Since : 2020</h1> */}
                </div>
              </div>
            );
          })}
          {appointments.length == 0 && (
            
            <div className="mt-10 shadow shadow-slate-300 rounded-xl text-center pt-20 pb-20 lg:pt-56 lg:pb-56 p-6 bg-white flex flex-col items-center justify-center">
            <BsPostcard className="w-32 h-32 text-[#4F5C78]" />
            <div>
              <h1 className="text-4xl font_ab text-[#4F5C78]">No Appointments</h1>
              {/* <h1 className="text-lg mt-1">Member Since : 2020</h1> */}
            </div>
          </div>
          
           
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentHome;
