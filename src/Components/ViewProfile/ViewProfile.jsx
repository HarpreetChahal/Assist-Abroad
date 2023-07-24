import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import commonApi from "../../api/common";
import moment from "moment"
const ViewProfile = () => {
  const [edit, setEdit] = useState(false);
  const [user,setUser]=useState(null)
  const search = useLocation().search;
  const agentId = new URLSearchParams(search).get("id");
  const fetchUser=async()=>{
    try{
      await commonApi({
        action: "getUserById",
        data: {
          id:agentId
        },
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
         setUser(DATA)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    catch(error)
    {
      console.error("Error",error)
    }
  }
  useEffect(() => {
    fetchUser()
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" pt-32 pb-20 lg:pt-32 lg:pb-12 px-1 bg-[#f8f8fa]">
        <div className=" lg:max-w-7xl w-full mx-auto p-4 lg:py-10 lg:px-10 border-2 rounded-xl bg-white ">
          
          <div className="w-full flex items-center gap-2 border-2 justify-center rounded-2xl">
            <div className="flex items-center lg:items-center flex-col lg:flex-col gap-5 px-4 py-4">
              <img className="w-40 h-40  rounded-md" src={user?.profilePicture || agent} alt="" />
              <div>
                <h1 className="text-3xl">{user?.name?.fullName}</h1>
                <h1 className="text-lg mt-1 justify-center">Member Since : { moment(user?.createdAt).format('YYYY-MM-DD')}</h1>
              </div>
            </div>

          </div>

          <div className="relative flex flex-col items-center rounded-[20px] mx-auto  bg-clip-border shadow-3xl shadow-shadow-500 ">
            <div className="mt-2 mb-8 w-full">
              <h4 className="px-2 text-xl font-bold mt-5">General Information</h4>
              {/* <p className="mt-2 px-2 text-base text-gray-600">
                As we live, our hearts turn colder. Cause pain is what we go
                through as we become older. We get insulted by others, lose
                trust for those others. We get back stabbed by friends. It
                becomes harder for us to give others a hand. We get our heart
                broken by people we love, even that we give them all...
              </p> */}
            </div>
            <div className="grid grid-cols-2 gap-4 px-2 w-full">
              <div className="flex flex-col items-start justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p className="text-sm text-gray-600">Contact</p>
                <p className="text-base font-medium text-navy-700 ">{user?.phone?.phone}</p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-base font-medium text-navy-700 ">{user?.email}</p>
              </div>

              <div className="flex flex-col items-start justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="text-base font-medium text-navy-700 "> { moment(user?.dob).format('YYYY-MM-DD')}</p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white border-2 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
                <p className="text-sm text-gray-600">Car Plate</p>
                <p className="text-base font-medium text-navy-700 ">{user?.vehicleInfo?.numberPlate}</p>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
