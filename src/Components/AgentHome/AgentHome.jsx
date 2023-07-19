import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../layout/Navbar";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import agent from "/src/Assets/agent.png";
import { Link } from "react-router-dom";
import commonApi from "../../api/common";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

import { BsPostcard } from "react-icons/bs";

const AgentHome = () => {
  const [active, setActive] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const { dispatch, user, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  

  useEffect(() => {
    const fetchAppointments = async () => {
      let data = {
        query: {
          agentId: user._id,
          status: !active ? "In-progress" : "Completed",
        },
        options: {
          sort: { createdAt: sortOrder === "asc" ? 1 : -1 },
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
          // Sort the appointments based on createdAt field
          const sortedAppointments = DATA.data.sort((a, b) =>
            sortOrder === "asc"
              ? a.createdAt.localeCompare(b.createdAt)
              : b.createdAt.localeCompare(a.createdAt)
          );
          setAppointments(sortedAppointments);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchAppointments();
  }, [active, sortOrder]); // Update useEffect dependencies

  const handleSort = () => {
    const newSortOrder = sortOrder === "desc" ? "asc" : "desc"; // Toggle sort order
    setSortOrder(newSortOrder);
  };

  return (
    <div className="min-h-screen px-4 lg:px-0 bg-[#f8f8fa]">
      <Navbar />
      <div className="pt-28 bg-[#f8f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              <button
                onClick={() => setActive(false)}
                className={
                  !active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-lg"
                    : "border border-pr text-pr font-medium px-10 py-2 rounded-md text-lg"
                }
              >
                Ongoing
              </button>
              <button
                onClick={() => setActive(true)}
                className={
                  active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-lg"
                    : "border border-pr text-pr font-medium px-10 py-2 rounded-md text-lg"
                }
              >
                Completed
              </button>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <TextField
                id="search-bar"
                className="bg-[#fff] border-none outline-none text-lg px-5 py-2 mb-4 lg:mb-0 border-2"
                size="small"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AiOutlineSearch className="w-5 h-5 cursor-pointer" />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <button  onClick={handleSort} className="bg-pr px-5 py-2 rounded-md text-white flex items-center gap-1 text-lg">
                Sort {sortOrder === "asc" ? <AiOutlineArrowDown className="w-5 h-5" /> : <AiOutlineArrowUp className="w-5 h-5" />} 
              </button> */}
              <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white bg-pr font-medium px-4 py-2 rounded-md  text-center inline-flex items-center"
                type="button"
              >
                Filter by category
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isDropdownOpen && (
              <div
                
                class="absolute top-12 right-0 z-10 w-56 p-3 bg-white rounded-md shadow shadow-slate-300"
              >
                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Appointment Type
                </h6>
                <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                  <li class="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label
                      for="apple"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Apple (56)
                    </label>
                  </li>

                  <li class="flex items-center">
                    <input
                      id="fitbit"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label
                      for="fitbit"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Fitbit (56)
                    </label>
                  </li>

                  <li class="flex items-center">
                    <input
                      id="dell"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label
                      for="dell"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Dell (56)
                    </label>
                  </li>

                  <li class="flex items-center">
                    <input
                      id="airport"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 "
                    />

                    <label
                      for="airport"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Airport Pickup
                    </label>
                  </li>

                  <li class="flex items-center">
                    <input
                      id="BusPass"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 "
                    />

                    <label
                      for="BusPass"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Bus Pass
                    </label>
                  </li>

                </ul>
              </div>
              )}
            </div>
            </div>
          </div>
          {appointments
            .filter((appointment) =>
              appointment.userObj?.name?.firstName
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((appointment, index) => {
              return (
                <div
                  className="mt-10 shadow shadow-slate-300 rounded-xl flex items-center gap-5 p-6 bg-white"
                  key={index}
                  onClick={() => {
                    navigate("/agent-task/?taskId=" + appointment._id);
                  }}
                >
                  <img
                    className="w-32 lg:w-auto rounded-md"
                    src={agent}
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl font_ab lg:text-4xl">
                      {appointment.userObj?.name?.firstName}
                    </h1>
                    <div className="w-full flex">
                      <h1 className="text-sm lg:text-lg mt-3 font_ab text-gray-500 text-bold flex">
                        Email :{" "}
                        <p className="flex pl-2 text-black">
                          {" "}
                          {appointment.userObj?.email}
                        </p>
                      </h1>
                    </div>
                    <div className="w-full flex">
                      <h1 className="text-sm lg:text-lg font_ab text-gray-500 text-bold flex">
                        Phone :{" "}
                        <p className="flex pl-2 text-black">
                          {appointment.userObj?.phone?.phone}
                        </p>
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          {appointments.length === 0 && (
            <div className="mt-10 shadow shadow-slate-300 rounded-xl text-center pt-20 pb-20 lg:pt-56 lg:pb-56 p-6 bg-white flex flex-col items-center justify-center">
              <BsPostcard className="w-32 h-32 text-[#4F5C78]" />
              <div>
                <h1 className="text-4xl font_ab text-[#4F5C78]">
                  No Appointments
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentHome;
