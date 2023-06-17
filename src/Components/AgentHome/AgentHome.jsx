import React, { useState,useEffect ,useContext} from "react";
import Navbar from "../../layout/Navbar";
import { AiOutlineArrowDown } from "react-icons/ai";
import agent from "/src/Assets/agent.png";
import { Link } from "react-router-dom";
import commonApi from "../../api/common";
import { Context } from "../context/Context";

const AgentHome = () => {
  const [active, setActive] = useState(false);
  const [appointments,setAppointments]=useState([])
  const { dispatch,user, isFetching } = useContext(Context);

  useEffect(()=>{
    const fetchAppointments=async ()=>{
      let data={
        query:{
          agentId:user._id,status:!active?"In-progress":"Completed"
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
          setAppointments(DATA.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchAppointments()
  },[active])
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
         {appointments.map((appointment,index)=>{
return <div
className="mt-10 border-2 rounded-xl flex items-center gap-10 p-9"
key={index}
>
<img className="w-32 lg:w-auto" src={agent} alt="" />
<div>
  <h1 className="text-3xl">{appointment.userObj?.name?.firstName}</h1>
  <h1 className="text-lg mt-1">Email : {appointment.userObj?.email}</h1>

  <h1 className="text-lg mt-1">Phone : {appointment.userObj?.phone?.phone}</h1>

  {/* <h1 className="text-lg mt-1">Member Since : 2020</h1> */}
</div>
</div>
         }) }
         {appointments.length ==0 && <div>No Appointments</div>}
         
        </div>
      </div>
    </div>
  );
};

export default AgentHome;
