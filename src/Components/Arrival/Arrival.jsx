import React from "react";

import Navbar from "../../layout/Navbar";
import moment from "moment";
import { Link } from "react-router-dom";
import arrivalForm from "/src/Assets/imageLogoLogin.png";
import agent from "/src/Assets/agent.png";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Rating from "@mui/material/Rating";
import { Button, TextField } from "@mui/material";
import { useState, useContext, useEffect } from "react";

import { Context } from "../../Components/context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";


const Arrival = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { dispatch,user, isFetching } = useContext(Context);
  const [appointment,setAppointment]=useState(null)


  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount


    let fetchAppointment=async()=>{
      let data={
        query:{
          userId:user._id,status:"In-progress"
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
          setAppointment(DATA.data[0])
        
        })
        .catch((error) => {
       
          console.error(error);
        });
    }
    fetchAppointment()
  }, []);

  const formik = useFormik({
    initialValues: {
      dateOfArrival:user?.arrival?.date || "",
      flightNumber: user?.arrival?.flightNumber || "",
      flightName: user?.arrival?.flightName || "",
      arrivalTime: user?.arrival?.time || "",
      airport: user?.arrival?.airport || "",
    },
    validationSchema: Yup.object({
      dateOfArrival: Yup.string().required("Required"),
      flightNumber: Yup.string().required("Required"),
      flightName: Yup.string().required("Required"),
      arrivalTime: Yup.string().required("Required"),
      airport: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
    
      let data={
       arrival:{date:values.dateOfArrival,
        time:values.arrivalTime,
        flightNumber:values.flightNumber,
        flightName:values.flightName,
        airport:values.airport}
      }
      await commonApi({
        action: "arrival",
        data: data,
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          dispatch({ type: "UPDATE_USER", payload: DATA });
          setActive(true)
        })
        .catch((error) => {
       
          console.error(error);
        });
    },
  });
  return (
    <div className=" min-h-screen   bg-[#f8f8fa]" >
      <Navbar />
      <Modal open={open} setOpen={setOpen} />
      <div className=" pt-28 ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActive(false)}
                className={
                  !active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-sm lg:text-lg"
                    : "border border-pr text-pr font-medium px-10 py-2 rounded-md  text-sm lg:text-lg"
                }
              >
                Pre-arrival Form
              </button>
              <button
                onClick={() => setActive(true)}
                className={
                  active
                    ? "bg-pr px-10 py-2 rounded-md text-white text-sm lg:text-lg"
                    : "border border-pr text-pr font-medium px-10 py-2 rounded-md  text-sm lg:text-lg"
                }
              >
                Tasks
              </button>
            </div>
          </div>
          {!active && (
            
  
            <form className="mt-16 max-w-7xl  bg-white text-base  border-2 rounded-2xl  " onSubmit={formik.handleSubmit}>
 <h1 className="text-3xl text-center mt-5 font-bold">
                PRE-ARRIVAL FORM
              </h1>
<div className="flex  ">
  
            {/* Dummy Image */}
            <div className="w-1/2 hidden md:block">
              <img src={arrivalForm} alt="Agent" className="w-full "  />
            </div>
              

            <div className="w-full sm:w-1/2 flex items-center justify-center flex-col px-5 " >
             
                <div className="mt-6 space-y-3 w-full ">
                  <div className=" flex-1 items-center  gap-x-6 ">
                    
                  <label
                          class="block text-sm font-medium mb-1"
                          for="card-expiry"
                        >
                          Date of arrival<span class="text-red-500">*</span>
                        </label>
                    {/* <input
                      type="text"
                      className="border px-2 py-2 lg:w-80 rounded-md outline-none bg-[#F8F8FA]"
                    /> */}
                    <TextField
                    
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#f8f8fa" ,width:'70%'  }}
                      id="dateOfArrival"
                      placeholder="Enter arrival date"
                      name="dateOfArrival"
                      error={
                        formik.touched.dateOfArrival &&
                        formik.errors.dateOfArrival
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.dateOfArrival}
                    />
                  </div>
                  <div className="relative flex-1 items-center gap-x-6">
                  <label
                          class="block text-sm font-medium mb-1"
                          for="card-expiry"
                        >
                          Flight Number<span class="text-red-500">*</span>
                        </label>
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#f8f8fa"  ,width:'70%'}}
                      id="flightNumber"
                      placeholder="Enter flight ticket no"
                      name="flightNumber"
                      error={
                        formik.touched.flightNumber &&
                        formik.errors.flightNumber
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.flightNumber}
                    />
                  </div>
                  <div className="relative flex-1 items-center gap-x-6">
                  <label
                          class="block text-sm font-medium mb-1"
                          for="card-expiry"
                        >
                          Flight Name<span class="text-red-500">*</span>
                        </label>
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#f8f8fa"  ,width:'70%'}}
                      id="flightName"
                      placeholder="Enter flight ticket no"
                      name="flightName"
                      error={
                        formik.touched.flightName &&
                        formik.errors.flightName
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.flightName}
                    />
                  </div>
                  <div className="relative flex-1 items-center gap-x-6">
                  <label
                          class="block text-sm font-medium mb-1"
                          for="card-expiry"
                        >
                          Arrival Time<span class="text-red-500">*</span>
                        </label>
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#f8f8fa" ,width:'70%' }}
                      id="arrivalTime"
                      placeholder="Enter flight arrival time"
                      name="arrivalTime"
                      error={
                        formik.touched.arrivalTime && formik.errors.arrivalTime
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.arrivalTime}
                    />
                  </div>

                  <div className="relative flex-1 items-center gap-x-6">
                  <label
                          class="block text-sm font-medium mb-1"
                          for="card-expiry"
                        >
                          Airport<span class="text-red-500">*</span>
                        </label>
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#f8f8fa"  ,width:'70%'}}
                      id="airport"
                      placeholder="Enter airport name"
                      name="airport"
                      error={formik.touched.airport && formik.errors.airport}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.airport}
                    />
                  </div>
                </div>
                
                  {/* <button className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
                    SUBMIT
                  </button> */}
                  {/* <Button type="submit"   
              disabled={!(formik.isValid && formik.dirty)}
              style={{
                backgroundColor: "#6d81fe",
                color: "#fff",
                borderRadius: 5,
                padding: 8,
                marginTop: 20,
                textTransform: 'none',
                fontSize:15,
                width:100,
              }}>
                Submit
              </Button> */}
                  <Button
                  type="submit"
                    variant="contained"
                    sx={{
                      color: "#ffffff",
                      bgcolor: "#6D81FC",
                      textTransform: "none",
                      alignSelf: "flex-start",
                      marginTop: 3,
                      "&:hover": {
                        bgcolor: "#6d81fc",
                        color: "#ffffff",
                        
                      },
                    }}
                  >
                    Submit
                  </Button>
                  </div>
              </div>
            </form>
            
          )}
          {active && (
            <div className="mt-20 max-w-7xl mx-auto bg-[#ffffff] border-2 rounded-2xl p-5">
              <h1 className="text-3xl text-center font-bold">TASKS</h1>
              <div class="container px-5 py-5 mx-auto bg-white rounded-2xl">
                <div class="p-5 bg-white flex items-center mx-auto  border-2 mb-5  rounded-lg sm:flex-row flex-col">
                  <div class="sm:w-48 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                    <img src={agent} />
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h1 class="text-black text-2xl title-font font-bold font_ab mb-2">
                      Agents Details
                    </h1>
                    
                    {/* <div class="py-4">
                      <div class=" inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center">
                          <svg
                            class="text-yellow-500 w-6 h-6 mr-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                          <p class="title-font font-medium">Python</p>
                        </div>
                      </div>
                      <div class="inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center">
                          <svg
                            class="text-yellow-500 w-6 h-6 mr-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                          <p class="title-font font-medium">C</p>
                        </div>
                      </div>
                      <div class=" inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center">
                          <svg
                            class="text-yellow-500 w-6 h-6 mr-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                          <p class="title-font font-medium">Php</p>
                        </div>
                      </div>
                      <div class=" inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center">
                          <svg
                            class="text-gray-500 w-6 h-6 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                          <p class="title-font font-medium">Swift</p>
                        </div>
                      </div>

                      <div class=" inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center">
                          <svg
                            class="text-gray-500 w-6 h-6 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                          <p class="title-font font-medium">Java</p>
                        </div>
                      </div>
                      <div class=" inline-block mr-2">
                        <div class="flex  pr-2 h-full items-center">
                          <svg
                            class="text-gray-500 w-6 h-6 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                          <p class="title-font font-medium">Javascript</p>
                        </div>
                      </div>
                    </div> */}
                    <div class="md:flex font-bold text-gray-800">
                      <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-full">
                          <h2 class="text-gray-500">Name</h2>
                          <p>{appointment?.agentObj?.name?.fullName}</p>
                        </div>
                    
                      </div>
                      <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-full">
                          <h2 class="text-gray-500">Contact</h2>
                          <p>{appointment?.agentObj?.phone?.phone}</p>
                        </div>
                        
                      </div>
                      <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-full">
                          <h2 class="text-gray-500">Car Plate</h2>
                          <p>SAM 741</p>
                        </div>
                    
                      </div>
                      <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-full">
                          <h2 class="text-gray-500">Email</h2>
                          <p>{appointment?.agentObj?.email}</p>
                        </div>
                        
                      </div>
                      {/* <div class="w-full md:w-1/2 flex space-x-3">
                        <div class="w-1/2">
                          <h2 class="text-gray-500">Contact</h2>
                          <p>520-210-5789</p>
                        </div>
                        <div class="w-1/2">
                          <h2 class="text-gray-500">Car plate</h2>
                          <p>HXB 521</p>
                        </div>
                      </div> */}
                      
                    </div>
                    {/* <div class="flex mt-5">
                          <h2 class="text-gray-500 mr-2 font-bold" >Last Activity: </h2>
                          <p>Airport Pickup</p>
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

                 return  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center" >
                     {index+1}
                    </div>
                    <div className="text-sm leading-6" >
                      <label
                        htmlFor="comments"
                        className="font-medium text-sm lg:text-lg text-gray-900"
                      >
                       {task.completed ? <s>{task.name}</s> : task.name} 
                       
                      </label>
                    </div>
                  </div>})}
                
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="text-white mt-16 bg-pr px-7 py-2 rounded-md"
                >
                  Give Feedback
                </button>
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
          )}
        </div>
      </div>
    </div>
  );
};

function Modal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-96 lg:w-full lg:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl lg:text-2xl w-full text-center font-semibold leading-6 text-gray-900"
                      >
                        Feedback on Services
                      </Dialog.Title>
                      <div className="my-8">
                        <div className="flex items-center justify-between lg:grid grid-cols-2  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Airport Pickup
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value === 0 ? "Not Yet Rated" : `${value}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Hotel Stay
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value1}
                              onChange={(event, newValue) => {
                                setValue1(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value1 === 0 ? "Not Yet Rated" : `${value1}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4 l gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Bus Pass
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value2}
                              onChange={(event, newValue) => {
                                setValue2(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value2 === 0 ? "Not Yet Rated" : `${value2}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Government Id
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value3}
                              onChange={(event, newValue) => {
                                setValue3(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value3 === 0 ? "Not Yet Rated" : `${value3}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:grid grid-cols-2 mt-4  gap-2 lg:gap-8">
                          <p className="text-sm lg:text-xl text-gray-500">
                            Health Card
                          </p>
                          <div className="flex items-center  gap-4">
                            <Rating
                              name="simple-controlled"
                              value={value4}
                              onChange={(event, newValue) => {
                                setValue4(newValue);
                              }}
                            />
                            <p className="text-sm lg:text-xl text-gray-500">
                              {value4 === 0 ? "Not Yet Rated" : `${value4}/5`}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-gray-500 text-left">
                            Write your feedback here:
                          </p>
                          <textarea
                            className="border outline-none rounded-md mt-2 bg-transparent w-full"
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                          ></textarea>
                        </div>
                        <div className="flex items-center justify-end">
                          <button className="text-white mt-4 bg-pr px-7 py-2 rounded-md">
                            Give Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Arrival;
