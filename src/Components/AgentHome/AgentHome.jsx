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
  const [sortOrder, setSortOrder] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch, user, isFetching } = useContext(Context);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedTasks,setSelectedTasks]=useState([])
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const [sortByName, setSortByName] = useState(false);

  const handleSortByName = () => {
    setSortByName((prevSortByName) => !prevSortByName);
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      let data = {
        query: {
          agentId: user._id,
          status: !active ? "In-progress" : "Completed",
          search:searchQuery,

         
        },
        options: {
          sort: { createdAt: sortOrder ?-1:1},
          populate:[{
            path:"agentId",
            model:"user",
            select:{
              password:0
            }
          },
          {
            path:"userId",
            model:"user",
            select:{
              password:0
            }
          }]
        },
      };

      if(selectedTasks.length!=0)
      {
        console.log("selectedTasks",selectedTasks)
        data.query={
          ...data.query,
         
              tasksList:{$elemMatch:{name:{$in:selectedTasks}}}
            
          
        }
      }
      await commonApi({
        action: "listTask",
        data: data,
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
      
          // Sort the appointments based on createdAt field
          // let sortedAppointments = DATA.data.sort((a, b) =>
          //   sortOrder === "asc"
          //     ? a.createdAt.localeCompare(b.createdAt)
          //     : b.createdAt.localeCompare(a.createdAt)
          // );

          // // If the sortByName checkbox is checked, sort by name instead
          // if (sortByName) {
          //   sortedAppointments = DATA.data.sort((a, b) =>
          //     sortOrder === "asc"
          //       ? a.userObj?.name?.firstName.localeCompare(
          //           b.userObj?.name?.firstName
          //         )
          //       : b.userObj?.name?.firstName.localeCompare(
          //           a.userObj?.name?.firstName
          //         )
          //   );
          // }

          setAppointments(DATA.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchAppointments();
  }, [active, sortOrder, searchQuery,selectedTasks]); // Update useEffect dependencies


  const filterAppointmentType=(taskName)=>{
    if(selectedTasks.includes(taskName))
    {
      const indexToRemove = selectedTasks.indexOf(taskName);
      const updatedSelectedTasks = [...selectedTasks];
      updatedSelectedTasks.splice(indexToRemove, 1);
      setSelectedTasks(updatedSelectedTasks);
    }
    else
    {
      setSelectedTasks([...selectedTasks, taskName]);
    }
  }
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
                  className="text-white bg-pr font-medium px-4 py-2 rounded-md text-center inline-flex items-center"
                  type="button"
                >
                  Filter by category
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-12 right-0 z-10 w-56 p-3 bg-white rounded-md shadow shadow-slate-300">
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="dropdownDefault"
                    >
                      <h6 className="mb-3 text-md font-medium text-gray-900 dark:text-white">
                        Appointment Type
                      </h6>
                      <li class="flex items-center">
                        <input
                          id="airport"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Airport Pickup")
                          }}
                          checked={selectedTasks.includes("Airport Pickup")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
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
                          onChange={()=>{
                            filterAppointmentType("Bus Pass")
                          }}
                          checked={selectedTasks.includes("Bus Pass")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr"
                        />

                        <label
                          for="BusPass"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Bus Pass
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="HotelStay"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Hotel Stay ")
                          }}
                          checked={selectedTasks.includes("Hotel Stay ")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="HotelStay"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Hotel Stay
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="CityTour"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("City Tour ")
                          }}
                          checked={selectedTasks.includes("City Tour ")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="CityTour"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          City Tour
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="GovtId"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Government id issue ")
                          }}
                          checked={selectedTasks.includes("Government id issue ")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="GovtId"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Government id issue
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="HealthCard"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Health Card ")
                          }}
                          checked={selectedTasks.includes("Health Card ")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="HealthCard"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Health Card
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="Housing"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Housing")
                          }}
                          checked={selectedTasks.includes("Housing")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="Housing"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Housing
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="Banking"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Banking ")
                          }}
                          checked={selectedTasks.includes("Banking ")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="Banking"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Banking
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input
                          id="MobileIssue"
                          type="checkbox"
                          onChange={()=>{
                            filterAppointmentType("Mobile/Sim Issue ")
                          }}
                          checked={selectedTasks.includes("Mobile/Sim Issue ")}
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />

                        <label
                          for="MobileIssue"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Mobile/Sim Issue
                        </label>
                      </li>
                      <h6 className="mb-3 text-md font-medium text-gray-900 ">
                        Sort by
                      </h6>
                      <li className="flex items-center">
                        <input
                          id="sortTime"
                          type="checkbox"
                          onClick={()=>{
                            setSortOrder(!sortOrder)
                          }}
                          checked={sortOrder}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />
                        <label
                          htmlFor="sortTime"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Time 
                        </label>
                      </li>
                      {/* <li className="flex items-center">
                        <input
                          id="sortName"
                          type="checkbox"
                          checked={sortByName}
                          onChange={handleSortByName}
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-pr focus:ring-pr "
                        />
                        <label
                          htmlFor="sortName"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Name
                        </label>
                      </li> */}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {appointments
            // .filter((appointment) =>
            //   appointment.userObj?.name?.firstName
            //     .toLowerCase()
            //     .includes(searchQuery.toLowerCase())
            // )
            .map((appointment, index) => {
           
              let totalTasks = appointment?.tasksList?.length
                ? appointment?.tasksList?.length
                : 0;
              let completedTasks = appointment?.tasksList?.filter(
                (task) => task.status === "Completed"
              )?.length
                ? appointment?.tasksList?.filter(
                    (task) => task.status === "Completed"
                  )?.length
                : 0;

              const latestCompleted = appointment?.tasksList?.reduce(
                (acc, current) => {
                  if (
                    !acc ||
                    new Date(current.completedAt) > new Date(acc.completedAt)
                  ) {
                    return current;
                  }
                  return acc;
                },
                null
              );

              

              function customSort(a, b) {
                // First, sort by completedAt in descending order (latest to earliest)
                const completedAtA = new Date(a.completedAt);
                const completedAtB = new Date(b.completedAt);
                if (completedAtA > completedAtB) return -1;
                if (completedAtA < completedAtB) return 1;

                // If the completedAt is the same, then sort by _id in ascending order
                if (a._id < b._id) return -1;
                if (a._id > b._id) return 1;

                return 0;
              }

              // Sort the data using the custom comparison function
              const sortedData = appointment?.tasksList.sort(customSort);
              const firstObjectWithoutCompletedAt = sortedData.find(
                (item) => !item.completedAt
              );

             
              return (
                <div
                  className="mt-10 shadow shadow-slate-300 rounded-xl flex items-center gap-5 p-6 bg-white"
                  key={index}
                  onClick={() => {
                    navigate("/agent-task/?taskId=" + appointment._id);
                  }}
                >
                  <img
                    className="w-44 h-48  rounded-md"
                    src={appointment?.userId?.profilePicture || agent}
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

                    <div className="w-full flex">
                      <h1 className="text-sm lg:text-lg font_ab text-gray-500 text-bold flex">
                        Task Completed :{" "}
                        <p className="flex pl-2 text-black">
                          {completedTasks + "/" + totalTasks}
                        </p>
                      </h1>
                    </div>

                    <div className="w-full flex">
                      <h1 className="text-sm lg:text-lg font_ab text-gray-500 text-bold flex">
                        Last Completed :{" "}
                        <p className="flex pl-2 text-black">
                          {latestCompleted?.completed ? latestCompleted?.name : "Nothing for now"}
                        </p>
                      </h1>
                    </div>

                    <div className="w-full flex">
                      <h1 className="text-sm lg:text-lg font_ab text-gray-500 text-bold flex">
                        Next Activity :{" "}
                        <p className="flex pl-2 text-black">
                          {firstObjectWithoutCompletedAt?.name || "All Done"}
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
