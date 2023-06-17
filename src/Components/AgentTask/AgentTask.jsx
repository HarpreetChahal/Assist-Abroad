import React ,{useEffect,useState}from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import commonApi from "../../api/common";

const AgentTask = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("taskId");
  const [appointment,setAppointment]=useState(null)
  let fetchAppointment=async()=>{
    let data={
      query:{
        _id:name
      },
      options:{
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
        console.log("DATA",DATA)
        setAppointment(DATA.data[0])
      
      })
      .catch((error) => {
     
        console.error(error);
      });
  }
  useEffect(() => {
fetchAppointment()
  }, []);
  return (
    <div className="w-full px-4 lg:px-0">
      <Navbar />
      <div className="mt-40 max-w-7xl mx-auto bg-white border-2 rounded-2xl p-10">
           <h1 className="text-3xl text-center font-bold">TASKS</h1>
              <div class="container px-5 py-5 mx-auto bg-white rounded-2xl">
                <div class="p-5 bg-white flex items-center mx-auto  border-2 mb-5  rounded-lg sm:flex-row flex-col">
                  <div class="sm:w-48 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                    <img src={agent} />
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h1 class="text-black text-2xl title-font font-bold mb-2">
                      Client Details
                    </h1>
                    <div class="md:flex font-bold text-gray-800">
                      <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-1/2">
                          <h2 class="text-gray-500">Name</h2>
                          <p>{appointment?.userObj?.name?.firstName}</p>
                        </div>
                        <div class="w-1/2">
                          <h2 class="text-gray-500">Email</h2>
                          <p>{appointment?.userObj?.email}</p>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-1/2">
                          <h2 class="text-gray-500">Contact</h2>
                          <p>{appointment?.userObj?.phone?.phone}</p>
                        </div>
                      
                      </div>
                      
                    </div>
                    {/* <div class="flex mt-5">
                          <h2 class="text-gray-500 mr-2 font-bold" >Last Activity: </h2>
                          <p>Samar Dahiya</p>
                        </div>
                        <div class="flex mt-">
                          <h2 class="text-gray-500 mr-2 font-bold" >Hotel Stay: </h2>
                          <p>JW Marriot, Regina</p>
                        </div> */}
                        {/* <Link to={"/view-profile"}>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                     View Profile
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    </Link> */}
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
        <div className="flex items-center justify-center flex-col">
          <div className="mt-6 space-y-3">
           {appointment?.tasksList?.map((task,index)=>{

           return  <div className="relative flex gap-x-3" key={index}>
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
                  {task.name}
                </label>
              </div>
            </div>})}
            
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
