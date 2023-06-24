import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import commonApi from "../../api/common";
import moment from "moment";

const AgentTask = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("taskId");
  const [appointment, setAppointment] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  let fetchAppointment = async () => {
    let data = {
      query: {
        _id: name,
      },
      options: {
        populate: [
          {
            path: "userId",
            model: "user",
            select: ["name", "arrival", "email", "phone"],
          },
        ],
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
        setAppointment(DATA.data[0]);
        let tasks = DATA.data[0].tasksList;
        let count = 0;
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].status) {
            count++;
          }
        }

        if (count == tasks.length) {
          setShowCompleted(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAppointment();
  }, []);
  
  const updateTask = async (appointmentId, taskId) => {
    await commonApi({
      action: "updateTask",
      data: { appointmentId: appointmentId, taskId: taskId },
      config: {
        authToken: true,
      },
    })
      .then(({ DATA = {}, MESSAGE }) => {
        fetchAppointment();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const completeAppiointment = async (appointmentId) => {
    await commonApi({
      action: "updateStatus",
      data: { appointmentId: appointmentId},
      config: {
        authToken: true,
      },
    })
      .then(({ DATA = {}, MESSAGE }) => {
        fetchAppointment();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-full  bg-[#f8f8fa]  ">
      <Navbar />
      <div className="pt-32 pb-12 max-w-7xl mx-auto  p-5">
        {/* <h1 className="text-3xl text-center font-bold">TASKS</h1> */}
        <div className="container mx-auto bg-white rounded-2xl">
          <div className="p-5 bg-white flex items-center mx-auto shadow shadow-slate-300 rounded-lg sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h1 className="text-2xl font-medium font_ab mb-2">Client Details</h1>
              <div className="font-bold text-gray-800">
                <div className="space-x-3">
                  <div className="flex pb-2">
                    <h2 className="text-gray-500 pr-2">Name</h2>
                    <p>{appointment?.userObj?.name?.firstName}</p>
                  </div>
                </div>
                <div className="w-full space-x-3">
                  <div className="flex pb-2">
                    <h2 className="text-gray-500 pr-2">Email</h2>
                    <p>{appointment?.userId?.email}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex space-x-3">
                  <div className="flex pb-2">
                    <h2 className="text-gray-500 pr-2">Contact</h2>
                    <p>{appointment?.userId?.phone?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-40 sm:h-32 h-20 w-20 p-2 inline-flex items-center justify-center  flex-shrink-0">
              <img src={agent} style={{ borderRadius: 10 }} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-5 bg-white  p-5 shadow shadow-slate-300 rounded-xl shadow shadow-slate-300">
          <div className="flex flex-grow justify-between items-center">
            <div>
              <h1 className="text-2xl font-medium font_ab">
                Pre-Arrival Information
              </h1>
            </div>
          </div>
          <p className="text-slate-500 font-medium font_ab">
            Hello, here are client arrival details
          </p>
          <div>
            <div className="py-3">
              <div className="flex ">
                <h2 className="text-gray-500 mr-2 font-bold">Arrival Date </h2>
                <p>
                  {appointment?.userId?.arrival?.date &&
                    moment(appointment?.userId?.arrival?.date).format(
                      "DD/MM/YYYY"
                    )}
                </p>
              </div>
              <div className="flex">
                <h2 className="text-gray-500 mr-2 font-bold">Arrival Time </h2>
                <p>{appointment?.userId?.arrival?.time}</p>
              </div>
              <div className="flex">
                <h2 className="text-gray-500 mr-2 font-bold">Flight Number </h2>
                <p>{appointment?.userId?.arrival?.flightNumber}</p>
              </div>
              <div className="flex">
                <h2 className="text-gray-500 mr-2 font-bold">Flight Name </h2>
                <p>{appointment?.userId?.arrival?.flightName}</p>
              </div>
              <div className="flex">
                <h2 className="text-gray-500 mr-2 font-bold">Airport </h2>
                <p>{appointment?.userId?.arrival?.airport}</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-10 lg:pl-32">
                
                <p className="text-sm lg:text-lg">Client : Happy Singh</p>
                <p className="text-sm lg:text-lg">Contact : 306-***-**96</p>
                <p className="text-sm lg:text-lg">
                  Email: dead******@gmail.com
                </p>
                <p className="text-sm lg:text-lg">Address: #2, 875 Regina</p>
              </div> */}
        {/* <div className="flex items-center justify-center flex-col">
          <div className="mt-6 space-y-3">
           {appointment?.tasksList?.map((task,index)=>{

           return  <div className="relative flex gap-x-3" key={index}>
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  onClick={()=>{
                    if(!task.completed)
                   { updateTask(appointment._id,task._id)}
                  }}
                  checked={task.completed}
                  className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="comments"
                  className="font-medium text-lg text-gray-900"
                >
                  {task.name}
                </label>
              </div>
            </div>})}
            
          </div>
          <button className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
          Completed
          </button>
        </div> */}
        <div className="max-w-7xl mx-auto mt-5 bg-white  p-5 rounded-xl shadow shadow-slate-300">
          <div className="flex flex-grow justify-between items-center">
            <div>
              <h1 className="text-2xl font-medium font_ab">Tasks list</h1>
            </div>
          </div>
          <p className="text-slate-500 font-medium font_ab">
            Hello, here are your latest tasks
          </p>
          <div>
            <div className=" justify-between items-center py-3 px-2   ">
              {appointment?.tasksList?.map((task, index) => {
                return (
                  <div className="flex items-center justify-between  key={index} ">
                    <div className="flex  justify-start h-10 space-x-6 ">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        onClick={() => {
                          if (!task.completed) {
                            updateTask(appointment._id, task._id);
                          }
                        }}
                        checked={task.completed}
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      {/* {index + 1} */}
                      {/* </div>

                          <div className="justify-start text-sm "> */}
                      <label htmlFor="comments" className="font-medium ">
                        {task.name}
                      </label>
                    </div>
                    <div className="justify-end">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4  hover:text-slate-700 hover:cursor-pointer"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg> */}
                    </div>
                  </div>
                );
              })}
            </div>
            {showCompleted && (
              <div className="flex items-center justify-center h-10 space-x-6 ">
                <button className={`text-white mt-5 ${appointment.status =="Completed" ?"bg-[#23314c]" :"bg-pr"} px-7 py-2 rounded-md`} onClick={()=>{
                  completeAppiointment(appointment._id)
                }}>
                  Completed
                </button>
              </div>
            )}
            {/* <Button type="submit"  onClick={() => setOpen(true)} 
             
              style={{
                backgroundColor: "#6d81fe",
                color: "#fff",
                borderRadius: 5,
                padding: 8,
                marginTop: 20,
                textTransform: 'none',
                fontSize:15,
                width:180,
              }}>
                Give Feedback
              </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentTask;
